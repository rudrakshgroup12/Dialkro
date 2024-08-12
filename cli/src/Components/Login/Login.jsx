import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth.jsx";
import axios from "axios";
import "./login.css";
import toast from "react-hot-toast";
import Layout from "../Layout/Layout.jsx";
function Login() {
  const [auth, setAuth] = useAuth();

  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const location = useLocation();

  const navigate = useNavigate();

  // const [visible, SetVisible] = useState(true);
  // const location = useLocation();
  // const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    // console.log(name, email, password, phone, address);
    // toast("Registered Successfully");
    try {
      e.preventDefault();
      const res = await axios.post(`/api/login`, {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res && res.data.message, {
          autoClose: 10000,
        });
        setAuth({ ...auth, user: res.data.user, token: res.data.token });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/profile");
        // alert("Login Successfully");
        toast.success("Login Successfully");
      } else {
        toast.error(res.data.message);
        // alert("Wrong Password");
      }
    } catch (error) {
      console.log(error);
      alert("Email is not registerd");
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title="Login Dialkro">
      <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat login-page">
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <h1 className="mb-2 text-2xl">Dialkro</h1>
              <span className="text-gray-300">Enter Login Details</span>
            </div>
            <form action="#" onSubmit={handleSubmit}>
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-red-400  px-6 py-2 text-center text-black placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  id="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-red-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  name="password"
                  placeholder="Passwords....."
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => SetPassword(e.target.value)}
                  type="password"
                  required
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-red-900  px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-red-600"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="text-center mt-5">
              <Link to="/forgot" className="hover:text-rose-700">
                Forgot Password
              </Link>

              {/* {Login ? (
                <p>
                  This is a protected component. Only visible to logged-in
                  users. profile you are alresdy Login{" "}
                  <Link to="/profile">
                    <button className="text-rose-800">Profile</button>
                  </Link>{" "}
                </p>
              ) : (
                <h1>Please login</h1>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
