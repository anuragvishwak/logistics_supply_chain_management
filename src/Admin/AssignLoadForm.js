import React, { useEffect, useState } from "react";
import { supabase } from "../SupabaseConfiguration";
import { CiWarning } from "react-icons/ci";

function AssignLoadForm({ capturingShipmentObject, setopeningAssignLoadForm }) {
  const [gettingFleets, setgettingFleets] = useState([]);
  const [assignedVehicle, setassignedVehicle] = useState("");
  const [gettingDrivers, setgettingDrivers] = useState([]);
  const [safetyChecklist, setSafetyChecklist] = useState({
    bagsProperlySealed: false,
    vehicleDoorLocked: false,
    weightWithinLegalLimit: false,
    noLeakageOrDamage: false,
    driverVerified: false,
    vehicleFitnessChecked: false,
  });
  const [loadNotes, setloadNotes] = useState("");
  const [assignedWeight, setassignedWeight] = useState("");
  const [noOfBags, setnoOfBags] = useState("");
  const [weightPerBag, setweightPerBag] = useState("");
  const [sealNumber, setsealNumber] = useState("");

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

  async function addLoad(){
    const loadData = {
        assignedVehicle: assignedVehicle,
        safetyChecklist: safetyChecklist,
        loadNotes: loadNotes,
        assignedWeight: assignedWeight,
        noOfBags: noOfBags,
        weightPerBag: weightPerBag,
        sealNumber: sealNumber,
        shipmentId: capturingShipmentObject.id
    }

    const { data, error } = await supabase
          .from("load_database")
          .insert([loadData]);
    
        if (error) {
          console.log(error);
          alert("Something went wrong!");
        } else {
          alert("load assigned successfully!");
          console.log("Inserted:", data);
          setopeningAssignLoadForm(false);
        }
  }

  useEffect(() => {
    renderingFleets();
    renderingDrivers();
  }, []);

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white h-screen my-5 overflow-auto w-7/12 p-5">
        <div className="flex items-start mb-4 justify-between">
          <p className="text-xl font-bold text-[#4a2c40]">Assign Load {2}</p>
          <button
            onClick={() => {
              setopeningAssignLoadForm(false);
            }}
            className="text-[#8661c1] font-semibold"
          >
            Close
          </button>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <p className="text-[#8661c1] mb-1 font-semibold  text-lg">
                Shipment Details
              </p>
              <div className="p-3 rounded border border-gray-300">
                <div className="flex items-end justify-between">
                  <p className="text-sm">Shipment Title</p>
                  <p>{capturingShipmentObject.shipmentTitle}</p>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-sm">Destination</p>
                  <p>
                    {capturingShipmentObject.deliveryCity},{" "}
                    {capturingShipmentObject.deliveryState}
                  </p>
                </div>
                <hr className="my-2 border-gray-300" />
                <div className="flex items-end justify-between">
                  <p className="text-sm">Material Type</p>
                  <p>{capturingShipmentObject.materialType}</p>
                </div>
                <div className="flex items-end justify-between">
                  <p className="text-sm">Total Weight</p>
                  <p>{capturingShipmentObject.totalWeight} kg</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <p className="mb-1 font-semibold text-lg text-[#4a2c40]">
                  Assign Vehicle
                </p>
                <select
                  onChange={(event) => {
                    setassignedVehicle(event.target.value);
                  }}
                  className="w-full p-1 border rounded border-gray-300"
                >
                  <option>Select Vehicle</option>
                  {gettingFleets.map((vehicle) => (
                    <option value={vehicle.vehicleName}>
                      {vehicle.vehicleName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="border rounded p-3 mt-2 border-gray-300">
                {assignedVehicle ? (
                  gettingFleets
                    .filter((driver) => driver.vehicleName === assignedVehicle)
                    .map((driver) => (
                      <div>
                        <div className="flex items-start justify-between">
                          <p className="font-bold">{driver.vehicleName}</p>
                          <p className="border border-gray-300 py-0.5 px-4 rounded-full font-semibold text-[#8661c1] text-sm">
                            {driver.vehicleType}
                          </p>
                        </div>
                        <div className="flex items-center space-x-1">
                          <p className="text-sm text-[#4a2c40]">Capacity</p>
                          <p className="font-semibold text-[#4a2c40]">
                            {driver.loadCapacity} kg
                          </p>
                        </div>

                        <hr className="border-gray-300 my-1.5" />
                        <div className="flex items-end justify-between">
                          <p className="text-sm text-[#4a2c40]">
                            Assigned Driver
                          </p>
                          <p className="font-bold">{driver.assignedDriver}</p>
                        </div>
                      </div>
                    ))
                ) : (
                  <div className="text-red-500 flex items-center space-x-1 justify-center">
                    <CiWarning size={20} />
                    <p className="font-semibold">Please assign Driver</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div>
              <p className="text-[#8661c1] font-semibold text-lg">
                Load Details
              </p>
              <div className="grid grid-cols-4 gap-3">
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Assigned Weight
                  </p>
                  <input
                    onChange={(event) => {
                      setassignedWeight(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    No of Bags
                  </p>
                  <input
                    onChange={(event) => {
                      setnoOfBags(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Weight Per Bags
                  </p>
                  <input
                    onChange={(event) => {
                      setweightPerBag(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Seal Number
                  </p>
                  <input
                    onChange={(event) => {
                      setsealNumber(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
              <div className="my-3">
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Safety Checklists
                </p>

                <div className="grid grid-cols-2 gap-1">
                  <div className="flex items-center space-x-1">
                    <input
                      onChange={(e) =>
                        setSafetyChecklist({
                          ...safetyChecklist,
                          bagsProperlySealed: e.target.checked,
                        })
                      }
                      type="checkbox"
                    />
                    <p>Bags properly sealed.</p>
                  </div>

                  <div className="flex items-center space-x-1">
                    <input
                      onChange={(e) =>
                        setSafetyChecklist({
                          ...safetyChecklist,
                          vehicleDoorLocked: e.target.checked,
                        })
                      }
                      type="checkbox"
                    />
                    <p>Vehicle door locked.</p>
                  </div>

                  <div className="flex items-center space-x-1">
                    <input
                      onChange={(e) =>
                        setSafetyChecklist({
                          ...safetyChecklist,
                          weightWithinLegalLimit: e.target.checked,
                        })
                      }
                      type="checkbox"
                    />
                    <p>Weight within legal limit.</p>
                  </div>

                  <div className="flex items-center space-x-1">
                    <input
                      onChange={(e) =>
                        setSafetyChecklist({
                          ...safetyChecklist,
                          noLeakageOrDamage: e.target.checked,
                        })
                      }
                      type="checkbox"
                    />
                    <p>No leakage or damage.</p>
                  </div>

                  <div className="flex items-center space-x-1">
                    <input
                      onChange={(e) =>
                        setSafetyChecklist({
                          ...safetyChecklist,
                          driverVerified: e.target.checked,
                        })
                      }
                      type="checkbox"
                    />
                    <p>Driver verified.</p>
                  </div>

                  <div className="flex items-center space-x-1">
                    <input
                      onChange={(e) =>
                        setSafetyChecklist({
                          ...safetyChecklist,
                          vehicleFitnessChecked: e.target.checked,
                        })
                      }
                      type="checkbox"
                    />
                    <p>Vehicle fitness checked.</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">Load Notes</p>
                <textarea
                  onChange={(event) => {
                    setloadNotes(event.target.value);
                  }}
                  className="border border-gray-300 p-1 h-28 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={() => {
              addLoad();
            }}
            className="bg-[#8661c1] text-white py-1 px-4 rounded"
          >
            Assign Load
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssignLoadForm;
