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

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/WarehouseManagerDashboard" element={<WarehouseManagerDashboard />} />
          <Route path="/FleetManagerDashboard" element={<FleetManagerDashboard />} />
          <Route path="/TransportManagerDashboard" element={<TransportManagerDashboard />} />
          <Route path="/FinanceDashboard" element={<FinanceDashboard />} />
          <Route path="/DriverDashboard" element={<DriverDashboard />} />
          <Route path="/CustomerDashboard" element={<CustomerDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; 