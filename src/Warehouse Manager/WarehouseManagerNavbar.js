import React from "react";

function WarehouseManagerNavbar() {
  return (
    <div className="bg-[#4a2c40] flex items-center justify-between font-semibold p-3">
      <div className="text-white flex items-center space-x-3">
        <button>Dashboard</button>
        <button>Inbound Shipments</button>
        <button>Outbound Shipments</button>
        <button>Inventory</button>
        <button>Bins & Locations</button>
        <button>Transfers</button>
        <button>Returns</button>
        <button>Damaged Goods</button>
        <button>Reports</button>
      </div>
      <button className="text-white font-semibold">User1</button>
    </div>
  );
}

export default WarehouseManagerNavbar;
