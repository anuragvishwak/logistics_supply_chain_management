import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AddVendorForm from "./AddVendorForm";
import { supabase } from "../SupabaseConfiguration";

function AdminVendors() {
  const [openingAddVendorForm, setopeningAddVendorForm] = useState(false);
  const [gettingVendors, setgettingVendors] = useState([]);

  async function renderingVendors() {
    try {
      const { data: fleetData, error: fleetError } = await supabase
        .from("vendor_database")
        .select("*");

      if (fleetError) {
        console.error(fleetError);
        alert("Error fetching vendor data");
        return;
      }

      setgettingVendors(fleetData);
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

      <div className="m-5 grid grid-cols-3 gap-5">
        {gettingVendors.map((vendor) => (
          <div className="border shadow rounded-lg border-gray-300">
            <div className="bg-[#4B248F] rounded-t-lg p-5">
              <div className="flex items-start justify-between">
                <p className="text-white text-xl font-bold">
                  {vendor.companyName}
                </p>
                <p className="bg-white text-[#4B248F] py-0.5 px-3 rounded-full text-sm font-semibold">
                  {vendor.panNumber}
                </p>
              </div>
              <p className="text-[#ed7225] font-semibold">
                {vendor.vendorType}
              </p>
            </div>

            <div className="bg-white rounded-b-lg p-5">
              <div>
                <p className="text-[#ed7225] font-semibold text-xl mb-1">
                  Contact Information
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-[#2e294e]">Contact Person</p>
                    <p className="text-[#4B248F] font-semibold">
                      {vendor.contactPerson}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#2e294e]">Phone Number</p>
                    <p className="text-[#4B248F] font-semibold">
                      +91 {vendor.phoneNumber}
                    </p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-[#2e294e]">Email</p>
                  <p className="text-[#4B248F] font-semibold">{vendor.email}</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[#ed7225] font-semibold text-xl mb-1">
                  Bank Details
                </p>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-[#2e294e]">Account Holder Name</p>
                    <p className="text-[#4B248F] font-semibold">
                      {vendor.accountHolderName}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#2e294e]">Account Number</p>
                    <p className="text-[#4B248F] font-semibold">
                      {vendor.accountNumber}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#2e294e]">Bank Name</p>
                    <p className="text-[#4B248F] font-semibold">
                      {vendor.bankName}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#2e294e]">IFSC Code</p>
                    <p className="text-[#4B248F] font-semibold">
                      {vendor.ifscCode}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openingAddVendorForm && (
        <AddVendorForm setopeningAddVendorForm={setopeningAddVendorForm} />
      )}
    </div>
  );
}

export default AdminVendors;
