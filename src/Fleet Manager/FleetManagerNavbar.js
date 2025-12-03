import React from "react";

function FleetManagerNavbar() {
  return (
    <div className="bg-[#0c0a3e] flex items-center justify-between font-semibold p-3">
      <div className="text-white flex items-center space-x-3">
        <button>Dashboard</button>
        <button>Vehicles</button>
        <button>Drivers</button>
        <button>Trips</button>
        <button>Vendors</button>
        <button>Fuel Logs</button>
        <button>Maintenance</button>
        <button>Breakdown Reports</button>
        <button>Tyres & Parts</button>
        <button>Reports</button>
      </div>
      <button className="text-white font-semibold">User1</button>
    </div>
  );
}

export default FleetManagerNavbar;
