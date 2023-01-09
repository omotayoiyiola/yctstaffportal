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
import ProtectedRoute from "./Pages/ProtectedRoutes";
import Error from "./components/Error";

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
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route
            path="/resetpass"
            element={
              <ProtectedRoute>
                <ResetPassword />
              </ProtectedRoute>
            }
          />
          <Route path="/confirmaccount" element={<ConfirmAccount />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
          <Route
            path="/uploadPass"
            element={
              <ProtectedRoute>
                <UploadPass />
              </ProtectedRoute>
            }
          />
          <Route
            path="/uploadSignature"
            element={
              <ProtectedRoute>
                <UploadSigature />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editbiodata"
            element={
              <ProtectedRoute>
                <EditBioData />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editAcadqualification"
            element={
              <ProtectedRoute>
                (
                <EditDetailsPage
                  allowed="true"
                  message="Academic qualification cannot be edited. Kindly visit the registry if information here is not up-to-date"
                  submessage={userProfile?.qual}
                />
                )
              </ProtectedRoute>
            }
          />
          <Route
            path="/editprofqualification"
            element={
              <ProtectedRoute>
                (
                <EditDetailsPage
                  allowed="false"
                  message="Edit professional qualification"
                  submessage={userProfile?.qualprof}
                  link="editprofessional"
                />
                )
              </ProtectedRoute>
            }
          />
          <Route
            path="/editnextofkin"
            element={
              <ProtectedRoute>
                (
                <EditDetailsPage
                  allowed="false"
                  message="Name, address, phone number and relationship with Next-of-Kin"
                  submessage={userProfile?.nextkin}
                  link="editnextofkin"
                />
                )
              </ProtectedRoute>
            }
          />
          <Route
            path="/editChildren"
            element={
              <ProtectedRoute>
                (
                <EditDetailsPage
                  allowed="false"
                  message="Full name(s) and date of birth of Child(ren). Maximum of 4 children is alowed"
                  submessage={userProfile?.chd}
                  link="editchildren"
                />
                )
              </ProtectedRoute>
            }
          />
          <Route
            path="/editSpouse"
            element={
              <ProtectedRoute>
                (
                <EditDetailsPage
                  allowed="false"
                  message="Full name, email address, phone number and other necessary details of spouse."
                  submessage={userProfile?.spous}
                  link="editspouse"
                />
                )
              </ProtectedRoute>
            }
          />
          <Route
            path="researchareas"
            element={
              <ProtectedRoute>
                (
                <AcademicEdits
                  message="List your areas of research"
                  content={userProfile?.resach}
                  textarea="true"
                  button="false"
                  link="editresearcharea"
                />
                )
              </ProtectedRoute>
            }
          />
          <Route
            path="seminars"
            element={
              <ProtectedRoute>
                <AcademicEdits
                  message="List the Seminars/Conferences attended"
                  textarea="true"
                  content={userProfile?.seminars}
                  button="false"
                  link="editseminars"
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="mypub"
            textarea="false"
            element={
              <ProtectedRoute>
                (
                <AcademicEdits
                  message="Upload Publications"
                  content="All Publications in one PDF"
                  button="true"
                  last="publication"
                />
                )
              </ProtectedRoute>
            }
          />
          <Route
            path="mycv"
            textarea="false"
            element={
              <ProtectedRoute>
                (
                <AcademicEdits
                  message="Upload CV"
                  content="View uploaded CV"
                  button="true"
                  last="cv"
                />
                )
              </ProtectedRoute>
            }
          />
          <Route
            path="researchgate"
            element={
              <ProtectedRoute>
                (
                <AcademicEdits
                  message="Researchgate profile URL (link)"
                  content={userProfile?.rgate}
                  textarea="true"
                  button="false"
                  link="researchgate"
                />
                )
              </ProtectedRoute>
            }
          />
          <Route
            path="publications"
            element={
              <ProtectedRoute>
                (
                <AcademicPublicationn
                  message="Researchgate profile URL (link)"
                  content="repourl"
                  textarea="true"
                  button="false"
                />
                )
              </ProtectedRoute>
            }
          />
          <Route
            path="myextension"
            element={
              <ProtectedRoute>
                <Myextension />
              </ProtectedRoute>
            }
          />
          <Route
            path="docmgt"
            element={
              <ProtectedRoute>
                <FileManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />{" "}
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
