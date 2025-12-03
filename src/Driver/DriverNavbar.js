import React from 'react'

function DriverNavbar() {
  return (
    <div className="bg-[#0c0a3e] flex items-center justify-between font-semibold p-3">
      <div className="text-white flex items-center space-x-3">
        <button>Dashboard</button>
        <button>My Trips</button>
        <button>Pickup & Delivery</button>
        <button>Fuel Entry</button>
        <button>Expenses</button>
        <button>Incident Report</button>
      </div>
      <button className="text-white font-semibold">User1</button>
    </div>
  )
}

export default DriverNavbar