"use client";
import React, { useState } from "react";
import { useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";
import Project from "../interfaces/Project";

interface FundProps {
  project: Project;
}
const Fund: React.FC<FundProps> = ({
  project,
  metadata,
  isLoading,
}: {
  project: Project;
  metadata: Metadata;
  isLoading: boolean;
}) => {
  const [selectedToken, setSelectedToken] = useState<string>("ETH");
  const [amount, setAmount] = useState<string>("");
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  // Prepare transaction

  //const { sendTransaction, success, isLoading, error } = useSendTransaction();
  const { data: hash, sendTransaction } = useSendTransaction();

  const handleTokenChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedToken(event.target.value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const amountValue = event.target.value;
    setAmount(amountValue);
    setIsButtonEnabled(amountValue !== "");
  };

  const doFund = async () => {
    if (!isButtonEnabled || isLoading) return;
    try {
      console.log(
        "Funding project",
        project.name,
        "with",
        amount,
        selectedToken
      );
      const tx = await sendTransaction({
        to: project.recipient,
        value: parseEther(amount),
      });
      console.log("Transaction submitted:", tx.hash);
      // Optionally, wait for the transaction to be mined
      // const receipt = await tx.wait();
      // console.log("Transaction confirmed:", receipt.transactionHash);
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4">
        <select
          className="bg-gray-700 text-white block w-full p-2 border border-gray-300 rounded-md"
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
        />
      </div>
      <button
        className={`p-2 text-white rounded-md ${
          isButtonEnabled && !isLoading
            ? "bg-blue-500 hover:bg-blue-700"
            : "bg-gray-500 cursor-not-allowed"
        }`}
        disabled={!isButtonEnabled || isLoading}
        onClick={doFund}
      >
        {isLoading ? "Processing..." : "Fund"}
      </button>
      {isSuccess && (
        <div className="text-green-500">
          Successfully funded {project.name} with {amount} {selectedToken}.
        </div>
      )}
      {error && <div className="text-red-500">Error: {error.message}</div>}
    </div>
  );
};

export default Fund;
