import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./Pages/Home";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./Pages/Dashboard";
import ResetPassword from "./Pages/ResetPassword";
import ViewProfile from "./Pages/ViewProfile";
import UploadPass from "./Pages/UploadPass";
import UploadSigature from "./Pages/UploadSigature";
function App() {
  const user = false;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resetpass" element={<ResetPassword />} />
        <Route path="/viewprofile" element={<ViewProfile />} />
        <Route path="/uploadPass" element={<UploadPass />} />
        <Route path="/uploadSignature" element={<UploadSigature />} />
      </Routes>
    </div>
  );
}

export default App;
