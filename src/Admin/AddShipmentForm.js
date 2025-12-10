import React, { useEffect, useState } from "react";
import { supabase } from "../SupabaseConfiguration";

function AddShipmentForm({ setopeningAddShipmentForm }) {
  const [shipmentTitle, setshipmentTitle] = useState("");
  const [shipmentType, setshipmentType] = useState("");
  const [priority, setpriority] = useState("");
  const [pickupCountry, setpickupCountry] = useState("");
  const [pickupState, setpickupState] = useState("");
  const [pickupCity, setpickupCity] = useState("");
  const [pickupPincode, setpickupPincode] = useState("");
  const [pickupAddress, setpickupAddress] = useState("");
  const [pickupDateTime, setpickupDateTime] = useState("");
  const [deliveryCountry, setdeliveryCountry] = useState("");
  const [deliveryState, setdeliveryState] = useState("");
  const [deliveryCity, setdeliveryCity] = useState("");
  const [deliveryPincode, setdeliveryPincode] = useState("");
  const [deliveryAddress, setdeliveryAddress] = useState("");
  const [deliveryDateTime, setdeliveryDateTime] = useState("");
  const [customerName, setcustomerName] = useState("");
  const [customerPhone, setcustomerPhone] = useState("");
  const [customerEmail, setcustomerEmail] = useState("");
  const [shipmentCost, setshipmentCost] = useState("");
  const [additionalCharges, setadditionalCharges] = useState("");
  const [paymentType, setpaymentType] = useState("");
  const [quantityOfPackages, setquantityOfPackages] = useState("");
  const [totalWeight, settotalWeight] = useState("");
  const [totalVolume, settotalVolume] = useState("");
  const [materialType, setmaterialType] = useState("");
  const [gettingRoutes, setgettingRoutes] = useState([]);
  const [selectedRoute, setselectedRoute] = useState("");

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

  async function addShipment() {
    const shipmentData = {
      selectedRoute: selectedRoute,
      shipmentTitle: shipmentTitle,
      shipmentType: shipmentType,
      priority: priority,
      pickupCountry: pickupCountry,
      pickupState: pickupState,
      pickupCity: pickupCity,
      pickupPincode: pickupPincode,
      pickupAddress: pickupAddress,
      pickupDateTime: pickupDateTime,
      deliveryCountry: deliveryCountry,
      deliveryState: deliveryState,
      deliveryCity: deliveryCity,
      deliveryPincode: deliveryPincode,
      deliveryAddress: deliveryAddress,
      deliveryDateTime: deliveryDateTime,
      customerName: customerName,
      customerPhone: customerPhone,
      customerEmail: customerEmail,
      shipmentCost: shipmentCost,
      additionalCharges: additionalCharges,
      paymentType: paymentType,
      quantityOfPackages: quantityOfPackages,
      totalWeight: totalWeight,
      totalVolume: totalVolume,
      materialType: materialType,
    };

    const { data, error } = await supabase
      .from("shipment_database")
      .insert([shipmentData]);

    if (error) {
      console.log(error);
      alert("Something went wrong!");
    } else {
      alert("Shipment added successfully!");
      console.log("Inserted:", data);
      setopeningAddShipmentForm(false);
    }
  }

  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="bg-white h-screen overflow-auto my-5 p-5">
        <div className="flex items-start justify-between">
          <p className="text-xl font-bold text-[#4a2c40]">Add Shipment</p>
          <button
            onClick={() => {
              setopeningAddShipmentForm(false);
            }}
            className="text-[#8661c1] font-semibold"
          >
            Close
          </button>
        </div>

        <div>
          <div className="border p-3 mt-3 border-gray-300">
            <p className="text-[#8661c1] font-semibold text-lg">
              Shipment Details
            </p>
            <div className="flex w-full items-center gap-3">
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Shipment Title
                </p>
                <input
                  onChange={(event) => {
                    setshipmentTitle(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-96"
                />
              </div>

              <div>
                <p className="text-[#4a2c40] mb-1 font-semibold">
                  Shipment Type
                </p>
                <select
                  onChange={(event) => {
                    setshipmentType(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                >
                  <option>select Shipment Type</option>
                  <option>General Cargo</option>
                  <option>Perishable Goods (food, flower and dairy.)</option>
                  <option>
                    Fragile Goods (glass, electronics and ceramics.)
                  </option>
                  <option>
                    Hazardous Materials (Chemicals, inflammables, gases,
                    batteries.)
                  </option>
                  <option>Liquid Cargo</option>
                  <option>Oversized Cargo</option>
                  <option>Temperature-Controlled / Cold Chain</option>
                  <option>High-Value Goods</option>
                  <option>Machinery & Equipment</option>
                  <option>Documents & Parcels</option>
                  <option>Return Shipment / RTO</option>
                </select>
              </div>
              <div>
                <p className="text-[#4a2c40] mb-1 font-semibold">Priority</p>
                <select
                  onChange={(event) => {
                    setpriority(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-40"
                >
                  <option>select Priority</option>
                  <option>High</option>
                  <option>Medium</option>
                  <option>Low</option>
                </select>
              </div>
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Assign Route
                </p>
                <select
                  onChange={(event) => {
                    setselectedRoute(event.target.value);
                  }}
                  className="p-1.5 rounded border w-52 border-gray-300"
                >
                  <option>Assign Route</option>
                  {gettingRoutes.map((vehicle) => (
                    <option value={vehicle.routeName}>
                      {vehicle.routeName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 my-5 gap-5">
            <div className="border p-3 border-gray-300">
              <p className="text-[#8661c1] font-semibold text-lg">
                Pickup Details
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">Country</p>
                  <input
                    onChange={(event) => {
                      setpickupCountry(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">State</p>
                  <input
                    onChange={(event) => {
                      setpickupState(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">City</p>
                  <input
                    onChange={(event) => {
                      setpickupCity(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">Pincode</p>
                  <input
                    onChange={(event) => {
                      setpickupPincode(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Pickup Date & Time
                  </p>
                  <input
                    type="datetime-local"
                    onChange={(event) => {
                      setpickupDateTime(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">Address</p>
                <textarea
                  onChange={(event) => {
                    setpickupAddress(event.target.value);
                  }}
                  className="border h-20 border-gray-300 p-1 w-full"
                />
              </div>
            </div>

            <div className="border p-3 border-gray-300">
              <p className="text-[#8661c1] font-semibold text-lg">
                Delivery Details
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">Country</p>
                  <input
                    onChange={(event) => {
                      setdeliveryCountry(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">State</p>
                  <input
                    onChange={(event) => {
                      setdeliveryState(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">City</p>
                  <input
                    onChange={(event) => {
                      setdeliveryCity(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">Pincode</p>
                  <input
                    onChange={(event) => {
                      setdeliveryPincode(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Delivery Date & Time
                  </p>
                  <input
                    type="datetime-local"
                    onChange={(event) => {
                      setdeliveryDateTime(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">Address</p>
                <textarea
                  onChange={(event) => {
                    setdeliveryAddress(event.target.value);
                  }}
                  className="border h-20 border-gray-300 p-1 w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-5">
            <div className="border p-3 border-gray-300">
              <p className="text-[#8661c1] font-semibold text-lg">
                Customer Details
              </p>
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Customer Name
                  </p>
                  <input
                    onChange={(event) => {
                      setcustomerName(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div className="">
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Customer Phone
                  </p>
                  <input
                    onChange={(event) => {
                      setcustomerPhone(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Customer Email
                  </p>
                  <input
                    onChange={(event) => {
                      setcustomerEmail(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>
              </div>
            </div>

            <div className="p-3 border border-gray-300">
              <p className="text-[#8661c1] font-semibold text-lg">
                Billing & Payment
              </p>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Shipment Cost
                  </p>
                  <input
                    onChange={(event) => {
                      setshipmentCost(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="mb-1 font-semibold text-[#4a2c40]">
                    Additional Charges
                  </p>
                  <input
                    onChange={(event) => {
                      setadditionalCharges(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  />
                </div>

                <div>
                  <p className="text-[#4a2c40] mb-1 font-semibold">
                    Payment Type
                  </p>
                  <select
                    onChange={(event) => {
                      setpaymentType(event.target.value);
                    }}
                    className="border border-gray-300 p-1 w-full"
                  >
                    <option>select Payment Type</option>
                    <option>Prepaid</option>
                    <option>To Pay</option>
                    <option>Billing Monthly</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 border border-gray-300">
            <p className="text-[#8661c1] font-semibold text-lg">
              Package Details
            </p>

            <div className="grid grid-cols-4 gap-5">
              <div className="">
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Quantity of Packages
                </p>
                <input
                  onChange={(event) => {
                    setquantityOfPackages(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Total Weight (kg)
                </p>
                <input
                  onChange={(event) => {
                    settotalWeight(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Total Volume (cbm)
                </p>
                <input
                  onChange={(event) => {
                    settotalVolume(event.target.value);
                  }}
                  className="border border-gray-300 p-1 w-full"
                />
              </div>

              <div>
                <p className="mb-1 font-semibold text-[#4a2c40]">
                  Material Type
                </p>
                <input
                  onChange={(event) => {
                    setmaterialType(event.target.value);
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
              addShipment();
            }}
            className="bg-[#8661c1] text-white py-1 px-4 rounded"
          >
            Add Shipment
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddShipmentForm;
