import React, { useState } from "react";
import { supabase } from "../../SupabaseConfiguration";

function AddWarehouseForm({ setopeningAddWarehouseForm }) {
  const [warehouseName, setwarehouseName] = useState("");
  const [warehouseCode, setwarehouseCode] = useState("");
  const [warehouseType, setwarehouseType] = useState("");
  const [totalStorageCapacity, settotalStorageCapacity] = useState("");
  const [noOfRacks, setnoOfRacks] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [pincode, setpincode] = useState("");
  const [address, setaddress] = useState("");

  async function addWarehouse() {
    const warehosueData = {
      warehouseName: warehouseName,
      warehouseCode: warehouseCode,
      warehouseType: warehouseType,
      totalStorageCapacity: totalStorageCapacity,
      noOfRacks: noOfRacks,
      country: country,
      state: state,
      city: city,
      pincode: pincode,
      address: address,
    };

    const { data, error } = await supabase
      .from("warehouse_database")
      .insert([warehosueData]);

    if (error) {
      console.log(error);
      alert("Something went wrong!");
    } else {
      alert("Warehouse added successfully!");
      console.log("Inserted:", data);
      setopeningAddWarehouseForm(false);
    }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-5">
        <div className="flex items-start mb-4 justify-between">
          <p className="text-xl font-bold text-[#4a2c40]">Add Warehouse</p>
          <button
            onClick={() => {
              setopeningAddWarehouseForm(false);
            }}
            className="text-[#8661c1] font-semibold"
          >
            Close
          </button>
        </div>

        <div>
          <div>
            <p className="text-[#8661c1] font-semibold text-lg">
              Basic Details
            </p>
            <div className="grid grid-cols-3 gap-5">
              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Warehouse Name
                </p>
                <input
                  onChange={(event) => {
                    setwarehouseName(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Warehouse Code
                </p>
                <input
                  onChange={(event) => {
                    setwarehouseCode(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#4a2c40] mb-1 font-semibold">
                  Warehouse Type
                </p>
                <select
                  onChange={(event) => {
                    setwarehouseType(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                >
                  <option>select Warehouse Type</option>
                  <option>Fulfillment Center</option>
                  <option>Distribution Center</option>
                  <option>Cold Storage</option>
                  <option>Transit Hub</option>
                  <option>Raw Material Store</option>
                  <option>Finished Goods Store</option>
                </select>
              </div>
            </div>
          </div>

          <div className="my-3">
            <p className="text-[#8661c1] font-semibold text-lg">
              Location Details
            </p>

            <div>
              <div className="grid grid-cols-4 gap-4">
                <div className="">
                  <p className="mb-1 font-semibold text-[#4a2c40]">Country</p>
                  <input
                    onChange={(event) => {
                      setcountry(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>{" "}
                <div className="">
                  <p className="mb-1 font-semibold text-[#4a2c40]">State</p>
                  <input
                    onChange={(event) => {
                      setstate(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>{" "}
                <div className="">
                  <p className="mb-1 font-semibold text-[#4a2c40]">City</p>
                  <input
                    onChange={(event) => {
                      setcity(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>{" "}
                <div className="">
                  <p className="mb-1 font-semibold text-[#4a2c40]">Pincode</p>
                  <input
                    onChange={(event) => {
                      setpincode(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">Address</p>
                <textarea
                  onChange={(event) => {
                    setaddress(event.target.value);
                  }}
                  className="border h-28 border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-[#8661c1] font-semibold text-lg">
                Capacity / Space Details
              </p>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Total Storage Capacity
                  </p>
                  <input
                    onChange={(event) => {
                      settotalStorageCapacity(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div className="">
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    No of Racks
                  </p>
                  <input
                    onChange={(event) => {
                      setnoOfRacks(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={() => {
              addWarehouse();
            }}
            className="bg-[#8661c1] text-white py-1 px-4 rounded"
          >
            Add Warehouse
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddWarehouseForm;
