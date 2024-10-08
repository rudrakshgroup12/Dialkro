import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/Login/Signup.jsx";
import Home from "./Components/Home/Home.jsx";
import Business from "./Components/Business/Business.jsx";
// import New from "./Components/New/New.jsx";
import Admin from "./Components/Admin/Admin.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Editprofile from "./Components/Profile/Editprofile.jsx";

import ProfileBusiness from "./Components/Profile/ProfileBusiness.jsx";
import EditUserBusiness from "./Components/Profile/EditUserBusiness.jsx";

import Blog from "./Components/Blogs/Blog.jsx";
import Blogcontent from "./Components/Blogs/Blogcontent.jsx";
import Blogcontent2 from "./Components/Blogs/Blogcontent2.jsx";
import Blogcontent3 from "./Components/Blogs/Blogcontent3.jsx";
import Blogcontent4 from "./Components/Blogs/Blogcontent4.jsx";
import Blogcontent5 from "./Components/Blogs/Blogcontent5.jsx";
import Blogcontent6 from "./Components/Blogs/Blogcontent6.jsx";
import Service from "./Components/service/Service.jsx";

import Contactus from "./Components/Contacts/Contactus.jsx";
import Portfolio from "./Components/portfolio/Portfolio.jsx";
import About from "./Components/About/About.jsx";
import Team from "./Components/team/Team.jsx";
import ForgotPassword from "./Components/Login/ForgotPassword.jsx";
import OtherBusiness from "./Components/otherbusiness/OtherBusiness.jsx";
import Advertise from "./Components/advertise/Advertise.jsx";
import Postads from "./Components/postads/Postads.jsx";
import Featuredads from "./Components/featuredads/Featuredads.jsx";
import Paymentsuccess from "./Components/postads/Paymentsuccess.jsx";

import Paymentform1 from "./Components/postads/Paymentform1.jsx";
import Paymentform2 from "./Components/postads/Paymentform2.jsx";
import Paymentform3 from "./Components/postads/Paymentform3.jsx";
import Featuredads1 from "./Components/featuredads/Featuredads1.jsx";
import Featuredads2 from "./Components/featuredads/Featuredads2.jsx";

import Article1 from "./Components/Articles/Article1.jsx";
import Article2 from "./Components/Articles/Article2.jsx";
import Article3 from "./Components/Articles/Article3.jsx";
import Article4 from "./Components/Articles/Article4.jsx";
import Article5 from "./Components/Articles/Article5.jsx";
import Article6 from "./Components/Articles/Article6.jsx";
import Term from "./Components/privacy/Term.jsx";

// import BusinessBycat from "./Components/Category/BusinessBycat.jsx";
import Privacy from "./Components/privacy/Privacy.jsx";
import SearchBuisness from "./Components/Search/SearchBuisness.jsx";
import CategoryBuisness from "./Components/Business/Category/CategoryShow.jsx";
import CategorywiseBuisness from "./Components/Business/Category/CategorywiseBuisness.jsx";
import Pagenotfound from "./Components/Pagenotfound/Pagenotfound.jsx";
import Dashboard from "./Components/User/Dashboard.jsx";

import PrivateRoute from "./Components/Routes/Private.jsx";
import AdminRoute from "./Components/Routes/AdminRoute.jsx";
import AdminDashboard from "./Pages/Admin/AdminDashboard.jsx";

import CreateCategory from "./Pages/Admin/CreateCategory.jsx";
import Users from "./Pages/Admin/Users.jsx";
import CreateBuisness from "./Pages/Admin/CreateBuisness.jsx";
import SingleBusiness from "./Components/Business/ViewBusiness/SingleBusiness.jsx";
import ViewBusiness from "./Pages/Admin/ViewBusiness.jsx";
import UpdateBusiness from "./Pages/Admin/UpdateBusiness.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edituser" element={<Editprofile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/mybusiness" element={<ProfileBusiness />} />
        <Route path="/businesses" element={<Business />} />
        <Route path="/buisness/:slug" element={<SingleBusiness />} />
        <Route path="/buisness/edit/:slug" element={<EditUserBusiness />} />

        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/blogcontent" element={<Blogcontent />} />
        <Route path="/blogcontent2" element={<Blogcontent2 />} />
        <Route path="/blogcontent3" element={<Blogcontent3 />} />
        <Route path="/blogcontent4" element={<Blogcontent4 />} />
        <Route path="/blogcontent5" element={<Blogcontent5 />} />
        <Route path="/blogcontent6" element={<Blogcontent6 />} />

        <Route path="/postads" element={<Postads />} />
        <Route path="/service" element={<Service />} />
        <Route path="/Advertise" element={<Advertise />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/business/edit/:id" element={<EditUserBusiness />} />

        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/business" element={<OtherBusiness />} />
        <Route path="/feature" element={<Featuredads />} />
        <Route path="/featured1" element={<Featuredads1 />} />
        <Route path="/featured2" element={<Featuredads2 />} />

        <Route path="/article1" element={<Article1 />} />
        <Route path="/article2" element={<Article2 />} />
        <Route path="/article3" element={<Article3 />} />
        <Route path="/article4" element={<Article4 />} />
        <Route path="/article5" element={<Article5 />} />
        <Route path="/article6" element={<Article6 />} />

        <Route path="/paymentsuccess" element={<Paymentsuccess />} />
        <Route path="/paymentform1" element={<Paymentform1 />} />
        <Route path="/paymentform2" element={<Paymentform2 />} />
        <Route path="/paymentform3" element={<Paymentform3 />} />

        <Route path="/search" element={<SearchBuisness />} />
        <Route path="/categories" element={<CategoryBuisness />} />
        <Route path="/category/:slug" element={<CategorywiseBuisness />} />
        <Route path="*" element={<Pagenotfound />} />

        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
        </Route>

        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/add-category" element={<CreateCategory />} />
          <Route path="admin/allUser" element={<Users />} />
          <Route path="admin/createbuisness" element={<CreateBuisness />} />
          <Route path="admin/viewbusiness" element={<ViewBusiness />} />
          <Route
            path="admin/updatebusiness/:slug"
            element={<UpdateBusiness />}
          />
        </Route>

        <Route path="/term" element={<Term />} />
        <Route path="/policy" element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;
