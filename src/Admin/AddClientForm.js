import React, { useState } from "react";
import { supabase } from "../SupabaseConfiguration";

function AddClientForm({ setopeningAddClientForm }) {
  const [clientName, setclientName] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [contactPerson, setcontactPerson] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [gstNumber, setgstNumber] = useState("");
  const [panNumber, setpanNumber] = useState("");
  const [businessCategory, setbusinessCategory] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [pincode, setpincode] = useState("");
  const [address, setaddress] = useState("");

  async function addClient(){
    const clientData = {
        clientName: clientName,
        companyName: companyName,
        contactPerson: contactPerson,
        phoneNumber: phoneNumber,
        email: email,
        gstNumber: gstNumber,
        panNumber: panNumber,
        businessCategory: businessCategory,
        country: country,
        state: state,
        city: city,
        pincode: pincode,
        address: address
    }

    const { data, error } = await supabase
          .from("client_database")
          .insert([clientData]);
    
        if (error) {
          console.log(error);
          alert("Something went wrong!");
        } else {
          alert("Client added successfully!");
          console.log("Inserted:", data);
          setopeningAddClientForm(false);
        }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-5">
        <div className="flex items-start justify-between">
          <p className="text-xl font-bold text-[#4a2c40]">Add Client</p>
          <button
            onClick={() => {
              setopeningAddClientForm(false);
            }}
            className="text-[#8661c1] font-semibold"
          >
            Close
          </button>
        </div>
        <div>
          <div>
            <p className="text-[#8661c1] font-semibold text-lg">
              Basic Details
            </p>

            <div className="grid grid-cols-5 gap-4">
              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">Client Name</p>
                <input
                  onChange={(event) => {
                    setclientName(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Company Name
                </p>
                <input
                  onChange={(event) => {
                    setcompanyName(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Contact Person
                </p>
                <input
                  onChange={(event) => {
                    setcontactPerson(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Phone Number
                </p>
                <input
                  onChange={(event) => {
                    setphoneNumber(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">Email</p>
                <input
                  onChange={(event) => {
                    setemail(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-[#8661c1] font-semibold text-lg">
              Business Details
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">GST Number</p>
                <input
                  onChange={(event) => {
                    setgstNumber(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">PAN Number</p>
                <input
                  onChange={(event) => {
                    setpanNumber(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="text-[#4a2c40] mb-1 font-semibold">
                  Business Category
                </p>
                <select
                  onChange={(event) => {
                    setbusinessCategory(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                >
                  <option>select Category</option>
                  <option>Manufacturer</option>
                  <option>Distributor</option>
                  <option>Retailer</option>
                  <option>E-commerce</option>
                  <option>Export/Import</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[#8661c1] font-semibold text-lg">
              Address Details
            </p>
            <div className="grid grid-cols-4 gap-4">
              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">Country</p>
                <input
                  onChange={(event) => {
                    setcountry(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>{" "}
              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">State</p>
                <input
                  onChange={(event) => {
                    setstate(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>{" "}
              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">City</p>
                <input
                  onChange={(event) => {
                    setcity(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>{" "}
              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">Pincode</p>
                <input
                  onChange={(event) => {
                    setpincode(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
            <div className="">
              <p className="mb-1 font-semibold text-[#4a2c40]">Address</p>
              <textarea
                onChange={(event) => {
                  setaddress(event.target.value);
                }}
                className="border h-28 border-gray-300 p-1 w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={() => {
              addClient();
            }}
            className="bg-[#8661c1] text-white py-1 px-4 rounded"
          >
            Add Client
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddClientForm;
