import React, { useState } from "react";
import AddPolicyForm from "./AddPolicyForm";

function InventoryPolicies() {
  const [openingAddPolicyForm, setopeningAddPolicyForm] = useState(false);

  return (
    <div>
      <div className=" border border-gray-300 shadow bg-white m-5 p-5 rounded-lg justify-between">
        <div>
          <p className="text-[#4B248F] text-xl font-bold">Inventory Policies</p>
          <p className="text-[#ed7225]">
            Manage all your Invnetory Policies in single CMS system.
          </p>
        </div>
        <hr className="my-3 border-gray-300" />
        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-3">
            <input
              className="border p-1 rounded border-gray-300 w-96"
              placeholder="Search Warehouses...."
            />
            <button
              onClick={() => {
                setopeningAddPolicyForm(true);
              }}
              className="bg-[#ed7225] text-white font-semibold py-1 px-4 rounded"
            >
              Add Policy
            </button>
          </div>
        </div>
      </div>

      {openingAddPolicyForm && (
        <AddPolicyForm setopeningAddPolicyForm={setopeningAddPolicyForm} />
      )}
    </div>
  );
}

export default InventoryPolicies;
