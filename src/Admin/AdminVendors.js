import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AddVendorForm from "./AddVendorForm";

function AdminVendors() {
  const [openingAddVendorForm, setopeningAddVendorForm] = useState(false);

  async function renderingVendors() {
    try {
      const { data: fleetData, error: fleetError } = await supabase
        .from("shipment_database")
        .select("*");

      if (fleetError) {
        console.error(fleetError);
        alert("Error fetching vendor data");
        return;
      }

      setgettingShipments(fleetData);
    } catch (error) {
      console.error(error);
      alert("Unexpected error fetching fleet data");
    }
  }

  useEffect(() => {
    renderingVendors();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <AdminNavbar />
      <div className=" border border-gray-300 shadow bg-white m-5 p-5 rounded-lg justify-between">
        <div>
          <p className="text-[#4B248F] text-xl font-bold">Vendors</p>
          <p className="text-[#ed7225]">
            Manage all your Vendors in single CMS system.
          </p>
        </div>
        <hr className="my-3 border-gray-300" />
        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-3">
            <input
              className="border p-1 rounded border-gray-300 w-96"
              placeholder="Search Vendors...."
            />
            <button
              onClick={() => {
                setopeningAddVendorForm(true);
              }}
              className="bg-[#ed7225] text-white font-semibold py-1 px-4 rounded"
            >
              Add Vendor
            </button>
          </div>
        </div>
      </div>

      {openingAddVendorForm && (
        <AddVendorForm setopeningAddVendorForm={setopeningAddVendorForm} />
      )}
    </div>
  );
}

export default AdminVendors;
