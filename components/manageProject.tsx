"use client";
import { ProjectAvatar } from "./ProjectAvatar";
import { ProjectBanner } from "./ProjectBanner";
import { Skeleton } from "./ui/Skeleton";
import Project from "../interfaces/Project";
import Metadata from "../interfaces/Metadata";
import { TextField } from "./ui/TextField";
import { useForm } from "react-hook-form";
import { useWriteContract } from "wagmi";
import { hyperfundAbi } from "./data";
import { Abi } from "viem";
import { Button } from "./ui/Button";
import AllocateForm from "./allocate.js";
import { useState } from "react";
import { Modal } from "./ui/Modal";

export default function ManageProject({
  project,
  isLoading,
  hyperfund,
}: {
  project: Project;
  metadata: Metadata;
  isLoading: boolean;
  hyperfund: string;
}) {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [txHash, setTxHash] = useState("");
  const assetForm = useForm();
  const hyperfundContract = useWriteContract();

  const handleAddAddress = async () => {
    try {
      const newAsset = assetForm.getValues("address");
      const multiplier = assetForm.getValues("multiplier");

      const tx = await hyperfundContract.writeContractAsync({
        address: hyperfund as `0x${string}`,
        abi: hyperfundAbi as Abi,
        functionName: "allowlistToken",
        args: [newAsset, multiplier],
      });

      assetForm.reset();
      setTxHash(tx);
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  return (
    <div className="basis-10/12 mx-auto">
      {/* data-testid={`project-${project.id}`} */}
      <article className=" group rounded-2xl border border-gray-200 p-2 hover:border-primary-500 dark:border-gray-700 dark:hover:border-primary-500">
        <div className="opacity-70 transition-opacity group-hover:opacity-100">
          <ProjectBanner
            profileId={project?.recipient}
            url={project?.bannerUrl}
          />
          <ProjectAvatar
            rounded="full"
            className="-mt-8 ml-4"
            address={project?.recipient}
            url={project?.avatarUrl}
          />
        </div>
        <div className="px-4">
          <div className="flex">
            <div className="p-2 mr-16  flex-1">
              <h3>{project?.name}</h3>
              <div className="mb-2">
                <p className="h-10 text-sm dark:text-gray-300">
                  <Skeleton isLoading={isLoading} className="w-full">
                    {project?.longDescription || project?.longDescription}
                  </Skeleton>
                </p>
              </div>
              <div className="mb-24">
                <Skeleton isLoading={isLoading} className="w-full">
                  <div className="">
                    <h5 className="mt-8">
                      Funds raised <span className="float-right">40%</span>
                    </h5>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        style={{ width: "45%" }}
                        className="mb-4 bg-blue-600 h-2.5 rounded-full"
                      ></div>
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <div className="text-sm font-medium text-gray-100">
                            Past Funding
                          </div>
                          <div className="text-2xl font-bold text-gray-200">
                            1.2 ETH
                          </div>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-gray-100">
                            Target
                          </div>
                          <div className="text-2xl font-bold text-gray-300">
                            40 ETH
                          </div>
                          {/* <div className="text-xs text-gray-200">
                            20% of prev RPGF
                          </div> */}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-200">
                            Retro split
                          </div>
                          <div className="text-2xl font-bold text-gray-300">
                            20%
                          </div>
                        </div>
                      </div>
                      <div className="clear-both"></div>
                    </div>
                    <div className="clear-both"></div>
                  </div>
                </Skeleton>
              </div>
              <div>
                <h4>Add Supported Assets</h4>
                <div>
                  <TextField
                    label="Address"
                    fullWidth
                    margin="normal"
                    {...assetForm.register("address", {
                      required: true,
                    })}
                  />
                </div>
                <div>
                  <TextField
                    label="Multiplier"
                    fullWidth
                    margin="normal"
                    {...assetForm.register("multiplier", {
                      required: true,
                    })}
                  />
                </div>
                <div>
                  <Button type="button" onClick={handleAddAddress}>
                    Add Token
                  </Button>
                </div>
              </div>
              {/* <Skeleton isLoading={isLoading} className="w-[100px]">
                <ImpactCategories tags={metadata?.data?.impactCategory} />
              </Skeleton> */}
            </div>
            <div className="flex-1">
              <AllocateForm hyperfund={hyperfund} />
            </div>
          </div>
        </div>
      </article>

      <Modal open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
        <div className="p-6">
          <h3 className="text-black text-lg font-medium mb-4">
            Transaction Successful!
          </h3>
          <p className="text-gray-600 mb-4">Transaction Hash:</p>
          <p className="break-all text-sm bg-gray-100 p-2 rounded">{txHash}</p>
          <Button className="mt-4" onClick={() => setShowSuccessModal(false)}>
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
}
