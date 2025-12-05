import React from "react";

function FinanceNavbar() {
  return (
    <div className="bg-[#2e294e] flex items-center justify-between font-semibold p-3">
      <div className="text-white flex items-center space-x-3">
        <button>Dashboard</button>
        <button>Invoices</button>
        <button>Customer Payments</button>
        <button>Driver Payments</button>
        <button>Trip Settlement</button>
        <button>Expenses</button>
        <button>Vendor Billing</button>
        <button>Reports</button>
      </div>
      <button className="text-white font-semibold">User1</button>
    </div>
  );
}

export default FinanceNavbar;
