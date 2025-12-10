import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import WarehouseInventorySubnavbar from "./WarehouseInventory/WarehouseInventorySubnavbar";
import WarehouseSetup from "./WarehouseInventory/WarehouseSetup";
import HighLevelReports from "./WarehouseInventory/HighLevelReports";
import ItemMaster from "./WarehouseInventory/ItemMaster";
import InventoryPolicies from "./WarehouseInventory/InventoryPolicies";
import Approvals from "./Approvals";

function AdminWarehouseInventory() {
  const [currentSection, setcurrentSection] = useState("warehouse_setup");

  return (
    <div className="bg-gray-100 min-h-screen h-full">
      <AdminNavbar />
      <div className="flex">
        <WarehouseInventorySubnavbar
          currentSection={currentSection}
          setcurrentSection={setcurrentSection}
        />

        <div className="w-full">
          {currentSection === "warehouse_setup" ? (
            <WarehouseSetup />
          ) : currentSection === "item_master" ? (
            <ItemMaster />
          )
          : currentSection === "inventory_policies" ? (
            <InventoryPolicies />
          )
          : currentSection === "approvals" ? (
            <Approvals />
          )
          : (
            <HighLevelReports />
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminWarehouseInventory;
