import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Shipment from "./Shipment";
import AddShipmentForm from "./AddShipmentForm";

function AdminShipmentLoadManagement() {
  const [openingAddShipmentForm, setopeningAddShipmentForm] = useState(false);

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <AdminNavbar />
      <div className=" border border-gray-300 shadow bg-white m-5 p-5 rounded-lg justify-between">
        <div>
          <p className="text-[#2e294e] text-xl font-bold">
            Shipment & Load Management
          </p>
          <p className="text-[#8661c1]">
            Manage all your Shipments and Load Management in single CMS system.
          </p>
        </div>
        <hr className="my-3 border-gray-300" />
        <div className="flex items-center justify-end">

            <div className="flex items-center space-x-3">
              <input
                className="border p-1 rounded border-gray-300 w-96"
                placeholder="Search Shipments...."
              />
              <button
                onClick={() => {
                  setopeningAddShipmentForm(true);
                }}
                className="bg-[#8661c1] text-white font-semibold py-1 px-4 rounded"
              >
                Add Shipment
              </button>
            </div>
        </div>
      </div>
      <div className="m-5">
        <Shipment />
      </div>

      {openingAddShipmentForm && <AddShipmentForm setopeningAddShipmentForm = {setopeningAddShipmentForm}/>}
    </div>
  );
}

export default AdminShipmentLoadManagement;
