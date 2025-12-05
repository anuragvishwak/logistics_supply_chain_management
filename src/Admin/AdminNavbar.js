import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function AdminNavbar() {
  const location = useLocation();
  const navigation = useNavigate();

  return (
    <div className="bg-[#2e294e] flex items-center justify-between font-semibold p-3">
      <div className="text-white flex items-center space-x-3">
        <button>Dashboard</button>
        <button
          onClick={() => {
            navigation("/Fleet");
          }}
          className={`${
            location.pathname === "/Fleet" ? "text-[#8661c1]" : ""
          }`}
        >
          Fleets
        </button>
        <button
          onClick={() => {
            navigation("/AdminDriver");
          }}
          className={`${
            location.pathname === "/AdminDriver" ? "text-[#8661c1]" : ""
          }`}
        >
          Drivers
        </button>
        <button
          onClick={() => {
            navigation("/AdminShipmentLoadManagement");
          }}
          className={`${
            location.pathname === "/AdminShipmentLoadManagement"
              ? "text-[#8661c1]"
              : ""
          }`}
        >
          Shipment & Load Management
        </button>
        <button
          onClick={() => {
            navigation("/AdminVendors");
          }}
          className={`${
            location.pathname === "/AdminVendors" ? "text-[#8661c1]" : ""
          }`}
        >
          Vendors
        </button>
        <button
          onClick={() => {
            navigation("/AdminFinanceBilling");
          }}
          className={`${
            location.pathname === "/AdminFinanceBilling" ? "text-[#8661c1]" : ""
          }`}
        >
          Finance & Billing
        </button>
        <button
          onClick={() => {
            navigation("/AdminRouteManagement");
          }}
          className={`${
            location.pathname === "/AdminRouteManagement"
              ? "text-[#8661c1]"
              : ""
          }`}
        >
          Route Management
        </button>
        <button
          onClick={() => {
            navigation("/AdminClients");
          }}
          className={`${
            location.pathname === "/AdminClients" ? "text-[#8661c1]" : ""
          }`}
        >
          Clients
        </button>
        <button
          onClick={() => {
            navigation("/AdminWarehouseInventory");
          }}
          className={`${
            location.pathname === "/AdminWarehouseInventory"
              ? "text-[#8661c1]"
              : ""
          }`}
        >
          Warehouse Inventory
        </button>
        <button
          onClick={() => {
            navigation("/AdminSupportTickets");
          }}
          className={`${
            location.pathname === "/AdminSupportTickets" ? "text-[#8661c1]" : ""
          }`}
        >
          Support & Tickets
        </button>
      </div>
      <button className="text-white font-semibold">User1</button>
    </div>
  );
}

export default AdminNavbar;
