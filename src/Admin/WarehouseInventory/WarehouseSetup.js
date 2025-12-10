import React, { useEffect, useState } from "react";
import AddWarehouseForm from "./AddWarehouseForm";
import { supabase } from "../../SupabaseConfiguration";

function WarehouseSetup() {
  const [openingAddWarehouseForm, setopeningAddWarehouseForm] = useState(false);
  const [gettingWarehouses, setgettingWarehouses] = useState([]);

  async function renderingWarehouses() {
    try {
      const { data: fleetData, error: fleetError } = await supabase
        .from("warehouse_database")
        .select("*");

      if (fleetError) {
        console.error(fleetError);
        alert("Error fetching warehouse data");
        return;
      }

      setgettingWarehouses(fleetData);
    } catch (error) {
      console.error(error);
      alert("Unexpected error fetching warehouse data");
    }
  }
  useEffect(() => {
    renderingWarehouses();
  }, []);

  return (
    <div>
      <div className=" border border-gray-300 shadow bg-white m-5 p-5 rounded-lg justify-between">
        <div>
          <p className="text-[#4B248F] text-xl font-bold">
            Warehouse Management
          </p>
          <p className="text-[#ed7225]">
            Manage all your Warehouses in single CMS system.
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
                setopeningAddWarehouseForm(true);
              }}
              className="bg-[#ed7225] text-white font-semibold py-1 px-4 rounded"
            >
              Add Warehouse
            </button>
          </div>
        </div>
      </div>
      <div className="m-5 grid grid-cols-3 gap-5">
        {gettingWarehouses.map((warehouse) => (
          <div className="border shadow rounded-lg border-gray-300">
            <div className="bg-[#4B248F] rounded-t-lg p-5">
              <div className="flex items-start justify-between">
                <p className="text-white text-xl font-bold">
                  {warehouse.warehouseName}
                </p>
                <p className="text-white text-sm bg-[#ed7225] font-semibold py-0.5 px-4 rounded-full">
                  {warehouse.warehouseCode}
                </p>
              </div>

              <p className="text-[#ed7225] font-semibold">
                {warehouse.warehouseType}
              </p>
            </div>

            <div className="bg-white border-t-8 border-[#ed7225] rounded-b-lg p-5">
              <div className="grid grid-cols-2 mb-3 gap-5">
                <div>
                  <p className="text-[#2e294e]">Total Storage Capacity</p>
                  <p className="text-[#4B248F] font-semibold">
                    {warehouse.totalStorageCapacity} Sq ft
                  </p>
                </div>
                <div>
                  <p className="text-[#2e294e]">No of Racks</p>
                  <p className="text-[#4B248F] font-semibold">
                    {warehouse.noOfRacks} Racks
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[#2e294e]">Address</p>
                <p className="text-[#4B248F] font-semibold">
                  {warehouse.address}, {warehouse.city}, {warehouse.state},{" "}
                  {warehouse.country} - {warehouse.pincode}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {openingAddWarehouseForm && (
        <AddWarehouseForm
          setopeningAddWarehouseForm={setopeningAddWarehouseForm}
        />
      )}
    </div>
  );
}

export default WarehouseSetup;
