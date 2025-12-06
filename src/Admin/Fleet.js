import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AddFleetForm from "./AddFleetForm";
import { supabase } from "../SupabaseConfiguration";
import { FaEye, FaUser } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function Fleet() {
  const [gettingFleets, setgettingFleets] = useState([]);
  const [openingAddFleetForm, setopeningAddFleetForm] = useState(false);
  const [openingAdditionalDetails, setopeningAdditionalDetails] =
    useState(false);
  const [capturingAdditionalData, setcapturingAdditionalData] = useState({});
  const [gettingDrivers, setgettingDrivers] = useState([]);
  const [selectedDriver, setselectedDriver] = useState("");
  const [openingAssignDriverForm, setopeningAssignDriverForm] = useState(false);

  async function renderingFleets() {
    try {
      const { data: fleetData, error: fleetError } = await supabase
        .from("fleet_database")
        .select("*");

      if (fleetError) {
        console.error(fleetError);
        alert("Error fetching fleet data");
        return;
      }

      setgettingFleets(fleetData);
    } catch (error) {
      console.error(error);
      alert("Unexpected error fetching fleet data");
    }
  }

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

  async function assignDriverToFleet(fleetId) {
    try {
      const { data, error } = await supabase
        .from("fleet_database")
        .update({
          assignedDriverName: selectedDriver,
        })
        .eq("id", fleetId);

      if (error) {
        console.error(error);
        alert("Error assigning driver");
        return;
      }

      alert("Driver Assigned Successfully!");
      renderingFleets();
    } catch (err) {
      console.error(err);
      alert("Unexpected error occurred");
    }
  }

  useEffect(() => {
    renderingFleets();
    renderingDrivers();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <AdminNavbar />
      <div>
        <div className="flex items-start border border-gray-300 shadow bg-white m-5 p-5 rounded-lg justify-between">
          <div>
            <p className="text-[#2e294e] text-xl font-bold">Fleet Management</p>
            <p className="text-[#8661c1]">
              Manage all your fleet in single CMS system.
            </p>
          </div>

          <div>
            <input />
            <button
              onClick={() => {
                setopeningAddFleetForm(true);
              }}
              className="bg-[#8661c1] text-white font-semibold py-1 px-4 rounded"
            >
              Add Vehicle / Fleet
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 m-5 gap-5">
          {gettingFleets.map((fleet) => (
            <div className="bg-white shadow border rounded-lg border-gray-300">
              <div className="bg-[#8661c1] rounded-t-lg clear-start p-5">
                <div className="flex items-start justify-between">
                  <p className="text-white text-xl font-bold">
                    {fleet.vehicleName}
                  </p>
                  <div className="flex items-center space-x-1">
                    <p className="text-[#2e294e] font-semibold text-sm bg-white py-0.5 px-4 rounded-full">
                      {fleet.vehicleType}
                    </p>
                    <select className="border border-gray-300 rounded px-1 w-32">
                      <option>Select Status</option>
                      <option>Active</option>
                      <option>Inactive</option>
                      <option>Under Maintenance</option>
                      <option>Retired</option>
                    </select>
                  </div>
                </div>
                <div className="flex items-center font-semibold text-sm text-[#2e294e] space-x-1">
                  <p>{fleet.brand}</p>
                  <span>|</span>
                  <p>{fleet.model}</p>
                </div>
              </div>

              <div className="p-5">
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-[#2e294e]">Fuel Type</p>
                    <p className="text-[#8661c1] font-semibold">
                      {fleet.fuelType}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-[#2e294e]">Mileage</p>
                    <p className="text-[#8661c1] font-semibold">
                      {fleet.mileage} km/l
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[#2e294e]">OwnerShip</p>
                    <p className="text-[#8661c1] font-semibold">
                      {fleet.ownershipType}
                    </p>
                  </div>
                </div>

                <div className="border my-3 border-gray-300 p-3 rounded">
                  <p className="text-[#2e294e]">Additional Note</p>
                  <p className="text-[#8661c1] font-semibold">
                    {fleet.additionalNote}
                  </p>
                </div>

                <div className="flex items-center space-x-3 justify-end">
                  <button
                    onClick={() => {
                      setopeningAssignDriverForm(true);
                    }}
                    className="border border-[#2e294e] hover:bg-[#2e294e] hover:text-white py-0.5 px-3 rounded text-[#2e294e]"
                  >
                    <div className="flex items-center space-x-1">
                      <FaUser /> <p className="font-semibold">Assign Driver</p>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setopeningAdditionalDetails(true);
                      setcapturingAdditionalData(fleet);
                    }}
                    className="bg-[#2e294e] py-0.5 px-3 text-white rounded"
                  >
                    <div className="flex items-center space-x-1">
                      <FaEye />
                      <p>View</p>
                    </div>
                  </button>
                  <button className="bg-[#8661c1] text-white py-0.5 px-3 rounded">
                    <div className="flex items-center space-x-1">
                      <IoMdAdd />
                      <p>Add Maintenance</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openingAddFleetForm && (
        <AddFleetForm setopeningAddFleetForm={setopeningAddFleetForm} />
      )}

      {openingAdditionalDetails && (
        <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
          <div className="bg-white p-5 w-7/12 rounded-xl">
            <div className="flex mb-4 items-start justify-between">
              <p className="text-xl text-[#4a2c40] font-bold">
                Fleet Additional Details
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

            <div className="">
              <p className="text-[#8661c1] font-semibold text-lg">
                Vehicle Specifications
              </p>

              <table className="table-auto w-full">
                <thead className="bg-gray-100">
                  <th className="py-1 font-medium">Year of Manufacture</th>
                  <th className="font-medium">Body Type</th>
                  <th className="font-medium">Color</th>
                  <th className="font-medium">Load Capacity</th>
                  <th className="font-medium">Volume Capacity</th>
                  <th className="font-medium">Number of Axles</th>
                </thead>
                <tbody>
                  <tr className="border-y border-gray-300">
                    <td className="text-center py-1">
                      {capturingAdditionalData.yearOfManufacture}
                    </td>
                    <td className="text-center">
                      {capturingAdditionalData.bodyType}
                    </td>
                    <td className="text-center">
                      {capturingAdditionalData.vehicleColor}
                    </td>
                    <td className="text-center">
                      {capturingAdditionalData.loadCapacity} kg
                    </td>
                    <td className="text-center">
                      {capturingAdditionalData.volumeCapacity} kg
                    </td>
                    <td className="text-center">
                      {capturingAdditionalData.noOfAxles} Axles
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="my-4">
                <p className="text-[#8661c1] font-semibold text-lg">
                  Performance
                </p>

                <div className="p-3 border border-gray-300 rounded">
                  <div className="flex items-center justify-between">
                    <p className="text-[#2e294e]">Fuel Type</p>
                    <p className="text-[#8661c1] font-semibold">
                      {capturingAdditionalData.fuelType}
                    </p>
                  </div>

                  <div className="flex items-center border-y border-gray-300 my-1.5 py-1.5 justify-between">
                    <p className="text-[#2e294e]">Ownership</p>
                    <p className="text-[#8661c1] font-semibold">
                      {capturingAdditionalData.ownershipType === "Company-owned"
                        ? "Company Owned"
                        : ""}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[#2e294e]">Mileage</p>
                    <p className="text-[#8661c1] font-semibold">
                      {capturingAdditionalData.mileage} km/L
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[#8661c1] font-semibold text-lg">
                  Certifications
                </p>
                <div className="p-3 border border-gray-300 rounded">
                  <div className="flex items-center justify-between">
                    <p className="text-[#2e294e]">Insurance Validity</p>
                    <p className="text-[#8661c1] font-semibold">
                      {capturingAdditionalData.insuranceValidityDate}
                    </p>
                  </div>

                  <div className="flex items-center mt-1.5 border-t border-gray-300 py-1.5 justify-between">
                    <p className="text-[#2e294e]">Pollution Certificate</p>
                    <p className="text-[#8661c1] font-semibold">
                      {capturingAdditionalData.pollutionCertificateExpiry}
                    </p>
                  </div>
                  <div className="flex items-center border-y border-gray-300 my-1.5 py-1.5 justify-between">
                    <p className="text-[#2e294e]">National Permit</p>
                    <p className="text-[#8661c1] font-semibold">
                      {capturingAdditionalData.nationalPermitValidity}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[#2e294e]">Road Tax</p>
                    <p className="text-[#8661c1] font-semibold">
                      {capturingAdditionalData.roadTaxValidity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {openingAssignDriverForm && (
        <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
          <div className="bg-white p-5">
            <div className="flex justify-end">
              <button
              onClick={() => {
                setopeningAssignDriverForm(false);
              }} 
              className="text-[#8661c1] font-semibold"
            >
              Close
            </button>
            </div>
            <div>
              <p className="mb-1 font-semibold text-[#4a2c40]">Assign Driver</p>
              <select
                onChange={(event) => {
                  setselectedDriver(event.target.value);
                }}
                className="p-1.5 rounded border w-96 border-gray-300"
              >
                <option>Assign Driver</option>
                {gettingDrivers.map((vehicle) => (
                  <option value={vehicle.fullName}>{vehicle.fullName}</option>
                ))}
              </select>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Fleet;
