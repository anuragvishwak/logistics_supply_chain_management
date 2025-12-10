import React, { useEffect, useState } from "react";
import { supabase } from "../../SupabaseConfiguration";

function AddItemForm({ setopeningAddItemForm }) {
  const [gettingClients, setgettingClients] = useState([]);
  const [itemName, setitemName] = useState("");
  const [itemCode, setitemCode] = useState("");
  const [itemType, setitemType] = useState("");
  const [handlingType, sethandlingType] = useState("");
  const [storageRequirement, setstorageRequirement] = useState("");
  const [weightPerUnit, setweigtPerUnit] = useState("");
  const [volumePerUnit, setvolumePerUnit] = useState("");
  const [packingType, setpackingType] = useState("");
  const [selectedClient, setselectedClient] = useState("");

  async function renderingClients() {
    try {
      const { data: fleetData, error: fleetError } = await supabase
        .from("client_database")
        .select("*");

      if (fleetError) {
        console.error(fleetError);
        alert("Error fetching fleet data");
        return;
      }

      setgettingClients(fleetData);
    } catch (error) {
      console.error(error);
      alert("Unexpected error fetching fleet data");
    }
  }

  async function AddItem() {
    const itemData = {
      itemName: itemName,
      itemCode: itemCode,
      itemType: itemType,
      handlingType: handlingType,
      storageRequirement: storageRequirement,
      weightPerUnit: weightPerUnit,
      volumePerUnit: volumePerUnit,
      packingType: packingType,
      selectedClient: selectedClient
    };

    const { data, error } = await supabase
      .from("item_database")
      .insert([itemData]);

    if (error) {
      console.log(error);
      alert("Something went wrong!");
    } else {
      alert("Item added successfully!");
      console.log("Inserted:", data);
      setopeningAddItemForm(false);
    }
  }

  useEffect(() => {
    renderingClients();
  }, []);

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-5">
        <div className="flex items-start mb-4 justify-between">
          <p className="text-xl font-bold text-[#4a2c40]">Add Item / Product</p>
          <button
            onClick={() => {
              setopeningAddItemForm(false);
            }}
            className="text-[#8661c1] font-semibold"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="">
            <p className="mb-1 font-semibold text-[#4a2c40]">
              Item / Product Name
            </p>
            <input
              onChange={(event) => {
                setitemName(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div className="">
            <p className="mb-1 font-semibold text-[#4a2c40]">
              Item / Product Code
            </p>
            <input
              onChange={(event) => {
                setitemCode(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div className="">
            <p className="mb-1 font-semibold text-[#4a2c40]">Item Type</p>
            <select
              onChange={(event) => {
                setitemType(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            >
              <option>select Item / Product Type</option>
              <option>General Goods</option>
              <option>Electronics</option>
              <option>FMCG</option>
              <option>Auto Parts</option>
              <option>Fragile Items</option>
              <option>Hazardous</option>
              <option>Temperature-Controlled</option>
            </select>
          </div>

          <div className="">
            <p className="mb-1 font-semibold text-[#4a2c40]">Handling Type</p>
            <select
              onChange={(event) => {
                sethandlingType(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            >
              <option>select Handling Type</option>
              <option>Fragile</option>
              <option>Hazardous</option>
              <option>Perishable</option>
              <option>Standard</option>
            </select>
          </div>

          <div className="">
            <p className="mb-1 font-semibold text-[#4a2c40]">
              Storage Requirement
            </p>
            <select
              onChange={(event) => {
                setstorageRequirement(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            >
              <option>select Requirement</option>
              <option>Normal</option>
              <option>Cold Storage</option>
              <option>Secure Storage</option>
              <option>High-Value Cage</option>
            </select>
          </div>

          <div className="">
            <p className="mb-1 font-semibold text-[#4a2c40]">
              Weight Per Unit (kg)
            </p>
            <input
              onChange={(event) => {
                setweigtPerUnit(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div className="">
            <p className="mb-1 font-semibold text-[#4a2c40]">Volume Per Unit</p>
            <input
              onChange={(event) => {
                setvolumePerUnit(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div className="">
            <p className="mb-1 font-semibold text-[#4a2c40]">Packing Type</p>
            <select
              onChange={(event) => {
                setpackingType(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            >
              <option>select Packing Type</option>
              <option>Box</option>
              <option>Pallet</option>
              <option>Crate</option>
              <option>Roll</option>
              <option>Loose</option>
            </select>
          </div>

          <div className="">
            <p className="mb-1 font-semibold text-[#4a2c40]">Client</p>
            <select
              onChange={(event) => {
                setselectedClient(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            >
              <option>select Client</option>
              {gettingClients.map((client) => (
                <option value={client.clientName}>{client.clientName}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={() => {
              AddItem();
            }}
            className="bg-[#8661c1] text-white py-1 px-4 rounded"
          >
            Add Item / Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddItemForm;
