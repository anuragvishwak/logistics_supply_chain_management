import React from 'react'

function TransportManagerNavbar() {
  return (
     <div className="bg-[#2e294e] flex items-center justify-between font-semibold p-3">
      <div className="text-white flex items-center space-x-3">
        <button>Dashboard</button>
        <button>Shipments</button>
        <button>Consignments</button>
        <button>Trips & Routing</button>
        <button>Multi-drop Planning</button>
        <button>Customer Requests</button>
        <button>Reports</button>
      </div>
      <button className="text-white font-semibold">User1</button>
    </div>
  )
}

export default TransportManagerNavbar