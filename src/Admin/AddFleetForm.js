import React, { useEffect, useState } from "react";
import { supabase } from "../SupabaseConfiguration";


function AddFleetForm({ setopeningAddFleetForm }) {
  const [vehicleName, setvehicleName] = useState("");
  const [vehicleType, setvehicleType] = useState("");
  const [bodyType, setbodyType] = useState("");
  const [ownershipType, setownershipType] = useState("");
  const [loadCapacity, setloadCaparcity] = useState("");
  const [volumeCapacity, setvolumeCapacity] = useState("");
  const [noOfAxles, setnoOfAxles] = useState("");
  const [fuelType, setfuelType] = useState("");
  const [mileage, setmileage] = useState("");
  const [brand, setbrand] = useState("");
  const [model, setmodel] = useState("");
  const [yearOfManufacture, setyearOfManufacture] = useState("");
  const [vehicleColor, setvehicleColor] = useState("");
  const [insuranceValidityDate, setinsurancValidityDate] = useState("");
  const [pollutionCertificateExpiry, setpollutionCertificateExpiry] =
    useState("");
  const [nationalPermitValidity, setnationalPermitValidity] = useState("");
  const [roadTaxValidity, setroadTaxValidity] = useState("");
  const [additionalNote, setadditionalNote] = useState("");

  async function addFleet() {
    const fleetData = {
      vehicleName: vehicleName,
      vehicleType: vehicleType,
      bodyType: bodyType,
      ownershipType: ownershipType,
      loadCapacity: loadCapacity,
      volumeCapacity: volumeCapacity,
      noOfAxles: noOfAxles,
      fuelType: fuelType,
      mileage: mileage,
      brand: brand,
      model: model,
      yearOfManufacture: yearOfManufacture,
      vehicleColor: vehicleColor,
      insuranceValidityDate: insuranceValidityDate,
      pollutionCertificateExpiry: pollutionCertificateExpiry,
      nationalPermitValidity: nationalPermitValidity,
      roadTaxValidity: roadTaxValidity,
      additionalNote: additionalNote,
      
    };

    const { data, error } = await supabase
      .from("shipment_database")
      .insert([fleetData]);

    if (error) {
      console.log(error);
      alert("Something went wrong!");
    } else {
      alert("User added successfully!");
      console.log("Inserted:", data);
      setopeningAddFleetForm(false);
    }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white w-8/12 p-5 rounded-lg">
        <div className="flex items-start justify-between">
          <p className="text-xl font-bold text-[#4a2c40]">Add Fleet</p>
          <button
            onClick={() => {
              setopeningAddFleetForm(false);
            }}
            className="text-[#8661c1] font-semibold"
          >
            Close
          </button>
        </div>

        <div>
          <div>
            <div>
              <p className="text-[#8661c1] font-semibold text-lg">
                Basic Details
              </p>
              <div className="grid grid-cols-4 gap-3">
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Vehicle Name
                  </p>
                  <input
                    onChange={(event) => {
                      setvehicleName(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="text-[#4a2c40] mb-1 font-semibold">
                    Vehicle Type
                  </p>
                  <select
                    onChange={(event) => {
                      setvehicleType(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  >
                    <option>select Vehicle Type</option>
                    <option>Truck</option>
                    <option>Trailer</option>
                    <option>Container</option>
                    <option>Van</option>
                    <option>Tempo</option>
                    <option>Reefer (Refrigerated)</option>
                  </select>
                </div>
                <div>
                  <p className="text-[#4a2c40] mb-1 font-semibold">Body Type</p>
                  <select
                    onChange={(event) => {
                      setbodyType(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  >
                    <option>select Body Type</option>
                    <option>Open body</option>
                    <option>Closed body</option>
                    <option>Flatbed</option>
                    <option>Tanker</option>
                    <option>Container</option>
                    <option>Tip Trailer</option>
                  </select>
                </div>

                <div>
                  <p className="text-[#4a2c40] mb-1 font-semibold">
                    Ownership Type
                  </p>
                  <select
                    onChange={(event) => {
                      setownershipType(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  >
                    <option>select Ownership Type</option>
                    <option>Company-owned</option>
                    <option>Finance</option>
                    <option>Leased</option>
                    <option>Vendor-owned</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="my-3">
              <p className="text-[#8661c1] font-semibold text-lg">
                Capacity Details
              </p>
              <div className="grid grid-cols-4 gap-3">
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Load Capacity (tons)
                  </p>
                  <input
                    onChange={(event) => {
                      setloadCaparcity(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Volume Capacity (cubic meters)
                  </p>
                  <input
                    onChange={(event) => {
                      setvolumeCapacity(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    No. of Axles
                  </p>
                  <input
                    onChange={(event) => {
                      setnoOfAxles(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="text-[#4a2c40] mb-1 font-semibold">Fuel Type</p>
                  <select
                    onChange={(event) => {
                      setfuelType(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  >
                    <option>select Fuel Type</option>
                    <option>Diesel</option>
                    <option>Petrol</option>
                    <option>CNG</option>
                    <option>Electric</option>
                  </select>
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Mileage (km/litre)
                  </p>
                  <input
                    onChange={(event) => {
                      setmileage(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#8661c1] font-semibold text-lg">
                Manufacturer & Technical Info
              </p>
              <div className="grid grid-cols-4 gap-3">
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Make (Brand)
                  </p>
                  <input
                    onChange={(event) => {
                      setbrand(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">Model</p>
                  <input
                    onChange={(event) => {
                      setmodel(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Year of Manufacture
                  </p>
                  <input
                    onChange={(event) => {
                      setyearOfManufacture(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Vehicle Color
                  </p>
                  <input
                    onChange={(event) => {
                      setvehicleColor(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-[#8661c1] font-semibold text-lg">
                Documents & Validity
              </p>
              <div className="grid grid-cols-4 gap-3">
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Insurance Validity Date
                  </p>
                  <input
                    type="date"
                    onChange={(event) => {
                      setinsurancValidityDate(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Pollution Certificate Expiry
                  </p>
                  <input
                    type="date"
                    onChange={(event) => {
                      setpollutionCertificateExpiry(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    National Permit Validity
                  </p>
                  <input
                    type="date"
                    onChange={(event) => {
                      setnationalPermitValidity(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Road Tax Validity
                  </p>
                  <input
                    type="date"
                    onChange={(event) => {
                      setroadTaxValidity(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <p className="mb-1 font-semibold text-[#4a2c40]">
                Additional Note
              </p>
              <textarea
                onChange={(event) => {
                  setadditionalNote(event.target.value);
                }}
                className="border border-gray-300 p-1 w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-end">
          <button
            onClick={() => {
              addFleet();
            }}
            className="bg-[#8661c1] text-white py-1 px-4 rounded"
          >
            Add Fleet
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddFleetForm;
