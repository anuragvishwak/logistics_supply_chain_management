import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import WarehouseManagerDashboard from "./Warehouse Manager/WarehouseManagerDashboard";
import FleetManagerDashboard from "./Fleet Manager/FleetManagerDashboard";
import TransportManagerDashboard from "./Transport Manager/TransportManagerDashboard";
import FinanceDashboard from "./Finance/FinanceDashboard";
import DriverDashboard from "./Driver/DriverDashboard";
import CustomerDashboard from "./Customer Portal/CustomerDashboard";
import AdminDashboard from "./Admin/AdminDashboard";
import Login from "./Login";
import SignUp from "./SignUp";
import Fleet from "./Admin/Fleet";
import AdminDriver from "./Admin/AdminDriver";
import AdminSupportTickets from "./Admin/AdminSupportTickets";
import AdminVendors from "./Admin/AdminVendors";
import AdminFinanceBilling from "./Admin/AdminFinanceBilling";
import AdminClients from "./Admin/AdminClients";
import AdminWarehouseInventory from "./Admin/AdminWarehouseInventory";
import AdminShipmentLoadManagement from "./Admin/AdminShipmentLoadManagement";
import AdminRouteManagement from "./Admin/AdminRouteManagement";
import FleetManagerVehicles from "./Fleet Manager/FleetManagerVehicles";
import FleetManagerDrivers from "./Fleet Manager/FleetManagerDrivers";
import FleetManagerTrips from "./Fleet Manager/FleetManagerTrips";
import FleetManagerVendors from "./Fleet Manager/FleetManagerVendors";
import FleetManagerFuelLogs from "./Fleet Manager/FleetManagerFuelLogs";
import FleetManagerMaintenance from "./Fleet Manager/FleetManagerMaintenance";
import FleetManagerBreakdown from "./Fleet Manager/FleetManagerBreakdown";
import FleetManagerTyreParts from "./Fleet Manager/FleetManagerTyreParts";
import FleetManagerReports from "./Fleet Manager/FleetManagerReports";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/WarehouseManagerDashboard"
            element={<WarehouseManagerDashboard />}
          />
          <Route
            path="/FleetManagerDashboard"
            element={<FleetManagerDashboard />}
          />
          <Route
            path="/TransportManagerDashboard"
            element={<TransportManagerDashboard />}
          />
          <Route path="/FinanceDashboard" element={<FinanceDashboard />} />
          <Route path="/DriverDashboard" element={<DriverDashboard />} />
          <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Fleet" element={<Fleet />} />
          <Route path="/AdminDriver" element={<AdminDriver />} />
          <Route
            path="/AdminSupportTickets"
            element={<AdminSupportTickets />}
          />
          <Route path="/AdminVendors" element={<AdminVendors />} />
          <Route
            path="/AdminFinanceBilling"
            element={<AdminFinanceBilling />}
          />
          <Route path="/AdminClients" element={<AdminClients />} />
          <Route
            path="/AdminWarehouseInventory"
            element={<AdminWarehouseInventory />}
          />
          <Route
            path="/AdminShipmentLoadManagement"
            element={<AdminShipmentLoadManagement />}
          />
          <Route
            path="/AdminRouteManagement"
            element={<AdminRouteManagement />}
          />

          <Route
            path="/FleetManagerVehicles"
            element={<FleetManagerVehicles />}
          />

          <Route
            path="/FleetManagerDrivers"
            element={<FleetManagerDrivers />}
          />

          <Route path="/FleetManagerTrips" element={<FleetManagerTrips />} />

          <Route
            path="/FleetManagerVendors"
            element={<FleetManagerVendors />}
          />

          <Route
            path="/FleetManagerFuelLogs"
            element={<FleetManagerFuelLogs />}
          />
          <Route
            path="/FleetManagerMaintenance"
            element={<FleetManagerMaintenance />}
          />

          <Route
            path="/FleetManagerBreakdown"
            element={<FleetManagerBreakdown />}
          />

          <Route
            path="/FleetManagerTyreParts"
            element={<FleetManagerTyreParts />}
          />

          <Route
            path="/FleetManagerReports"
            element={<FleetManagerReports />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
