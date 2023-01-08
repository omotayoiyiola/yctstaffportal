import "./App.css";
import { Route, Routes } from "react-router-dom";
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
import Header from "./components/Header";
import NotFound from "./components/NotFound/NotFound";
import ConfirmAccount from "./Pages/ConfirmAccount";

function App() {
  const client = new QueryClient();
  const { user } = useSelector((state) => state.user);
  const [userProfile, setUserProfile] = useState();
  useEffect(() => {
    const request = async () => {
      try {
        const res = await axios.get(
          `http://backendyctstaff.omotayoiyiola.com:3000/staffrecord/${user?.id}`
        );
        setUserProfile(res.data[0]);
        return res.data[0];
      } catch (error) {
        return error;
      }
    };
    request();
  }, [user?.id]);
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <ToastContainer />
        <Header pix={userProfile?.imgg} />
        <Routes>
          <Route path="/login" element={!user ? <Login /> : <Dashboard />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Login />} />
          <Route
            path="/resetpass"
            element={user ? <ResetPassword /> : <Login />}
          />
          <Route path="/confirmaccount" element={<ConfirmAccount />} />
          <Route
            path="/viewprofile"
            element={user ? <ViewProfile /> : <Login />}
          />
          <Route
            path="/uploadPass"
            element={user ? <UploadPass /> : <Login />}
          />
          <Route
            path="/uploadSignature"
            element={user ? <UploadSigature /> : <Login />}
          />
          <Route
            path="/editbiodata"
            element={user ? <EditBioData /> : <Login />}
          />
          <Route
            path="/editAcadqualification"
            element={
              user ? (
                <EditDetailsPage
                  allowed="true"
                  message="Academic qualification cannot be edited. Kindly visit the registry if information here is not up-to-date"
                  submessage={userProfile?.qual}
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/editprofqualification"
            element={
              user ? (
                <EditDetailsPage
                  allowed="false"
                  message="Edit professional qualification"
                  submessage={userProfile?.qualprof}
                  link="editprofessional"
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/editnextofkin"
            element={
              user ? (
                <EditDetailsPage
                  allowed="false"
                  message="Name, address, phone number and relationship with Next-of-Kin"
                  submessage={userProfile?.nextkin}
                  link="editnextofkin"
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/editChildren"
            element={
              user ? (
                <EditDetailsPage
                  allowed="false"
                  message="Full name(s) and date of birth of Child(ren). Maximum of 4 children is alowed"
                  submessage={userProfile?.chd}
                  link="editchildren"
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/editSpouse"
            element={
              user ? (
                <EditDetailsPage
                  allowed="false"
                  message="Full name, email address, phone number and other necessary details of spouse."
                  submessage={userProfile?.spous}
                  link="editspouse"
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="researchareas"
            element={
              user ? (
                <AcademicEdits
                  message="List your areas of research"
                  content={userProfile?.resach}
                  textarea="true"
                  button="false"
                  link="editresearcharea"
                />
              ) : (
                <Login />
              )
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
              user ? (
                <AcademicEdits
                  message="Upload Publications"
                  content="All Publications in one PDF"
                  button="true"
                  last="publication"
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="mycv"
            textarea="false"
            element={
              user ? (
                <AcademicEdits
                  message="Upload CV"
                  content="View uploaded CV"
                  button="true"
                  last="cv"
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="researchgate"
            element={
              user ? (
                <AcademicEdits
                  message="Researchgate profile URL (link)"
                  content={userProfile?.rgate}
                  textarea="true"
                  button="false"
                  link="researchgate"
                />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="publications"
            element={
              user ? (
                <AcademicPublicationn
                  message="Researchgate profile URL (link)"
                  content="repourl"
                  textarea="true"
                  button="false"
                />
              ) : (
                <Login />
              )
            }
          />
          {/* <Route path="test" element={<Test />} /> */}
          <Route
            path="myextension"
            element={user ? <Myextension /> : <Login />}
          />
          <Route
            path="docmgt"
            element={user ? <FileManagement /> : <Login />}
          />
          <Route path="/" element={user ? <Dashboard /> : <Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
