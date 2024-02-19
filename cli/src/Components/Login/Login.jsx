import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../ProAuth/AuthPro.jsx";
import axios from "axios";
import jcoks from "js-cookie";

function Login() {
  const { login, loginhandleSubmit, loginHandleInputChange, islogin, error } =
    useAuth();

  //  const navigate = useNavigate();
  //  const [login, setLogin] = useState({
  //    email: "",
  //    password: "",
  //  });
  //  const [error, setError] = useState(null);
  //  const [islogin, setisLogin] = useState(false);

  //  const handleInputChange = (e) => {
  //    const { name, value } = e.target;

  //    try {
  //      setLogin({
  //        ...login,

  //        [name]: value,
  //      });
  //    } catch (error) {
  //      setError(`Error is ${error.message}`);
  //      console.log(`Error is ${error.message}`);
  //    }
  //  };

  //  const handleSubmit = async (e) => {
  //    try {
  //      e.preventDefault();
  //      const URI = "/api/login";
  //      await axios
  //        .post(URI, login)
  //        .then((response) => {
  //          const tok = jcoks.set("token", response.data.token);
  //          console.log(tok)
  //          setisLogin(true);
  //          alert(`Loggedin  SuccessFully `);
  //           navigate("/profile");
  //        })
  //        .catch((error) => {
  //          alert(error.message);
  //        });
  //    } catch (error) {
  //      setError(`Error is ${error.message}`);
  //    }
  //  };
  //  useEffect(() => {
  //    const token = jcoks.get("token");
  //    if (token) {
  //      alert(token);
  //    }
  //  }, [islogin]);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-whit via-transparent to-whit">
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
              {/* <Link to={`/profile/}`}>  */}
              <button
                type="submit"
                className="bg-rose-700 text-white px-4 py-2 rounded font-semibold mt-4 hover:bg-neutral-900"
              >
                Login
              </button>
              {/* </Link>  */}
            </div>
          </form>
          {islogin ? (
            <p>
              This is a protected component. Only visible to logged-in users.
              profile you are alresdy Login{" "}
              <Link to="/profile">
                <button className="text-rose-800">Profile</button>
              </Link>{" "}
            </p>
          ) : (
            <h1>Please login</h1>
          )}
        </div>
      </div>
    </>
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
