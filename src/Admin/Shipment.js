import React, { useEffect, useState } from "react";
import { supabase } from "../SupabaseConfiguration";
import {
  FaArrowRightLong,
  FaIndianRupeeSign,
  FaTruckArrowRight,
} from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import AssignLoadForm from "./AssignLoadForm";

function Shipment() {
    const [openingAssignLoadForm, setopeningAssignLoadForm] = useState(false);
  const [gettingShipments, setgettingShipments] = useState([]);
  const [openingRemainingDetails, setopeningRemainingDetails] = useState(false);
  const [capturingShipmentObject, setcapturingShipmentObject] = useState({});

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

  useEffect(() => {
    renderingShipments();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-5">
      {gettingShipments.map((shipment) => (
        <div>
          <div className="bg-[#8661c1] p-5">
            <div className="flex items-start justify-between">
              <p className="text-white text-xl font-bold">
                {shipment.shipmentTitle}
              </p>
              <p className="bg-white text-sm text-[#4a2c40] font-semibold py-0.5 px-4 rounded-full">
                {shipment.priority}
              </p>
            </div>

            <div className="flex items-center font-semibold text-sm space-x-1">
              <p>{shipment.shipmentType}</p>
              <span>|</span>
              <p>{shipment.materialType}</p>
            </div>
          </div>

          <div className="bg-white p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#8661c1] text-xl font-bold">
                  {shipment.pickupCity}
                </p>
                <p className="text-[#4a2c40] font-semibold text-lg">
                  {shipment.pickupState}, {shipment.pickupCountry}
                </p>
                <p className="w-60">{shipment.pickupAddress}</p>
              </div>

              <span>
                <FaTruckArrowRight className="text-[#4a2c40]" size={80} />
              </span>

              <div>
                <p className="text-[#8661c1] text-xl font-bold">
                  {shipment.deliveryCity}
                </p>
                <p className="text-[#4a2c40] font-semibold text-lg">
                  {shipment.deliveryState}, {shipment.deliveryCountry}
                </p>
                <p className="w-60">{shipment.deliveryAddress}</p>
              </div>
            </div>

            <div className="flex justify-end space-x-2 mt-3">
                <button 
                onClick={()=>{
                    setopeningAssignLoadForm(true);
                    setcapturingShipmentObject(shipment);
                }}
                className="bg-[#8661c1] text-sm text-white font-semibold py-1 px-3 rounded">
                   + Assign Load
                </button>
              <button
                onClick={() => {
                  setopeningRemainingDetails(!openingRemainingDetails);
                }}
                className="bg-[#4a2c40] text-sm text-white font-semibold py-1 px-3 rounded"
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
              <div>
                <p className="text-[#8661c1] font-semibold text-xl mb-1.5">
                  Customer Details
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[#2e294e]">Customer Name</p>
                    <p className="text-[#8661c1] font-semibold">
                      {shipment.customerName}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#2e294e]">Customer Phone Number</p>
                    <p className="text-[#8661c1] font-semibold">
                      +91 {shipment.customerPhone}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#2e294e]">Customer Email</p>
                    <p className="text-[#8661c1] font-semibold">
                      {shipment.customerEmail}
                    </p>
                  </div>
                </div>

                <div className="my-5">
                  <p className="text-[#8661c1] font-semibold text-xl mb-1.5">
                    Shipment Details
                  </p>

                  <table className="w-full border table-auto">
                    <thead className="bg-gray-100 border">
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

                <div>
                  <p className="text-[#8661c1] font-semibold text-xl mb-1.5">
                    Payment Details
                  </p>

                  <div className="p-3 rounded border bg-gray-100">
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
              </div>
            )}
          </div>
        </div>
      ))}

      {openingAssignLoadForm && <AssignLoadForm capturingShipmentObject = {capturingShipmentObject} setopeningAssignLoadForm = {setopeningAssignLoadForm}/>}
    </div>
  );
}

export default Shipment;
