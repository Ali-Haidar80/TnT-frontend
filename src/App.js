import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin/Admin";
import AddData from "./pages/Admin/AddData";
import ModifyData from "./pages/Admin/ModifyData";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-admin-panel" element={<Admin />} />
        <Route path="/my-admin-panel/add-data" element={<AddData />} />
        <Route path="/my-admin-panel/modify-data" element={<ModifyData />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
