import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar.jsx";
import Login from "./Components/Login/Login.jsx";
import Signup from "./Components/Login/Signup.jsx";
import Home from "./Components/Home/Home.jsx";
import Business from "./Components/Business/Business.jsx";
import New from "./Components/New/New.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Admin  from "./Components/Admin/Admin.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/businesses" element={<Business />} />
          <Route path="/new" element={<New />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
