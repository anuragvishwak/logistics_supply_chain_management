import React, { useState } from "react";
import { supabase } from "../SupabaseConfiguration";

function AddDriverForm({ setopeningAddDriverForm }) {
  const [fullName, setfullName] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [emergencyContactNumber, setemergencyContactNumber] = useState("");
  const [licenseNumber, setlicenseNumber] = useState("");
  const [licenseType, setLicenseType] = useState("");
  const [licenseExpiryDate, setlicenseExpiryDate] = useState("");
  const [aadhaarNumber, setaadhaarNumber] = useState("");
  const [panNumber, setpanNumber] = useState("");
  const [driverType, setdriverType] = useState("");
  const [salary, setsalary] = useState("");
  const [joiningDate, setjoiningDate] = useState("");
  const [workLocation, setworkLocation] = useState("");

  async function addDriver() {
    const driverData = {
      fullName: fullName,
      phoneNumber: phoneNumber,
      email: email,
      address: address,
      emergencyContactNumber: emergencyContactNumber,
      licenseNumber: licenseNumber,
      licenseType: licenseType,
      licenseExpiryDate: licenseExpiryDate,
      aadhaarNumber: aadhaarNumber,
      panNumber: panNumber,
      driverType: driverType,
      salary: salary,
      joiningDate: joiningDate,
      workLocation: workLocation,
    };

    const { data, error } = await supabase
      .from("driver_database")
      .insert([driverData]);

    if (error) {
      console.log(error);
      alert("Something went wrong!");
    } else {
      alert("Driver added successfully!");
      console.log("Inserted:", data);
      setopeningAddDriverForm(false);
    }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white p-5 rounded-xl">
        <div className="flex items-start justify-between">
          <p className="text-xl font-bold text-[#4a2c40]">Add Driver</p>
          <button
            onClick={() => {
              setopeningAddDriverForm(false);
            }}
            className="text-[#8661c1] font-semibold"
          >
            Close
          </button>
        </div>

        <div>
          <div>
            <p className="text-[#8661c1] font-semibold text-lg">
              Personal Details
            </p>
            <div className="grid grid-cols-4 gap-3">
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">Full Name</p>
                <input
                  onChange={(event) => {
                    setfullName(event.target.value);
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
              </div>{" "}
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">Email</p>
                <input
                  onChange={(event) => {
                    setemail(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>{" "}
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">Address</p>
                <input
                  onChange={(event) => {
                    setaddress(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>{" "}
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Emergency Contact Number
                </p>
                <input
                  onChange={(event) => {
                    setemergencyContactNumber(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          </div>

          <div className="my-4">
            <p className="text-[#8661c1] font-semibold text-lg">
              Driving & Document Details
            </p>
            <div className="grid grid-cols-4 gap-3">
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  License Number
                </p>
                <input
                  onChange={(event) => {
                    setlicenseNumber(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  License Type
                </p>
                <input
                  onChange={(event) => {
                    setLicenseType(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  License Expiry Date
                </p>
                <input
                  onChange={(event) => {
                    setlicenseExpiryDate(event.target.value);
                  }}
                  type="date"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Aadhaar Number
                </p>
                <input
                  onChange={(event) => {
                    setaadhaarNumber(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">PAN Number</p>
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
              Employment Details
            </p>

            <div className="grid grid-cols-4 gap-5">
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">Driver Type</p>
                <select
                  onChange={(event) => {
                    setdriverType(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                >
                  <option>Select Type</option>
                  <option>Full Time</option>
                  <option>Contract</option>
                </select>
              </div>
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Salary or Per-Trip Rate
                </p>
                <input
                  onChange={(event) => {
                    setsalary(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Joining Date
                </p>
                <input
                  onChange={(event) => {
                    setjoiningDate(event.target.value);
                  }}
                  type="date"
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Work Location
                </p>
                <input
                  onChange={(event) => {
                    setworkLocation(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={() => {
              addDriver();
            }}
            className="bg-[#8661c1] text-white py-1 px-4 rounded"
          >
            Add Driver
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddDriverForm;
