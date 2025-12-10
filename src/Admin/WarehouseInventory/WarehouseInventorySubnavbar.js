import React from "react";

function WarehouseInventorySubnavbar({ currentSection, setcurrentSection }) {
  return (
    <div>
      <div className="flex flex-col w-52 bg-[#ed7225] h-[calc(100vh-48px)] p-4 text-white font-semibold">
        <button
          className={`text-start py-1 px-2 ${
            currentSection === "warehouse_setup"
              ? "bg-[#4B248F] text-white"
              : ""
          }`}
          onClick={() => {
            setcurrentSection("warehouse_setup");
          }}
        >
          Warehosue Setup
        </button>
        <button
          className={`text-start py-1 px-2 ${
            currentSection === "item_master" ? "bg-[#4B248F] text-white" : ""
          }`}
          onClick={() => {
            setcurrentSection("item_master");
          }}
        >
          Item Master
        </button>
        <button
          className={`text-start py-1 px-2 ${
            currentSection === "inventory_policies"
              ? "bg-[#4B248F] text-white"
              : ""
          }`}
          onClick={() => {
            setcurrentSection("inventory_policies");
          }}
        >
          Inventory Policies
        </button>
        <button
          className={`text-start py-1 px-2 ${
            currentSection === "approvals" ? "bg-[#4B248F] text-white" : ""
          }`}
          onClick={() => {
            setcurrentSection("approvals");
          }}
        >
          Approvals
        </button>
        <button
          className={`text-start py-1 px-2 ${
            currentSection === "high_level_reports"
              ? "bg-[#4B248F] text-white"
              : ""
          }`}
          onClick={() => {
            setcurrentSection("high_level_reports");
          }}
        >
          High Level Reports
        </button>
      </div>
    </div>
  );
}

export default WarehouseInventorySubnavbar;
