import React, { useState } from "react";
import { supabase } from "../SupabaseConfiguration";

function AddRouteForm({ setopeningAddRouteForm }) {
  const [routeName, setrouteName] = useState("");
  const [startLocation, setstartLocation] = useState("");
  const [endLocation, setendLocation] = useState("");
  const [distance, setdistance] = useState("");
  const [expectedTime, setexpectedTime] = useState("");
  const [routeType, setrouteType] = useState("");

  async function addRoute() {
    const routeData = {
      routeName: routeName,
      startLocation: startLocation,
      endLocation: endLocation,
      distance: distance,
      expectedTime: expectedTime,
      routeType: routeType,
      routeStatus: 'unassigned'
    };

      const { data, error } = await supabase
          .from("route_database")
          .insert([routeData]);
    
        if (error) {
          console.log(error);
          alert("Something went wrong!");
        } else {
          alert("Route added successfully!");
          console.log("Inserted:", data);
          setopeningAddRouteForm(false);
        }
  }

  

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-5">
        <div className="flex items-start justify-between">
          <p className="text-xl font-bold text-[#4a2c40]">Add Route</p>
          <button
            onClick={() => {
              setopeningAddRouteForm(false);
            }}
            className="text-[#8661c1] font-semibold"
          >
            Close
          </button>
        </div>

        <div className="grid grid-cols-3 gap-5 my-4">
          <div>
            <p className="mb-1 font-semibold text-[#4a2c40]">Route Name</p>
            <input
              onChange={(event) => {
                setrouteName(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="mb-1 font-semibold text-[#4a2c40]">Start Location</p>
            <input
              onChange={(event) => {
                setstartLocation(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="mb-1 font-semibold text-[#4a2c40]">End Location</p>
            <input
              onChange={(event) => {
                setendLocation(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="mb-1 font-semibold text-[#4a2c40]">Distance</p>
            <input
              onChange={(event) => {
                setdistance(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="mb-1 font-semibold text-[#4a2c40]">Expected Time</p>
            <input
              type="time"
              onChange={(event) => {
                setexpectedTime(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            />
          </div>

          <div>
            <p className="text-[#4a2c40] mb-1 font-semibold">Route Type</p>
            <select
              onChange={(event) => {
                setrouteType(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            >
              <option>select Route Type</option>
              <option>Intercity</option>
              <option>Intracity</option>
              <option>Pickup</option>
              <option>Delivery</option>
              <option>Distribution</option>
            </select>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={() => {
              addRoute();
            }}
            className="bg-[#8661c1] text-white py-1 px-4 rounded"
          >
            Add Route
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddRouteForm;
