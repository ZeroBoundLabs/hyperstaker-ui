import { SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/Button";
import { Box, BoxProps } from "./ui/Box";
import { Stepper } from "./ui/Stepper";
import { Step } from "./ui/Step";
import { StepLabel } from "./ui/StepLabel";
import { TextField } from "./ui/TextField";
import { DatePicker } from "./ui/DatePicker";
import { FileUpload } from "./ui/FileUpload";
import { useHypercertClient } from "@/hooks/useHypercertClient";
import { alloRegistryAbi } from "./data";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { Abi } from "viem";
import { formatHypercertData, TransferRestrictions } from "@hypercerts-org/sdk";
import { Modal } from "./ui/Modal";
import { LinearProgress } from "./ui/LinearProgress";

interface AlloPoolFormData {
  title: string;
  description: string;
  website: string;
  projectTwitter: string;
  projectGithub: string;
  logoImg: File | null;
  bannerImg: File | null;
  logoImgData: string;
  bannerImgData: string;
  credentials: string[];
  members: string[];
  createdAt: Date;
}

interface HypercertFormData {
  goal: string;
  receivingAddress: string;
  impactScope: string[];
  excludedImpactScope: string[];
  workScope: string[];
  excludedWorkScope: string[];
  workTimeframeStart: Date;
  workTimeframeEnd: Date;
  impactTimeframeStart: Date;
  impactTimeframeEnd: Date;
  contributorsList: string[];
  rights: string[];
  excludedRights: string[];
}

interface StepBoxProps extends BoxProps {
  isActive: boolean;
  isCompleted: boolean;
}

function StepBox({ isActive, isCompleted, children, ...props }: StepBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        p: 1,
      }}
      {...props}
    >
      <span
        style={{
          color: isActive ? "#1976d2" : isCompleted ? "#2e7d32" : "#757575",
        }}
      >
        {children}
      </span>
    </Box>
  );
}

export default function CreateProject() {
  const [activeStep, setActiveStep] = useState(0);
  const [alloMetadataIPFSHash, setAlloMetadataIPFSHash] = useState("");
  const alloPoolForm = useForm<AlloPoolFormData>();
  const hypercertForm = useForm<HypercertFormData>();
  const account = useAccount();
  const alloContract = useWriteContract();

  const { client } = useHypercertClient();

  const [completedSteps, setCompletedSteps] = useState<{
    ipfsHash?: string;
    alloProfileId?: string;
    hypercertId?: string;
    pendingTxHash?: `0x${string}`;
  }>({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [stepStatus, setStepStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [currentStep, setCurrentStep] = useState(0);

  const {
    data: txReceipt,
    isError: txError,
    isLoading: txLoading,
  } = useWaitForTransactionReceipt({
    hash: completedSteps.pendingTxHash,
    // enabled: !!completedSteps.pendingTxHash,
  });

  const handleAlloPoolSubmit = async (data: AlloPoolFormData) => {
    console.log("Allo Pool Data:", data);
    setActiveStep(1);
  };

  const handleHypercertSubmit = async (data: HypercertFormData) => {
    console.log("Hypercert Data:", data);
    handleSubmitProject();
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmitProject = async () => {
    const alloPoolData = alloPoolForm.getValues();
    const hypercertData = hypercertForm.getValues();

    setIsModalOpen(true);
    setStepStatus("processing");
    setErrorMessage("");

    try {
      // Step 1: Save to IPFS (skip if already completed)
      if (!completedSteps.ipfsHash) {
        setCurrentStep(0);
        let alloProfileMetadataIPFS: string;

        if (!alloMetadataIPFSHash) {
          if (alloPoolData.logoImg) {
            const logoUploadResp = await fetch("/api/ipfs/file", {
              method: "POST",
              body: alloPoolData.logoImg,
            });
            const logoUploadRespData = await logoUploadResp.json();
            alloPoolData["logoImg"] = logoUploadRespData.IpfsHash;
            alloPoolData.logoImgData = "{}";
          }

          if (alloPoolData.bannerImg) {
            const bannerUploadResp = await fetch("/api/ipfs/file", {
              method: "POST",
              body: alloPoolData.bannerImg,
            });
            const bannerUploadRespData = await bannerUploadResp.json();
            alloPoolData["bannerImg"] = bannerUploadRespData.IpfsHash;
            alloPoolData.bannerImgData = "{}";
          }

          const alloProfileMetadata = await fetch("/api/ipfs/json", {
            method: "POST",
            body: JSON.stringify(alloPoolData),
          });
          const alloProfileMetadataResp = await alloProfileMetadata.json();
          alloProfileMetadataIPFS = alloProfileMetadataResp.IpfsHash;
          setAlloMetadataIPFSHash(alloProfileMetadataIPFS);
        }

        setCompletedSteps((prev) => ({
          ...prev,
          ipfsHash: alloProfileMetadataIPFS ?? alloMetadataIPFSHash,
        }));
      }

      // Step 2: Create Allo Profile (skip if already completed)
      if (!completedSteps.pendingTxHash) {
        setCurrentStep(1);
        try {
          console.log(alloPoolData);
          const tx = await alloContract.writeContractAsync({
            address: "0x4AAcca72145e1dF2aeC137E1f3C5E3D75DB8b5f3",
            abi: alloRegistryAbi as Abi,
            functionName: "createProfile",
            args: [
              BigInt(Date.now().toString()),
              alloPoolData.title,
              {
                pointer: completedSteps.ipfsHash,
                protocol: "1",
              },
              account.address as string,
              alloPoolData.members,
            ],
          });

          // Store the transaction hash
          setCompletedSteps((prev) => ({
            ...prev,
            pendingTxHash: tx,
          }));
        } catch (error) {
          console.error("Error creating Allo Profile:", error);
          setStepStatus("error");
          setErrorMessage(
            error instanceof Error
              ? error.message
              : "Failed to create Allo Profile"
          );
          return;
        }
      }

      // Watch for transaction receipt
      if (txReceipt && !completedSteps.alloProfileId) {
        // Extract profileId from transaction receipt events
        const profileId = txReceipt.logs[0]?.topics?.[1]; // Adjust based on your contract's event structure

        if (profileId) {
          setCompletedSteps((prev) => ({
            ...prev,
            alloProfileId: profileId,
            pendingTxHash: undefined, // Clear the pending tx hash
          }));
        }
      }

      // Handle transaction error
      if (txError) {
        setStepStatus("error");
        setErrorMessage("Transaction failed");
        return;
      }

      // Step 3: Create Hypercert (skip if already completed)
      if (!completedSteps.hypercertId) {
        setCurrentStep(2);
        const metadata = formatHypercertData({
          name: alloPoolData.title,
          description: alloPoolData.description,
          image: `https://ipfs.io/ipfs/${alloPoolData.bannerImg}`,
          version: "1.0",
          impactScope: hypercertData.impactScope as string[],
          excludedImpactScope: hypercertData.excludedImpactScope as string[],
          workScope: hypercertData.workScope as string[],
          excludedWorkScope: hypercertData.excludedWorkScope as string[],
          workTimeframeStart:
            new Date(hypercertData.workTimeframeStart).getTime() / 1000,
          workTimeframeEnd:
            new Date(hypercertData.workTimeframeEnd).getTime() / 1000,
          impactTimeframeStart:
            new Date(hypercertData.impactTimeframeStart).getTime() / 1000,
          impactTimeframeEnd:
            new Date(hypercertData.impactTimeframeEnd).getTime() / 1000,
          contributors: [
            account.address as string,
            ...hypercertData.contributorsList,
          ],
          rights: [...hypercertData.rights],
          excludedRights: [...hypercertData.excludedRights],
        });

        console.log(metadata.data);

        if (!metadata.data) {
          throw new Error("Metadata is null");
        }

        const txId = await client.mintHypercert({
          metaData: metadata.data,
          totalUnits: BigInt(hypercertData.goal) * BigInt(1000000),
          transferRestriction: TransferRestrictions.FromCreatorOnly,
        });

        setCompletedSteps((prev) => ({
          ...prev,
          hypercertId: txId,
        }));
      }

      setStepStatus("success");
      setTimeout(() => setIsModalOpen(false), 2000);
    } catch (error) {
      console.error("Error creating project:", error);
      setStepStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "An unknown error occurred"
      );
    }
  };

  const handleLogoUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      alloPoolForm.setValue("logoImg", file);
      alloPoolForm.setValue("logoImgData", reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleBannerUpload = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      alloPoolForm.setValue("bannerImg", file);
      alloPoolForm.setValue("bannerImgData", reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const steps = [
    "Saving to IPFS",
    "Creating Allo Profile",
    "Creating Hypercert",
  ];

  return (
    <Box sx={{ width: "80%", p: 3 }}>
      <Stepper activeStep={activeStep}>
        <Step>
          <StepLabel>Create Allo Pool</StepLabel>
        </Step>
        <Step>
          <StepLabel>Create Hypercert</StepLabel>
        </Step>
      </Stepper>

      {activeStep === 0 ? (
        <form onSubmit={alloPoolForm.handleSubmit(handleAlloPoolSubmit)}>
          <TextField
            key="allo-title"
            label="Project Title"
            fullWidth
            margin="normal"
            error={!!alloPoolForm.formState.errors.title}
            helperText={alloPoolForm.formState.errors.title?.message}
            {...alloPoolForm.register("title", {
              required: "Title is required",
            })}
          />
          <TextField
            key="allo-description"
            label="Project Description"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            error={!!alloPoolForm.formState.errors.description}
            helperText={alloPoolForm.formState.errors.description?.message}
            {...alloPoolForm.register("description", {
              required: "Description is required",
            })}
          />
          <TextField
            key="allo-website"
            label="Website"
            fullWidth
            margin="normal"
            error={!!alloPoolForm.formState.errors.website}
            helperText={alloPoolForm.formState.errors.website?.message}
            {...alloPoolForm.register("website")}
          />
          <TextField
            key="allo-twitter"
            label="Twitter Handle"
            fullWidth
            margin="normal"
            error={!!alloPoolForm.formState.errors.projectTwitter}
            helperText={alloPoolForm.formState.errors.projectTwitter?.message}
            {...alloPoolForm.register("projectTwitter")}
          />
          <TextField
            key="allo-github"
            label="GitHub Repository"
            fullWidth
            margin="normal"
            error={!!alloPoolForm.formState.errors.projectGithub}
            helperText={alloPoolForm.formState.errors.projectGithub?.message}
            {...alloPoolForm.register("projectGithub")}
          />
          <FileUpload
            key="allo-logoimage"
            label="Logo Image"
            accept="image/*"
            onChange={handleLogoUpload}
            margin="normal"
          />
          <FileUpload
            key="allo-bannerimage"
            label="Banner Image"
            accept="image/*"
            onChange={handleBannerUpload}
            margin="normal"
          />
          <TextField
            key="allo-members"
            label="Member addresses"
            fullWidth
            margin="normal"
            error={!!alloPoolForm.formState.errors.members}
            helperText={alloPoolForm.formState.errors.members?.message}
            {...(alloPoolForm.register("members"),
            {
              onChange: (e) => {
                alloPoolForm.setValue(
                  "members",
                  e.target.value
                    .split(",")
                    .map((i) => i.trim())
                    .filter((item) => item !== "")
                );
              },
            })}
          />
          <TextField
            key="allo-credentials"
            label="Required Credentials"
            fullWidth
            margin="normal"
            error={!!alloPoolForm.formState.errors.credentials}
            helperText={alloPoolForm.formState.errors.credentials?.message}
            {...alloPoolForm.register("credentials")}
          />
          <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" type="submit">
              Next
            </Button>
          </Box>
        </form>
      ) : (
        <form onSubmit={hypercertForm.handleSubmit(handleHypercertSubmit)}>
          <TextField
            key="hc-goal"
            label="Project Goal (USD)"
            fullWidth
            margin="normal"
            error={!!hypercertForm.formState.errors.goal}
            helperText={hypercertForm.formState.errors.goal?.message}
            {...hypercertForm.register("goal", {
              required: true,
              valueAsNumber: true,
            })}
          />
          <TextField
            key="hc-address"
            label="Receiving Address"
            fullWidth
            margin="normal"
            {...hypercertForm.register("receivingAddress", {
              required: "Receiving address is required",
            })}
          />
          <TextField
            key="c-impactscope"
            label="Impact Scope"
            fullWidth
            margin="normal"
            {...(hypercertForm.register("impactScope"),
            {
              required: true,
              onChange: (e) => {
                hypercertForm.setValue("impactScope", [
                  ...e.target.value
                    .split(",")
                    .map((i: string) => i.trim())
                    .filter((item: string) => item !== ""),
                ]);
              },
            })}
          />
          <TextField
            key="hc-excludedimpactscope"
            label="Excluded Impact Scope"
            fullWidth
            margin="normal"
            {...(hypercertForm.register("excludedImpactScope"),
            {
              required: true,
              onChange: (e) => {
                hypercertForm.setValue("excludedImpactScope", [
                  ...e.target.value
                    .split(",")
                    .map((i: string) => i.trim())
                    .filter((item: string) => item !== ""),
                ]);
              },
            })}
          />
          <TextField
            key="hc-workscope"
            label="Work Scope"
            fullWidth
            margin="normal"
            {...(hypercertForm.register("workScope"),
            {
              required: true,
              onChange: (e) => {
                hypercertForm.setValue("workScope", [
                  ...e.target.value
                    .split(",")
                    .map((i: string) => i.trim())
                    .filter((item: string) => item !== ""),
                ]);
              },
            })}
          />
          <TextField
            key="hc-excludedworkscope"
            label="Excluded Work Scope"
            fullWidth
            margin="normal"
            {...(hypercertForm.register("excludedWorkScope"),
            {
              required: true,
              onChange: (e) => {
                hypercertForm.setValue("excludedWorkScope", [
                  ...e.target.value
                    .split(",")
                    .map((i: string) => i.trim())
                    .filter((item: string) => item !== ""),
                ]);
              },
            })}
          />
          <DatePicker
            {...hypercertForm.register("workTimeframeStart")}
            label="Work Start Date"
          />
          <DatePicker
            {...hypercertForm.register("workTimeframeEnd")}
            label="Work End Date"
          />
          <DatePicker
            {...hypercertForm.register("impactTimeframeStart")}
            label="Impact Start Date"
          />
          <DatePicker
            {...hypercertForm.register("impactTimeframeEnd")}
            label="Impact End Date"
          />
          <TextField
            key="hc-contributors"
            label="Contributors"
            fullWidth
            margin="normal"
            {...(hypercertForm.register("contributorsList"),
            {
              required: true,
              onChange: (e) => {
                hypercertForm.setValue("contributorsList", [
                  ...e.target.value
                    .split(",")
                    .map((i: string) => i.trim())
                    .filter((item: string) => item !== ""),
                ]);
              },
            })}
          />
          <TextField
            key="hc-rights"
            label="Rights"
            fullWidth
            margin="normal"
            {...(hypercertForm.register("rights"),
            {
              required: true,
              onChange: (e) => {
                hypercertForm.setValue("rights", [
                  ...e.target.value
                    .split(",")
                    .map((i: string) => i.trim())
                    .filter((item: string) => item !== ""),
                ]);
              },
            })}
          />
          <TextField
            key="hc-excludedrights"
            label="Excluded Rights"
            fullWidth
            margin="normal"
            {...(hypercertForm.register("excludedRights"),
            {
              onChange: (e) => {
                hypercertForm.setValue("excludedRights", [
                  ...e.target.value
                    .split(",")
                    .map((i: string) => i.trim())
                    .filter((item: string) => item !== ""),
                ]);
              },
            })}
          />
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button onClick={handleBack}>Back</Button>
            <Button variant="contained" type="submit">
              Create Project
            </Button>
          </Box>
        </form>
      )}

      <Modal
        open={isModalOpen}
        onClose={() => stepStatus !== "processing" && setIsModalOpen(false)}
      >
        <Box sx={{ p: 4, width: "400px" }}>
          <h2 className="text-[#100437]">Creating Project</h2>
          <LinearProgress
            variant="determinate"
            value={(currentStep + 1) * (100 / steps.length)}
          />

          {steps.map((step, index) => (
            <StepBox
              key={step}
              isActive={index === currentStep}
              isCompleted={index < currentStep}
            >
              {index < currentStep && "✓ "}
              {step}
              {completedSteps[
                ["ipfsHash", "alloProfileId", "hypercertId"][
                  index
                ] as keyof typeof completedSteps
              ] && (
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "0.8em",
                    color: "#757575",
                  }}
                >
                  (ID:{" "}
                  {completedSteps[
                    ["ipfsHash", "alloProfileId", "hypercertId"][
                      index
                    ] as keyof typeof completedSteps
                  ]?.slice(0, 6)}
                  ...)
                </span>
              )}
            </StepBox>
          ))}

          {stepStatus === "success" && (
            <Box sx={{ mt: 2 }}>
              <span style={{ color: "#2e7d32" }}>
                Project created successfully!
              </span>
            </Box>
          )}

          {stepStatus === "error" && (
            <Box sx={{ mt: 2 }}>
              <p style={{ color: "red" }}>Error: {errorMessage}</p>
              <Button
                variant="contained"
                onClick={() => {
                  setStepStatus("processing");
                  handleSubmitProject();
                }}
              >
                Retry
              </Button>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}
