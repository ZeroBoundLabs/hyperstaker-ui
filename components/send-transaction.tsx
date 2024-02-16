import React, { useState } from "react";
import {
  type BaseError,
  useSendTransaction,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import projects from "@/projectData";
import Project from "../interfaces/Project";

interface FundProps {
  project: Project;
}

const Fund: React.FC<FundProps> = ({ project }) => {
  const [selectedToken, setSelectedToken] = useState<string>("ETH");
  const [amount, setAmount] = useState<string>("");
  const {
    data: hash,
    error,
    isPending,
    sendTransaction,
  } = useSendTransaction();
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
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4">
          <input
            type="hidden"
            name="address"
            placeholder={project.recipient}
            required
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
          <button
            className="p-2 text-white rounded-md bg-blue-500"
            disabled={isPending}
            type="submit"
          >
            {isPending ? "Confirming..." : "Send"}
          </button>
          {hash && <div>Transaction Hash: {hash}</div>}
          {isConfirming && <div>Waiting for confirmation...</div>}
          {isConfirmed && <div>Transaction confirmed.</div>}
          {error && (
            <div>
              Error: {(error as BaseError).shortMessage || error.message}
            </div>
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
      </div>
    </form>
  );
};
export default Fund;
