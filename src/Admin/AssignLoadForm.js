import React, { useEffect, useState } from "react";
import { supabase } from "../SupabaseConfiguration";

function AssignLoadForm({ capturingShipmentObject, setopeningAssignLoadForm }) {
  const [gettingFleets, setgettingFleets] = useState([]);
  const [assignedVehicle, setassignedVehicle] = useState("");

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
    renderingFleets();
  }, []);

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-5">
        <div className="flex items-start justify-between">
          <p className="text-xl font-bold text-[#4a2c40]">Assign Load</p>
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
          <div>
            <p>Shipment Details</p>
            <p>{capturingShipmentObject.shipmentTitle}</p>
            <div>
              <p>
                {capturingShipmentObject.deliveryCity},{" "}
                {capturingShipmentObject.deliveryState}
              </p>
              <div>
                <p>
                  {capturingShipmentObject.materialType} |{" "}
                  {capturingShipmentObject.totalWeight} kg
                </p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <p className="mb-1 font-semibold text-[#4a2c40]">
                Assign Vehicle
              </p>
              <select
              onChange={(event)=>{
                setassignedVehicle(event.target.value)
              }}
              className="w-full p-1 border border-gray-300">
                <option>Select Vehicle</option>
                {gettingFleets.map((vehicle) => (
                    <option value={vehicle.vehicleName}>{vehicle.vehicleName}</option>
                ))}
              </select>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignLoadForm;
