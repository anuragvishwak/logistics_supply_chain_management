import React from "react";

function AdminNavbar() {
  return (
    <div className="bg-[#0c0a3e] flex items-center justify-between font-semibold p-3">
      <div className="text-white flex items-center space-x-3">
        <button>Dashboard</button>
        <button>Fleets</button>
        <button>Drivers</button>
        <button>Shipment & Load Management</button>
        <button>Vendors</button>
        <button>Finance & Billing</button>
        <button>Route Management</button>
        <button>Clients</button>
        <button>Warehouse Inventory</button>
        <button>Support & Tickets</button>
      </div>
      <button className="text-white font-semibold">User1</button>
    </div>
  );
}

export default AdminNavbar;
