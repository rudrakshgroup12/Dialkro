import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth.jsx";
import axios from "axios";
import "./login.css";
import toast from "react-hot-toast";
import Layout from "../Layout/Layout.jsx";
function Login() {
  const [auth, setAuth] = useAuth();
  // const { login, loginhandleSubmit, loginHandleInputChange, islogin, error } =
  //   useAuth();

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
      const res = await axios.post(
        `/api/login`,
        {
          email,
          password,
        }
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        // }
      );
      if (res && res.data.success) {
        toast.success(res && res.data.message, {
          autoClose: 10000,
        });
        setAuth({ ...auth, user: res.data.user, token: res.data.token });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/profile");
        alert("Login Successfully");
      } else {
        toast.error(res.data.message);
        alert("Wrong Password");
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

//  {/* <div className="flex justify-center p-20 bg-transparent ">
//    <div className="flex flex-col justify-center">
//      <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
//        <div className="overflow-hidden w-full m-4 flex justify-center  rounded-lg shadow-xl">
//          <div className="flex flex-col md:flex-row items-center shadow-md h-full  ">
//            <div className="  md:w-1/2 overflow-hidden ">
//              <div className="flex flex-col items-center justify-center text-stone-400">
//                <h1 className="font-semibold text-3xl text-rose-800">
//                  Dialkro
//                </h1>
//                <div className="flex flex-col">
//                  <div className="m-2">EMAIL</div>
//                  <input className="border-b m-2  bg-gray-50 focus:outline-none" />

//                  <div className="m-2">PASSWORD</div>
//                  <input
//                    className="border-b m-2  bg-gray-50  focus:outline-none"
//                    type="password"
//                  />
//                  <div className="flex m-2">
//                    <input
//                      className="border-b  border-stone-400 "
//                      type="checkbox"
//                    />
//                    <div className="ml-1">Remember Me</div>
//                  </div>
//                  <div className="flex m-2">
//                    <button className="bg-gradient-to-r from-rose-600 to-red-500 px-6 py-1 rounded-2xl text-white font-medium">
//                      LOGIN
//                    </button>
//                    <button className="text-transparent  bg-clip-text bg-gradient-to-l from-rose-700 to-rose-500 font-bold ml-2 border-2 rounded-2xl px-6 border-rose-400">
//                      CREATE ACCOUNT
//                    </button>
//                  </div>
//                  <div className="m-2">Forgotten your login details?</div>
//                  <div className="font-medium ml-2">Get Help Signing In</div>
//                </div>
//              </div>
//            </div>
//            <div className=" md:w-1/2 overflow-hidden ">
//              <img
//                src="https:source.unsplash.com/700x600/?computer,login"
//                alt=""
//                className=""
//              />
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div>
//  <script
//    type="module"
//    src="https:unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
//  ></script>
//  <script
//    nomodule
//    src="https:unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
//  ></script>
//  \*}

{
  /* <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-whit via-transparent to-whit">
{error && (
  <h1 className="text-red-500 mb-8 text-4xl font-bold">{error}</h1>
)}
<div className="max-w-md w-full bg-white p-8 rounded-md shadow-md">
  <div>
    <h2 className="text-3xl font-extrabold text-center text-rose-700 mb-4">
      Log in to your account
    </h2>
  </div>
  <form className="mt-8 space-y-6" onSubmit={loginhandleSubmit}>
    <div className="rounded-md shadow-sm -space-y-px ">
      <div>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="appearance-none w-full py-2 px-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-800"
          placeholder="Email address"
          value={login.email}
          onChange={loginHandleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="appearance-none w-full py-2 px-3 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-800"
          placeholder="Passwor0d"
          value={login.password}
          onChange={loginHandleInputChange}
        />
      </div>
    </div>

    <div>
      {/* <Link to={`/profile/}`}>  */
}
//       <button
//         type="submit"
//         className="bg-rose-700 text-white px-4 py-2 rounded font-semibold mt-4 hover:bg-neutral-900"
//       >
//         Login
//       </button>
//       {/* </Link>  */}
//     </div>
//   </form>
//   <Link to="/forgot" className="hover:text-rose-700">
//     Forgot Password
//   </Link>

//   {islogin ? (
//     <p>
//       This is a protected component. Only visible to logged-in users.
//       profile you are alresdy Login{" "}
//       <Link to="/profile">
//         <button className="text-rose-800">Profile</button>
//       </Link>{" "}
//     </p>
//   ) : (
//     <h1>Please login</h1>
//   )}
// </div>
// </div>
// <div>{/* <ForgotPassword /> */}</div> */}
