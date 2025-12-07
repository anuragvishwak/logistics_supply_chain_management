import React, { useState } from "react";
import { supabase } from "../SupabaseConfiguration";

function AddVendorForm({ setopeningAddVendorForm }) {
  const [vendorType, setvendorType] = useState("");
  const [vendorName, setvendorName] = useState("");
  const [companyName, setcompanyName] = useState("");
  const [panNumber, setpanNumber] = useState("");
  const [contactPerson, setcontactPerson] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [accountHolderName, setaccountHolderName] = useState("");
  const [bankName, setbankName] = useState("");
  const [accountNumber, setaccountNumber] = useState("");
  const [ifscCode, setifscCode] = useState("");

  async function addVendor() {
    const vendorData = {
      vendorType: vendorType,
      vendorName: vendorName,
      companyName: companyName,
      panNumber: panNumber,
      contactPerson: contactPerson,
      phoneNumber: phoneNumber,
      email: email,
      accountHolderName: accountHolderName,
      bankName: bankName,
      accountNumber: accountNumber,
      ifscCode: ifscCode,
    };

    const { data, error } = await supabase
      .from("vendor_database")
      .insert([vendorData]);

    if (error) {
      console.log(error);
      alert("Something went wrong!");
    } else {
      alert("Vendor added successfully!");
      console.log("Inserted:", data);
      setopeningAddVendorForm(false);
    }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="p-4 w-7/12 bg-white">
        <div className="flex items-start mb-5 justify-between">
          <p className="text-xl font-bold text-[#8661c1]">Add Vendor</p>
          <button
            onClick={() => {
              setopeningAddVendorForm(false);
            }}
            className="text-[#ed7225] font-semibold"
          >
            Close
          </button>
        </div>
        <div>
          <div>
            <p className="text-[#4a2c40] mb-1 font-semibold">Vendor Type</p>
            <select
              onChange={(event) => {
                setvendorType(event.target.value);
              }}
              className="border border-gray-300 p-1 w-full"
            >
              <option>Select Vendor Type</option>
              <option>Transporter Vendor (provides trucks)</option>
              <option>Fleet Owner Vendor</option>
              <option>Driver Supply Vendor</option>
              <option>Loading/Unloading Vendor</option>
              <option>Warehouse Vendor</option>
              <option>Crane/Forklift Vendor</option>
              <option>CHA (Custom House Agent)</option>
              <option>Freight Forwarder</option>
              <option>Courier Vendor</option>
              <option>Packaging Vendor</option>
              <option>Labour Contractor</option>
            </select>
          </div>

          <div className="">
            <div className="my-3">
              <p className="text-[#8661c1] font-semibold text-lg">
                Basic Information
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Vendor Name
                  </p>
                  <input
                    onChange={(event) => {
                      setvendorName(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Company Legal Name
                  </p>
                  <input
                    onChange={(event) => {
                      setcompanyName(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    PAN Number
                  </p>
                  <input
                    onChange={(event) => {
                      setpanNumber(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#8661c1] font-semibold text-lg">
                Contact Details
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Conact Person
                  </p>
                  <input
                    onChange={(event) => {
                      setcontactPerson(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
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
                <div>
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

            <div className="my-5">
              <p className="text-[#8661c1] font-semibold text-lg">
                Bank & Payment Details
              </p>
              <div className="grid grid-cols-4 gap-5">
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Account Holder Name
                  </p>
                  <input
                    onChange={(event) => {
                      setaccountHolderName(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">Bank Name</p>
                  <input
                    onChange={(event) => {
                      setbankName(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Account Number
                  </p>
                  <input
                    onChange={(event) => {
                      setaccountNumber(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">IFSC Code</p>
                  <input
                    onChange={(event) => {
                      setifscCode(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => {
              addVendor();
            }}
            className="bg-[#8661c1] text-white py-1 px-4 rounded"
          >
            Add Vendor
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddVendorForm;
