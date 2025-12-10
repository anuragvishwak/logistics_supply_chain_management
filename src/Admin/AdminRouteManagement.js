import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import { supabase } from "../SupabaseConfiguration";
import AddRouteForm from "./AddRouteForm";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function AdminRouteManagement() {
  const [openingAddRouteForm, setopeningAddRouteForm] = useState(false);
  const [gettingRoutes, setgettingRoutes] = useState([]);

  async function renderingRoutes() {
    try {
      const { data: fleetData, error: fleetError } = await supabase
        .from("route_database")
        .select("*");

      if (fleetError) {
        console.error(fleetError);
        alert("Error fetching drvier data");
        return;
      }

      setgettingRoutes(fleetData);
    } catch (error) {
      console.error(error);
      alert("Unexpected error fetching fleet data");
    }
  }

  useEffect(() => {
    renderingRoutes();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <AdminNavbar />
      <div className=" border border-gray-300 shadow bg-white m-5 p-5 rounded-lg justify-between">
        <div>
          <p className="text-[#4B248F] text-xl font-bold">Route Management</p>
          <p className="text-[#ed7225]">
            Manage all your Routes in single CMS system.
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
                setopeningAddRouteForm(true);
              }}
              className="bg-[#ed7225] text-white font-semibold py-1 px-4 rounded"
            >
              Add Route
            </button>
          </div>
        </div>
      </div>
      <div className="m-5 grid grid-cols-3 gap-5">
        {gettingRoutes.map((route) => (
          <div className="border rounded-xl shadow border-gray-300">
            <div className="bg-[#4B248F] flex items-start justify-between rounded-t-lg clear-start p-5">
              <p className="text-white text-xl font-bold">{route.routeName}</p>
              <p className="text-[#2e294e] font-semibold text-sm bg-white py-0.5 px-4 rounded-full">
                {route.routeStatus === "unassigned"
                  ? "Un Assigned"
                  : "Assigned"}
              </p>
            </div>

            <div className="bg-white border-t-8 border-[#ed7225] p-5 rounded-b-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Start Location</p>
                  <p className="font-semibold">{route.startLocation}</p>
                </div>
                <HiOutlineArrowNarrowRight size={35} />
                <div>
                  <p className="text-sm">End Location</p>
                  <p className="font-semibold">{route.endLocation}</p>
                </div>
              </div>
              <hr className="border-gray-300 mt-2" />
              <div>
                <div className="flex items-end justify-between">
                  <p className="text-sm">Distance</p>
                  <p className="font-semibold">{route.distance} km</p>
                </div>

                <div className="flex items-end justify-between">
                  <p className="text-sm">Expected Time</p>
                  <p className="font-semibold">{route.expectedTime} AM</p>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {openingAddRouteForm && (
        <AddRouteForm setopeningAddRouteForm={setopeningAddRouteForm} />
      )}
    </div>
  );
}

export default AdminRouteManagement;
