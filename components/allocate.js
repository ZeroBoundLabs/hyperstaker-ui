import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/Button";
import { TextField } from "./ui/TextField";

function AllocateForm() {
    const [addresses, setAddresses] = useState(["0x7B4fd15B495b5700aF2C193f52D830e51C049366", "0x264f9EF85C21DE49451c3636116668889Ca41aab", "example.eth"]); // Example list of addresses/ENS names
    const [inputs, setInputs] = useState({}); // State to hold input values
    const allocateForm = useForm();

    // Add new state for allocation history
    const [allocationHistory] = useState([
        { address: "0x7B4fd15B495b5700aF2C193f52D830e51C049366", allocated: "5.0", redeemed: "3.2" },
        { address: "0x264f9EF85C21DE49451c3636116668889Ca41aab", allocated: "2.5", redeemed: "1.0" },
        { address: "example.eth", allocated: "3.0", redeemed: "0.0" },
    ]);

    const handleInputChange = (address, value) => {
        setInputs(prev => ({ ...prev, [address]: value }));
    };

    const handleIncrease = (address) => {
        setInputs(prev => ({ ...prev, [address]: (parseFloat(prev[address] || 0) + 1).toString() }));
    };

    const handleDecrease = (address) => {
        setInputs(prev => ({ ...prev, [address]: (Math.max(0, parseFloat(prev[address] || 0) - 1)).toString() }));
    };

    const handleAddAddress = () => {
      const newAddress = allocateForm.getValues("address"); // Get the address from the form
      if (newAddress && !addresses.includes(newAddress)) { // Check if address is valid and not a duplicate
          setAddresses(prev => [...prev, newAddress]); // Add new address to the list
          allocateForm.resetField("address"); // Clear the input field in the form
      }
  };

    // Calculate totals
    const totals = allocationHistory.reduce((acc, curr) => {
        return {
            allocated: acc.allocated + parseFloat(curr.allocated),
            redeemed: acc.redeemed + parseFloat(curr.redeemed)
        };
    }, { allocated: 0, redeemed: 0 });

    return (
      <div>
        <form>
            <div className="space-y-4 space-x-4">
              <h4>Allocate funds to contributors</h4>
              {addresses.map(address => (
                  <div key={address} className="flex justify-between">
                      <label>{address}</label>
                      <div className="flex items-center">
                          <button type="button" onClick={() => handleDecrease(address)}>←</button>
                          <input
                              type="number"
                              value={inputs[address] || "0"}
                              onChange={(e) => handleInputChange(address, e.target.value)}
                              className="flex justify-center"
                          />
                          <button type="button" onClick={() => handleIncrease(address)}>→</button>
                      </div>
                  </div>
              ))}
              <div className="flex justify-center mt-5">
              <Button type="submit">Submit</Button>
              </div>
              
            </div>
        </form>
        <form>
          <div className="space-y-4 space-x-4">
            <h4>Add Contributor</h4>
            <TextField
                label="Address"
                fullWidth
                margin="normal"
                {...allocateForm.register("address", {
                  required: "Address is required",
                })}
              />
              <div className="flex justify-center mt-5">
              <Button type="button" onClick={handleAddAddress}>
                Add
              </Button>
              </div>
              
          </div>
        </form>
        <div className="mt-8">
            <h4>Allocation History</h4>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto mt-4">
                    <thead>
                        <tr className="bg-gray-600">
                            <th className="px-4 py-2 text-left">ETH Address</th>
                            <th className="px-4 py-2 text-right">Amount Allocated</th>
                            <th className="px-4 py-2 text-right">Amount Redeemed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allocationHistory.map((item, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2">{item.address}</td>
                                <td className="px-4 py-2 text-right">{item.allocated} ETH</td>
                                <td className="px-4 py-2 text-right">{item.redeemed} ETH</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot className="bg-gray-600">
                        <tr>
                            <td className="px-4 py-2 font-bold">Totals</td>
                            <td className="px-4 py-2 text-right font-bold">{totals.allocated.toFixed(1)} ETH</td>
                            <td className="px-4 py-2 text-right font-bold">{totals.redeemed.toFixed(1)} ETH</td>
                        </tr>
                        <tr className="bg-gray-600">
                            <td colSpan="3" className="px-4 py-2 text-right font-bold">
                                Remaining in Pool: {(totals.allocated - totals.redeemed).toFixed(1)} ETH
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

        </div>
    );
}

export default AllocateForm;
