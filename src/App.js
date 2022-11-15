import ability from "./config/ability";
import { AbilityContext } from "./config/Can";
import Sidebar from "./Sidebar";
import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";

export default function App({ props }) {
  return (
    <AbilityContext.Provider value={ability}>
      <div style={{ display: "grid", gridTemplateColumns: "10% 80%" }}>
        <Sidebar />
        <Dashboard/>
      </div>
    </AbilityContext.Provider>
  );
}
