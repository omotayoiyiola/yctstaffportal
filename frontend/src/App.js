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
import EditBioData from "./Pages/EditBioData";
import EditDetailsPage from "./Pages/EditDetailsPage";
import AcademicEdits from "./Pages/AcademicEdits";
import AcademicPublication from "./Pages/AcademicPublication";
import Myextension from "./Pages/Myextension";
import FileManagement from "./Pages/FileManagement";
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
        <Route path="/editbiodata" element={<EditBioData />} />
        <Route
          path="/editAcadqualification"
          element={
            <EditDetailsPage
              allowed="true"
              message="Academic qualification cannot be edited. Kindly visit the registry if information here is not up-to-date"
              submessage="Bachelor of Science (Electrical/Electronics Engineering), Master of Science (Electrical Electronics Engineering - Communication Systems Engineering)"
            />
          }
        />
        <Route
          path="/editprofqualification"
          element={
            <EditDetailsPage
              allowed="true"
              message="Edit professional qualification"
              submessage="Cisco Certified Network Professional CCNP"
            />
          }
        />
        <Route
          path="/editnextofkin"
          element={
            <EditDetailsPage
              allowed="false"
              message="Name, address, phone number and relationship with Next-of-Kin"
              submessage="Iyiola Omolara Elizabeth, Iyiola Oluwakoremide Samuel"
            />
          }
        />
        <Route
          path="/editChildren"
          element={
            <EditDetailsPage
              allowed="false"
              message="Full name(s) and date of birth of Child(ren). Maximum of 4 children is alowed"
              submessage="Iyiola Oluwakoremide Samuel April 19, 201"
            />
          }
        />
        <Route
          path="/editSpouse"
          element={
            <EditDetailsPage
              allowed="false"
              message="Full name, email address, phone number and other necessary details of spouse."
              submessage="Iyiola Omolara Elizabeth"
            />
          }
        />
        <Route
          path="researchareas"
          element={
            <AcademicEdits
              message="List your areas of research"
              content="5G"
              textarea="true"
              button="false"
            />
          }
        />
        <Route
          path="seminars"
          element={
            <AcademicEdits
              message="List the Seminars/Conferences attended"
              textarea="true"
              content="seminars at Kano Workshop at sokoto"
              button="false"
            />
          }
        />
        <Route
          path="mypub"
          textarea="false"
          element={
            <AcademicEdits
              message="Upload Publications"
              content="View uploaded publications"
              button="true"
              last="CV"
            />
          }
        />
        <Route
          path="mycv"
          textarea="false"
          element={
            <AcademicEdits
              message="Upload CV"
              content="View uploaded CV"
              button="true"
              last="CV"
            />
          }
        />
        <Route
          path="researchgate"
          element={
            <AcademicEdits
              message="Researchgate profile URL (link)"
              content="repourl"
              textarea="true"
              button="false"
            />
          }
        />
        <Route
          path="publications"
          element={
            <AcademicPublication
              message="Researchgate profile URL (link)"
              content="repourl"
              textarea="true"
              button="false"
            />
          }
        />
        <Route path="myextension" element={<Myextension />} />
        <Route path="docmgt" element={<FileManagement />} />
      </Routes>
    </div>
  );
}

export default App;
