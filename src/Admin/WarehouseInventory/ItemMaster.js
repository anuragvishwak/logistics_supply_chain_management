import React, { useEffect, useState } from "react";
import AddItemForm from "./AddItemForm";
import { supabase } from "../../SupabaseConfiguration";

function ItemMaster() {
  const [openingAddItemForm, setopeningAddItemForm] = useState(false);
  const [gettingItems, setgettingItems] = useState([]);

  async function renderingItems() {
    try {
      const { data: fleetData, error: fleetError } = await supabase
        .from("item_database")
        .select("*");

      if (fleetError) {
        console.error(fleetError);
        alert("Error fetching Item data");
        return;
      }

      setgettingItems(fleetData);
    } catch (error) {
      console.error(error);
      alert("Unexpected error fetching Item data");
    }
  }

  useEffect(() => {
    renderingItems();
  }, []);

  return (
    <div>
      <div className=" border border-gray-300 shadow bg-white m-5 p-5 rounded-lg justify-between">
        <div>
          <p className="text-[#4B248F] text-xl font-bold">Item Master</p>
          <p className="text-[#ed7225]">
            Manage all your Items and Products in single CMS system.
          </p>
        </div>
        <hr className="my-3 border-gray-300" />
        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-3">
            <input
              className="border p-1 rounded border-gray-300 w-96"
              placeholder="Search Item and Product...."
            />
            <button
              onClick={() => {
                setopeningAddItemForm(true);
              }}
              className="bg-[#ed7225] text-white font-semibold py-1 px-4 rounded"
            >
              Add Item / Product
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 m-5">
        {gettingItems.map((item) => (
          <div className="rounded-lg border border-gray-300 shadow">
            <div className="bg-[#4B248F] rounded-t-lg p-5">
              <div className="flex items-start justify-between">
                <p className="text-white text-xl font-bold">{item.itemName}</p>
                <p className="text-white text-sm bg-[#ed7225] font-semibold py-0.5 px-4 rounded-full">
                  {item.itemCode}
                </p>
              </div>
              <p className="text-[#ed7225] font-semibold">{item.itemType}</p>
            </div>

            <div className="rounded-b-lg border-t-8 border-[#ed7225] bg-white p-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-sm">Weight Per unit</p>
                  <p className="text-[#4B248F] font-semibold">
                    {item.weightPerUnit} Units
                  </p>
                </div>

                <div>
                  <p className="text-sm">Volume Per unit</p>
                  <p className="text-[#4B248F] font-semibold">
                    {item.volumePerUnit} m³
                  </p>
                </div>
              </div>
              <div className="grid my-3 grid-cols-2 gap-5">
                <div>
                  <p className="text-sm">Handling Type</p>
                  <p className="text-[#4B248F] font-semibold">
                    {item.handlingType}
                  </p>
                </div>

                <div>
                  <p className="text-sm">Packing Type</p>
                  <p className="text-[#4B248F] font-semibold">
                    {item.packingType} Packing
                  </p>
                </div>
              </div>

              <div className="border mb-3 p-3 rounded border-gray-300">
                <p className="text-[#2e294e]">Storage Requirement</p>
                <p className="text-[#4B248F] font-semibold">
                  {item.storageRequirement}
                </p>
              </div>
              <div className="border p-3 rounded border-gray-300">
                <p className="text-[#2e294e]">Clients</p>
                <p className="text-[#4B248F] font-semibold">
                  {item.selectedClient}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openingAddItemForm && (
        <AddItemForm setopeningAddItemForm={setopeningAddItemForm} />
      )}
    </div>
  );
}

export default ItemMaster;
