import React from 'react'

function CustomerNavbar() {
  return (
    <div className="bg-[#0c0a3e] flex items-center justify-between font-semibold p-3">
      <div className="text-white flex items-center space-x-3">
        <button>Dashboard</button>
        <button>Shipments</button>
        <button>Invoices</button>
        <button>Support / Complaint</button>
      </div>
      <button className="text-white font-semibold">User1</button>
    </div>
  )
}

export default CustomerNavbar