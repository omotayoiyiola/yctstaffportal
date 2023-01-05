import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Dashboard from "./Pages/Dashboard";
import ResetPassword from "./Pages/ResetPassword";
import ViewProfile from "./Pages/ViewProfile";
import UploadPass from "./Pages/UploadPass";
import UploadSigature from "./Pages/UploadSigature";
import EditBioData from "./Pages/EditBioData";
import EditDetailsPage from "./Pages/EditDetailsPage";
import AcademicEdits from "./Pages/AcademicEdits";
import Myextension from "./Pages/Myextension";
import FileManagement from "./Pages/FileManagement";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import axios from "axios";
import AcademicPublicationn from "./Pages/AcademicPublication";

function App() {
  const client = new QueryClient();
  const { user } = useSelector((state) => state.user);
  console.log(user?.id);
  const [userProfile, setUserProfile] = useState();
  const nav = useNavigate();
  useEffect(() => {
    const request = async () => {
      try {
        const res = await axios.get(
          `http://backendyctstaff.omotayoiyiola.com:3000/staffrecord/${user?.id}`
        );
        console.log(res);
        setUserProfile(res.data[0]);
        return res.data[0];
      } catch (error) {
        console.log(error);
      }
    };
    request();
  }, [user?.id]);
  console.log(userProfile);
  useEffect(() => {
    !user && nav("/login");
  }, [user, nav]);
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <ToastContainer />
        <Routes>
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
                submessage={userProfile?.qual}
              />
            }
          />
          <Route
            path="/editprofqualification"
            element={
              <EditDetailsPage
                allowed="false"
                message="Edit professional qualification"
                submessage={userProfile?.qualprof}
                link="editprofessional"
              />
            }
          />
          <Route
            path="/editnextofkin"
            element={
              <EditDetailsPage
                allowed="false"
                message="Name, address, phone number and relationship with Next-of-Kin"
                submessage={userProfile?.nextkin}
                link="editnextofkin"
              />
            }
          />
          <Route
            path="/editChildren"
            element={
              <EditDetailsPage
                allowed="false"
                message="Full name(s) and date of birth of Child(ren). Maximum of 4 children is alowed"
                submessage={userProfile?.chd}
                link="editchildren"
              />
            }
          />
          <Route
            path="/editSpouse"
            element={
              <EditDetailsPage
                allowed="false"
                message="Full name, email address, phone number and other necessary details of spouse."
                submessage={userProfile?.spous}
                link="editspouse"
              />
            }
          />
          <Route
            path="researchareas"
            element={
              <AcademicEdits
                message="List your areas of research"
                content={userProfile?.resach}
                textarea="true"
                button="false"
                link="editresearcharea"
              />
            }
          />
          <Route
            path="seminars"
            element={
              <AcademicEdits
                message="List the Seminars/Conferences attended"
                textarea="true"
                content={userProfile?.seminars}
                button="false"
                link="editseminars"
              />
            }
          />
          <Route
            path="mypub"
            textarea="false"
            element={
              <AcademicEdits
                message="Upload Publications"
                content="All Publications in one PDF"
                button="true"
                last="publication"
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
                content={userProfile?.rgate}
                textarea="true"
                button="false"
                link="researchgate"
              />
            }
          />
          <Route
            path="publications"
            element={
              <AcademicPublicationn
                message="Researchgate profile URL (link)"
                content="repourl"
                textarea="true"
                button="false"
              />
            }
          />
          {/* <Route path="test" element={<Test />} /> */}
          <Route path="myextension" element={<Myextension />} />
          <Route path="docmgt" element={<FileManagement />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
