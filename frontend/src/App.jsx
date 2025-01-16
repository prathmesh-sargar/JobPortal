

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import JobsPage from "./pages/JobsPage";
import ProfilePage from "./pages/ProfilePage";
import UpdateProfile from "./components/UpdateProfile";
import Jobdetails from "./components/Jobdetails";
import Companies from "./components/Admin/Companies";
import ResisterCompany from "./components/Admin/ResisterCompany";
import SetupCompany from "./components/Admin/SetupCompany";
function App() {

  return (
   <>
 
     <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path="/description/:id" element={<JobsPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/profile/update" element={<UpdateProfile/>}/>
        <Route path="jobs/description/:id" element={<Jobdetails/>}/>
        {/* admin */}
        <Route path="/admin/companies" element={<Companies/>}/>
        <Route path="/company/create" element={<ResisterCompany/>}/>
        <Route path="/company/setup" element={<SetupCompany/>}/>

      </Routes>
     </Router>
     <Toaster/>
   </>
  )
}

export default App