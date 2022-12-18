import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./Pages/Home";
import ForgotPassword from "./components/ForgotPassword";
function App() {
  const user = false;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;
