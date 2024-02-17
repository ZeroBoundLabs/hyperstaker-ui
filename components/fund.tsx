import React, { useState } from "react";
import {
  type BaseError,
  useSendTransaction,
  useWaitForTransactionReceipt,
  useAccount,
} from "wagmi";
import { parseEther } from "viem";
import projects from "@/projectData";
import Project from "../interfaces/Project";
import { getTransactionExplorerUrl } from "../explorer";
interface FundProps {
  project: Project;
}

const Fund: React.FC<FundProps> = ({ project }) => {
  const { chain, isConnected } = useAccount();
  //const [isConnected, setIsConnected] = useState<boolean>(isConnected);
  const [selectedToken, setSelectedToken] = useState<string>("ETH");
  const [amount, setAmount] = useState<string>("");
  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();

  const transactionUrl =
    hash && chain ? getTransactionExplorerUrl(chain.id, hash) : undefined;
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amountValue = event.target.value;
    setAmount(amountValue);
    setIsButtonEnabled(amountValue !== "");
  };
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const to = formData.get("address") as `0x${string}`;
    const value = formData.get("value") as string;
    debugger;
    sendTransaction({ to, value: parseEther(value) });
  }
  const handleTokenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedToken(event.target.value);
  };
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  return (
    <form onSubmit={submit}>
      <div className="space-y-4 space-x-4">
        {!hash && (
          <>
            <h3>Support the future of public goods</h3>
            <p>
              Enter the amount of ETH you would like to donate to this project.
            </p>
            <div className="flex flex-row">
              <input
                type="hidden"
                name="address"
                placeholder={project.recipient}
                required
                value={project.recipient}
              />
              {/* <input name="value" placeholder="0.05" required /> */}
              <select
                className="bg-gray-700 text-white block w-full mx-0 p-2 border border-gray-300 rounded-md"
                value={selectedToken}
                onChange={handleTokenChange}
              >
                <option value="ETH">ETH</option>
                <option value="USDC" disabled>
                  USDC
                </option>
                <option value="DAI" disabled>
                  DAI
                </option>
              </select>
              <input
                type="text"
                className="bg-gray-700 text-white block w-full p-2 border border-gray-300 rounded-md"
                placeholder={`Enter ${selectedToken} amount`}
                value={amount}
                onChange={handleAmountChange}
                name="value"
                required
              />
            </div>
            <div>
              {isConnected && (
                <button
                  className="p-2 text-white rounded-md bg-blue-500"
                  disabled={isPending}
                  type="submit"
                >
                  {isPending ? "Confirming..." : "Send"}
                </button>
              )}
              {!isConnected && <h4>Please connect your wallet to contiue</h4>}
            </div>
          </>
        )}
        {hash && (
          <div className="pt-4">
            <h3>🎉 Success!</h3>
            <p>Thank you for supporting this project!</p>
            <div>
              {transactionUrl && (
                <span>
                  <a href={transactionUrl}></a>View your transactions here:{" "}
                  {hash}
                </span>
              )}
            </div>
            <h4>This project's funding life cycle</h4>
            <h5 className="hyper">Step 1</h5>
            <p className="hyper">
              You have just donated to this public goods project
            </p>
            <h5>Step 2</h5>
            <p>The project reaches the complete funding round</p>
            <h5>Step 3</h5>
            <p>Project is funded</p>
          </div>
        )}
        {isConfirming && <div>Waiting for confirmation...</div>}
        {isConfirmed && <div>Transaction confirmed.</div>}
        {error && (
          <div>Error: {(error as BaseError).shortMessage || error.message}</div>
        )}
        {/* <button
            className={`p-2 text-white rounded-md ${
              isButtonEnabled && !isLoading
                ? "bg-blue-500 hover:bg-blue-700"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            // disabled={!isButtonEnabled || isLoading}
            disabled={!isButtonEnabled || isLoading}
            // onClick={doFund}
          >
            {isLoading ? "Processing..." : "Fund"}
          </button> */}
      </div>
    </form>
  );
};
export default Fund;
