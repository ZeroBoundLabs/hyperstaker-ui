import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/Button";
import { TextField } from "./ui/TextField";

function AllocateForm() {
    const [addresses, setAddresses] = useState(["0x7B4fd15B495b5700aF2C193f52D830e51C049366", "0x264f9EF85C21DE49451c3636116668889Ca41aab", "example.eth"]); // Example list of addresses/ENS names
    const [inputs, setInputs] = useState({}); // State to hold input values
    const allocateForm = useForm();

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

        </div>
    );
}

export default AllocateForm;
