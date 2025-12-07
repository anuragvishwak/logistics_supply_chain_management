import React, { useEffect, useState } from "react";
import { supabase } from "../SupabaseConfiguration";
import {
  FaArrowRightLong,
  FaIndianRupeeSign,
  FaRegCircleCheck,
  FaTruckArrowRight,
} from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import AssignLoadForm from "./AssignLoadForm";
import { GiCancel } from "react-icons/gi";

function Shipment() {
  const [openingAssignLoadForm, setopeningAssignLoadForm] = useState(false);
  const [gettingShipments, setgettingShipments] = useState([]);
  const [openingRemainingDetails, setopeningRemainingDetails] = useState(false);
  const [capturingShipmentObject, setcapturingShipmentObject] = useState({});
  const [gettingLoads, setgettingLoads] = useState([]);
  const [gettingFleets, setgettingFleets] = useState([]);

  async function renderingShipments() {
    try {
      const { data: fleetData, error: fleetError } = await supabase
        .from("shipment_database")
        .select("*");

      if (fleetError) {
        console.error(fleetError);
        alert("Error fetching shipment data");
        return;
      }

      setgettingShipments(fleetData);
    } catch (error) {
      console.error(error);
      alert("Unexpected error fetching fleet data");
    }
  }

  async function renderingLoads() {
    try {
      const { data: fleetData, error: fleetError } = await supabase
        .from("load_database")
        .select("*");

      if (fleetError) {
        console.error(fleetError);
        alert("Error fetching load data");
        return;
      }

      setgettingLoads(fleetData);

      console.log("finding loads", fleetData);
    } catch (error) {
      console.error(error);
      alert("Unexpected error fetching fleet data");
    }
  }

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

  useEffect(() => {
    renderingShipments();
    renderingLoads();
    renderingFleets();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-5">
      {gettingShipments.map((shipment) => (
        <div className="border shadow rounded-t-lg border-gray-300">
          <div className="bg-[#4B248F] rounded-t-lg p-5">
            <div className="flex items-start justify-between">
              <p className="text-white text-xl font-bold">
                {shipment.shipmentTitle}
              </p>
              <p className="text-white text-sm bg-[#ed7225] font-semibold py-0.5 px-4 rounded-full">
                {shipment.priority}
              </p>
            </div>

            <div className="flex items-center text-[#ed7225] font-semibold text-sm space-x-1">
              <p>{shipment.shipmentType}</p>
              <span>|</span>
              <p>{shipment.materialType}</p>
            </div>
          </div>

          <div className="bg-white border-t-8 p-5 rounded-b-lg border-[#ed7225]   ">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#4B248F] text-xl font-bold">
                  {shipment.pickupCity}
                </p>
                <p className="text-[#ed7225] font-semibold text-lg">
                  {shipment.pickupState}, {shipment.pickupCountry}
                </p>
                <p className="w-60">{shipment.pickupAddress}</p>
              </div>

              <span>
                <FaTruckArrowRight className="text-gray-300" size={80} />
              </span>

              <div>
                <p className="text-[#4B248F] text-xl font-bold">
                  {shipment.deliveryCity}
                </p>
                <p className="text-[#ed7225] font-semibold text-lg">
                  {shipment.deliveryState}, {shipment.deliveryCountry}
                </p>
                <p className="w-60">{shipment.deliveryAddress}</p>
              </div>
            </div>

            <div className="flex justify-end border-b border-gray-300 pb-3 space-x-2 mt-3">
              <button
                onClick={() => {
                  setopeningAssignLoadForm(true);
                  setcapturingShipmentObject(shipment);
                }}
                className="bg-[#4B248F] text-sm text-white font-semibold py-1 px-3 rounded"
              >
                + Assign Load
              </button>
              <button
                onClick={() => {
                  setopeningRemainingDetails(!openingRemainingDetails);
                }}
                className="bg-[#ed7225] text-sm text-white font-semibold py-1 px-3 rounded"
              >
                {openingRemainingDetails === true ? (
                  <div className="flex items-center">
                    <p>Close</p>
                    <MdKeyboardArrowUp size={18} />
                  </div>
                ) : (
                  <div className="flex items-center">
                    <p>Expand</p>
                    <MdKeyboardArrowDown size={18} />
                  </div>
                )}
              </button>
            </div>

            {openingRemainingDetails && (
              <div className="mt-1.5">
                <p className="text-[#ed7225] font-semibold text-xl mb-1.5">
                  Customer Details
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#2e294e]">Customer Name</p>
                    <p className="text-[#4B248F] font-semibold">
                      {shipment.customerName}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#2e294e]">Customer Phone Number</p>
                    <p className="text-[#4B248F] font-semibold">
                      +91 {shipment.customerPhone}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#2e294e]">Customer Email</p>
                    <p className="text-[#4B248F] font-semibold">
                      {shipment.customerEmail}
                    </p>
                  </div>
                </div>

                <div className="border-y mt-3 mb-1.5 pb-4 pt-1">
                  <p className="text-[#ed7225] font-semibold text-xl mb-1.5">
                    Shipment Details
                  </p>

                  <table className="w-full border table-auto">
                    <thead className="bg-[#efe6ff] border">
                      <th className="text-center">Packages</th>
                      <th className="text-center">Weight</th>
                      <th className="text-center">Volume</th>
                    </thead>
                    <tbody>
                      <td className="text-center">
                        {shipment.quantityOfPackages}
                      </td>
                      <td className="text-center">{shipment.totalWeight} kg</td>
                      <td className="text-center">{shipment.totalVolume} m³</td>
                    </tbody>
                  </table>
                </div>

                <div className="border-b pb-4 mb-2">
                  <p className="text-[#ed7225] font-semibold text-xl mb-1.5">
                    Payment Details
                  </p>

                  <div className="p-3 rounded border bg-[#efe6ff]">
                    <div className="flex items-center justify-between">
                      <p>Payment Type</p>
                      <p>{shipment.paymentType}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p>Shipment Cost</p>
                      <div className="flex items-center">
                        <FaIndianRupeeSign size={13} />
                        <p className="font-semibold">
                          {shipment.shipmentCost}/-
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p>Additional Cost</p>
                      <div className="flex items-center">
                        <FaIndianRupeeSign size={13} />
                        <p className="font-semibold">
                          {shipment.additionalCharges}/-
                        </p>
                      </div>
                    </div>
                    <hr className="border-gray-300 my-1.5" />
                    <div className="flex items-center justify-between">
                      <p className="font-bold">Total Cost</p>
                      <div className="flex items-center">
                        <FaIndianRupeeSign size={13} />
                        <p className="font-bold">
                          {parseInt(shipment.shipmentCost) +
                            parseInt(shipment.additionalCharges)}
                          /-
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[#ed7225] font-semibold text-xl mb-1.5">
                    Load Details
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {gettingLoads.map((load) => (
                      <div className="border border-gray-300 rounded">
                        <div className="bg-[#f9e7dc] p-3 rounded-t">
                          <div className="flex items-start justify-between">
                            <p className="text-lg font-bold text-[#4B248F]">
                              {load.assignedVehicle}
                            </p>
                            <p className="bg-white text-sm font-semibold py-05 px-3 rounded-full">
                              {load.sealNumber}
                            </p>
                          </div>
                          {gettingFleets
                            .filter(
                              (fleet) =>
                                fleet.vehicleName === load.assignedVehicle
                            )
                            .map((fleet) => (
                              <p className="text-sm">{fleet.assignedDriver}</p>
                            ))}
                        </div>

                        <div className="p-3">
                          <p className="text-[#ed7225] text-lg font-semibold mb-1.5">
                            Weight Information
                          </p>
                          <table className="w-full border table-auto">
                            <thead className="bg-[#efe6ff] border">
                              <th className="text-center">Assigned Weight</th>
                              <th className="text-center">Number of Bags</th>
                              <th className="text-center">Weight Per Bag</th>
                            </thead>
                            <tbody>
                              <td className="text-center">
                                {load.assignedWeight} kg
                              </td>
                              <td className="text-center">
                                {load.noOfBags} Bags
                              </td>
                              <td className="text-center">
                                {load.weightPerBag} kg
                              </td>
                            </tbody>
                          </table>
                        </div>

                        <div className="p-3">
                          <p className="text-[#8661c1] font-semibold text-lg">
                            Safety Checklist
                          </p>
                          <div className="grid grid-cols-3 text-sm gap-1">
                            <div className="flex items-center space-x-1">
                              {load.safetyChecklist.bagsProperlySealed ===
                              true ? (
                                <FaRegCircleCheck
                                  className={`${
                                    load.safetyChecklist.bagsProperlySealed ===
                                    true
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                />
                              ) : (
                                <GiCancel
                                  className={`${
                                    load.safetyChecklist.bagsProperlySealed ===
                                    true
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                />
                              )}
                              <p
                                className={`font-semibold ${
                                  load.safetyChecklist.bagsProperlySealed ===
                                  true
                                    ? "text-green-500"
                                    : "text-red-500"
                                }`}
                              >
                                Bags Properly Sealed
                              </p>
                            </div>

                            <div className="flex items-center space-x-1">
                              {load.safetyChecklist.vehicleDoorLocked ===
                              true ? (
                                <FaRegCircleCheck
                                  className={`${
                                    load.safetyChecklist.vehicleDoorLocked ===
                                    true
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                />
                              ) : (
                                <GiCancel
                                  className={`${
                                    load.safetyChecklist.vehicleDoorLocked ===
                                    true
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                />
                              )}
                              <p
                                className={`font-semibold ${
                                  load.safetyChecklist.vehicleDoorLocked ===
                                  true
                                    ? "text-green-500"
                                    : "text-red-500"
                                }`}
                              >
                                Vehicle Door Locked
                              </p>
                            </div>

                            <div className="flex items-center space-x-1">
                              {load.safetyChecklist.weightWithinLegalLimit ===
                              true ? (
                                <FaRegCircleCheck
                                  className={`${
                                    load.safetyChecklist
                                      .weightWithinLegalLimit === true
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                />
                              ) : (
                                <GiCancel
                                  className={`${
                                    load.safetyChecklist
                                      .weightWithinLegalLimit === true
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                />
                              )}
                              <p
                                className={`font-semibold ${
                                  load.safetyChecklist
                                    .weightWithinLegalLimit === true
                                    ? "text-green-500"
                                    : "text-red-500"
                                }`}
                              >
                                Weight withtin Legal Limit
                              </p>
                            </div>

                            <div className="flex items-center space-x-1">
                              {load.safetyChecklist.noLeakageOrDamage ===
                              true ? (
                                <FaRegCircleCheck
                                  className={`${
                                    load.safetyChecklist.noLeakageOrDamage ===
                                    true
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                />
                              ) : (
                                <GiCancel
                                  className={`${
                                    load.safetyChecklist.noLeakageOrDamage ===
                                    true
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                />
                              )}
                              <p
                                className={`font-semibold ${
                                  load.safetyChecklist.noLeakageOrDamage ===
                                  true
                                    ? "text-green-500"
                                    : "text-red-500"
                                }`}
                              >
                                No Leakage or Damage
                              </p>
                            </div>

                            <div className="flex items-center space-x-1">
                              {load.safetyChecklist.driverVerified === true ? (
                                <FaRegCircleCheck
                                  className={`${
                                    load.safetyChecklist.driverVerified === true
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                />
                              ) : (
                                <GiCancel
                                  className={`${
                                    load.safetyChecklist.driverVerified === true
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                />
                              )}
                              <p
                                className={`font-semibold ${
                                  load.safetyChecklist.driverVerified === true
                                    ? "text-green-500"
                                    : "text-red-500"
                                }`}
                              >
                                Driver Verified
                              </p>
                            </div>

                            <div className="flex items-center space-x-1">
                              {load.safetyChecklist.vehicleFitnessChecked ===
                              true ? (
                                <FaRegCircleCheck
                                  className={`${
                                    load.safetyChecklist
                                      .vehicleFitnessChecked === true
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                />
                              ) : (
                                <GiCancel
                                  className={`${
                                    load.safetyChecklist
                                      .vehicleFitnessChecked === true
                                      ? "text-green-500"
                                      : "text-red-500"
                                  }`}
                                />
                              )}
                              <p
                                className={`font-semibold ${
                                  load.safetyChecklist.vehicleFitnessChecked ===
                                  true
                                    ? "text-green-500"
                                    : "text-red-500"
                                }`}
                              >
                                Vehicle Fitness Checked
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="p-3">
                          <p className="text-[#8661c1] font-semibold text-lg">
                            Load Notes
                          </p>

                          <p className="bg-gray-100 border p-1 border-gray-300 text-sm">{load.loadNotes}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      {openingAssignLoadForm && (
        <AssignLoadForm
          capturingShipmentObject={capturingShipmentObject}
          setopeningAssignLoadForm={setopeningAssignLoadForm}
        />
      )}
    </div>
  );
}

export default Shipment;
