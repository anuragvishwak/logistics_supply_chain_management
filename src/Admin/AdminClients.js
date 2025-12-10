import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AddClientForm from "./AddClientForm";
import { supabase } from "../SupabaseConfiguration";

function AdminClients() {
  const [openingAddClientForm, setopeningAddClientForm] = useState(false);
  const [gettingClients, setgettingClients] = useState([]);

  async function renderingClients() {
    try {
      const { data: fleetData, error: fleetError } = await supabase
        .from("client_database")
        .select("*");

      if (fleetError) {
        console.error(fleetError);
        alert("Error fetching fleet data");
        return;
      }

      setgettingClients(fleetData);
    } catch (error) {
      console.error(error);
      alert("Unexpected error fetching fleet data");
    }
  }

  useEffect(() => {
    renderingClients();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <AdminNavbar />
      <div className=" border border-gray-300 shadow bg-white m-5 p-5 rounded-lg justify-between">
        <div>
          <p className="text-[#4B248F] text-xl font-bold">Clients</p>
          <p className="text-[#ed7225]">
            Manage all your Clients in single CMS system.
          </p>
        </div>
        <hr className="my-3 border-gray-300" />
        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-3">
            <input
              className="border p-1 rounded border-gray-300 w-96"
              placeholder="Search Clients...."
            />
            <button
              onClick={() => {
                setopeningAddClientForm(true);
              }}
              className="bg-[#ed7225] text-white font-semibold py-1 px-4 rounded"
            >
              Add Client
            </button>
          </div>
        </div>
      </div>
      <div className="m-5 grid grid-cols-2 gap-5">
        {gettingClients.map((client) => (
          <div className="border shadow rounded-xl border-gray-300">
            <div className="bg-[#4B248F] rounded-t-lg p-5">
              <div className="flex items-start justify-between">
                <p className="text-white text-xl font-bold">
                  {client.clientName}
                </p>
                <p className="text-white text-sm bg-[#ed7225] font-semibold py-0.5 px-4 rounded-full">
                  {client.businessCategory}
                </p>
              </div>
              <p className="text-[#ed7225] font-semibold">
                {client.companyName}
              </p>
            </div>

            <div className="bg-white rounded-b-xl p-5">
              <div className="p-3 rounded border border-gray-300">
                <p className="text-[#ed7225] font-semibold text-xl mb-1.5">
                  Contact Information
                </p>
                <div className="grid grid-cols-3 gap-5">
                  <div className="">
                    <p className="text-[#2e294e]">Contact Person</p>
                    <p className="text-[#4B248F] font-semibold">
                      {client.contactPerson}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#2e294e]">Phone Number</p>
                    <p className="text-[#4B248F] font-semibold">
                      {client.phoneNumber}
                    </p>
                  </div>

                  <div>
                    <p className="text-[#2e294e]">Email</p>
                    <p className="text-[#4B248F] font-semibold">
                      {client.email}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 my-3 border border-gray-300 rounded">
                <p className="text-[#ed7225] font-semibold text-xl mb-1.5">
                  Business Details
                </p>

                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <p className="text-[#2e294e]">GST Number</p>
                    <p className="text-[#4B248F] font-semibold">
                      {client.gstNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#2e294e]">PAN Number</p>
                    <p className="text-[#4B248F] font-semibold">
                      {client.panNumber}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-3 border border-gray-300 rounded">
                <p className="text-[#2e294e]">Address</p>
                <p className="text-[#4B248F] font-semibold">{client.address}, {client.state}, {client.country} - {client.pincode}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {openingAddClientForm && (
        <AddClientForm setopeningAddClientForm={setopeningAddClientForm} />
      )}
    </div>
  );
}

export default AdminClients;
