import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AddDriverForm from "./AddDriverForm";
import { supabase } from "../SupabaseConfiguration";
import { FaEye } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";

function AdminDriver() {
  const [openingAddDriverForm, setopeningAddDriverForm] = useState(false);
  const [gettingDrivers, setgettingDrivers] = useState([]);
  const [openingAdditionalDetails, setopeningAdditionalDetails] =
    useState(false);
  const [capturingRemainingDetails, setcapturingRemainingDetails] = useState(
    {}
  );

  async function renderingDrivers() {
    try {
      const { data: fleetData, error: fleetError } = await supabase
        .from("driver_database")
        .select("*");

      if (fleetError) {
        console.error(fleetError);
        alert("Error fetching drvier data");
        return;
      }

      setgettingDrivers(fleetData);
    } catch (error) {
      console.error(error);
      alert("Unexpected error fetching fleet data");
    }
  }

  console.log("getting Drviers", gettingDrivers);

  useEffect(() => {
    renderingDrivers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <AdminNavbar />
      <div className="flex items-start border border-gray-300 shadow bg-white m-5 p-5 rounded-lg justify-between">
        <div>
          <p className="text-[#2e294e] text-xl font-bold">Drivers</p>
          <p className="text-[#8661c1]">
            Manage all your Drivers in single CMS system.
          </p>
        </div>

        <div>
          <input />
          <button
            onClick={() => {
              setopeningAddDriverForm(true);
            }}
            className="bg-[#8661c1] text-white font-semibold py-1 px-4 rounded"
          >
            Add Driver
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 m-5">
        {gettingDrivers.map((driver) => (
          <div className="border rounded-t-xl border-gray-300">
            <div className="bg-[#8661c1] rounded-t-lg clear-start p-5">
              <div className="flex items-start justify-between">
                <p className="text-white text-xl font-bold">
                  {driver.fullName}
                </p>
                <p className="text-[#2e294e] font-semibold text-sm bg-white py-0.5 px-4 rounded-full">
                  {driver.licenseType}
                </p>
              </div>
              <div className="flex items-center font-semibold text-sm text-[#2e294e] space-x-1">
                <p>{driver.email}</p>
                <span>|</span>
                <p>{driver.phoneNumber}</p>
              </div>
            </div>

            <div className="p-5 bg-white">
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="border w-auto  border-gray-300 p-3 rounded">
                  <p className="text-[#2e294e]">Salary</p>
                 <div className="flex items-center">
                    <FaIndianRupeeSign size={13} className="text-[#8661c1]"/>
                     <p className="text-[#8661c1] font-semibold">
                    {driver.salary}/-
                  </p>
                 </div>
                </div>
                <div className="border w-full border-gray-300 p-3 rounded">
                  <p className="text-[#2e294e]">Work Location</p>
                  <p className="text-[#8661c1] font-semibold">
                    {driver.workLocation}
                  </p>
                </div>
              </div>

              <p className="text-xl text-[#2e294e] font-bold">
                Personal Information
              </p>

              <div className="grid mt-1 grid-cols-2 gap-3">
                  <div className="border w-full border-gray-300 p-3 rounded">
                    <p className="text-[#2e294e]">Emergency Contact</p>
                    <p className="text-[#8661c1] font-semibold">
                      +91 {driver.emergencyContactNumber}
                    </p>
                  </div>
                  <div className="border w-full border-gray-300 p-3 rounded">
                    <p className="text-[#2e294e]">Date of Joining</p>
                    <p className="text-[#8661c1] font-semibold">
                      {driver.joiningDate}
                    </p>
                  </div>
               
              </div>
              <div className="flex justify-end mt-5">
                <button
                  onClick={() => {
                    setopeningAdditionalDetails(true);
                    setcapturingRemainingDetails(driver);
                  }}
                  className="bg-[#2e294e] py-0.5 px-3 text-white rounded"
                >
                  <div className="flex items-center space-x-1">
                    <FaEye />
                    <p>View</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openingAddDriverForm && (
        <AddDriverForm setopeningAddDriverForm={setopeningAddDriverForm} />
      )}

      {openingAdditionalDetails && (
        <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
          <div className="bg-white rounded-xl p-5 w-7/12">
            <div className="flex mb-2 items-start justify-between">
              <p className="text-xl text-[#4a2c40] font-bold">
                Driver Additional Details
              </p>
              <button
                onClick={() => {
                  setopeningAdditionalDetails(false);
                }}
                className="text-[#8661c1] font-semibold"
              >
                Close
              </button>
            </div>

            <div>
                 <div className="border border-gray-300 w-full my-3 p-3 rounded">
                  <p className="text-[#2e294e]">Additional Note</p>
                  <p className="text-[#8661c1] font-semibold">
                    {capturingRemainingDetails.address}
                  </p>
                </div>
              <div>
                <p className="text-[#8661c1] font-semibold text-lg">
                  Government Details
                </p>
                <div className="p-3 border border-gray-300 rounded">
                  <div className="flex items-center  justify-between">
                    <p className="text-[#2e294e]">Aadhaar Number</p>
                    <p className="text-[#8661c1] font-semibold">
                      {capturingRemainingDetails.aadhaarNumber}
                    </p>
                  </div>

                  <div className="flex items-center border-t pt-1 justify-between">
                    <p className="text-[#2e294e]">PAN Number</p>
                    <p className="text-[#8661c1] font-semibold">
                      {capturingRemainingDetails.panNumber}
                    </p>
                  </div>

                  <div className="flex items-center border-y py-1 my-1 justify-between">
                    <p className="text-[#2e294e]">License Number</p>
                    <p className="text-[#8661c1] font-semibold">
                      {capturingRemainingDetails.licenseNumber}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[#2e294e]">License Expiry Date</p>
                    <p className="text-[#8661c1] font-semibold">
                      {capturingRemainingDetails.licenseExpiryDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDriver;
