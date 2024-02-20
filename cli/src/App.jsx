import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./Components/Navbar.jsx";
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/Login/Signup.jsx";
import Home from "./Components/Home/Home.jsx";
import Business from "./Components/Business/Business.jsx";
import New from "./Components/New/New.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Admin from "./Components/Admin/Admin.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Editprofile from "./Components/Profile/Editprofile.jsx"
import ViewBusiness from "./Components/Business/ViewBusiness/viewBusiness.jsx";
import { AuthPro, useAuth } from "./Components/ProAuth/AuthPro.jsx";
import { useEffect } from "react";
import ErrorBoundary from "./Components/ErrorBodyComp/EBComp.jsx";
import ProfileBusiness from "./Components/Profile/ProfileBusiness.jsx"
import EditUserBusiness from "./Components/Profile/EditUserBusiness.jsx";
import About from "./Components/About/About.jsx"
import Blog from "./Components/Blogs/Blog.jsx"
import Blogcontent from "./Components/Blogs/Blogcontent.jsx"
import Contactus from "./Components/Contacts/Contactus.jsx"
function App() {
  return (
    <>
      
        <BrowserRouter>
          <AuthPro>
            <NavBar />
            <ErrorBoundary>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/edituser" element={<Editprofile/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/new" element={<New />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/mybusiness" element={<ProfileBusiness/>}/>
              <Route path="/businesses" element={<Business />} />
              <Route path="/business/:id" element={<ViewBusiness />} />
              <Route path="/business/edit" element={<EditUserBusiness/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/blogcontent" element={<Blogcontent/>}/>
              <Route path="/contactus" element={<Contactus/>}/>
            </Routes>
            <Footer />
            </ErrorBoundary>
          </AuthPro>
        </BrowserRouter>
      
    </>
  );
}

export default App;
