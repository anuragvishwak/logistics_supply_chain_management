import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function FleetManagerNavbar() {
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <div className="bg-[#2e294e] flex items-center justify-between font-semibold p-3">
      <div className="text-white flex items-center space-x-3">
        <button
          onClick={() => {
            navigation("/FleetManagerDashboard");
          }}
          className={`${
            location.pathname === "/FleetManagerDashboard"
              ? "text-[#8661c1]"
              : ""
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => {
            navigation("/FleetManagerVehicles");
          }}
          className={`${
            location.pathname === "/FleetManagerVehicles"
              ? "text-[#8661c1]"
              : ""
          }`}
        >
          Vehicles
        </button>
        <button
          onClick={() => {
            navigation("/FleetManagerDrivers");
          }}
          className={`${
            location.pathname === "/FleetManagerDrivers" ? "text-[#8661c1]" : ""
          }`}
        >
          Drivers
        </button>
        <button
          onClick={() => {
            navigation("/FleetManagerTrips");
          }}
          className={`${
            location.pathname === "/FleetManagerTrips" ? "text-[#8661c1]" : ""
          }`}
        >
          Trips
        </button>
        <button
          onClick={() => {
            navigation("/FleetManagerVendors");
          }}
          className={`${
            location.pathname === "/FleetManagerVendors" ? "text-[#8661c1]" : ""
          }`}
        >
          Vendors
        </button>
        <button
          onClick={() => {
            navigation("/FleetManagerFuelLogs");
          }}
          className={`${
            location.pathname === "/FleetManagerFuelLogs"
              ? "text-[#8661c1]"
              : ""
          }`}
        >
          Fuel Logs
        </button>
        <button
          onClick={() => {
            navigation("/FleetManagerMaintenance");
          }}
          className={`${
            location.pathname === "/FleetManagerMaintenance"
              ? "text-[#8661c1]"
              : ""
          }`}
        >
          Maintenance
        </button>
        <button
          onClick={() => {
            navigation("/FleetManagerBreakdown");
          }}
          className={`${
            location.pathname === "/FleetManagerBreakdown"
              ? "text-[#8661c1]"
              : ""
          }`}
        >
          Breakdown Reports
        </button>
        <button
          onClick={() => {
            navigation("/FleetManagerTyreParts");
          }}
          className={`${
            location.pathname === "/FleetManagerTyreParts"
              ? "text-[#8661c1]"
              : ""
          }`}
        >
          Tyres & Parts
        </button>
        <button
          onClick={() => {
            navigation("/FleetManagerReports");
          }}
          className={`${
            location.pathname === "/FleetManagerReports" ? "text-[#8661c1]" : ""
          }`}
        >
          Reports
        </button>
      </div>
      <button className="text-white font-semibold">User1</button>
    </div>
  );
}

export default FleetManagerNavbar;
