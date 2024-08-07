import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./login.css";
import Layout from "../Layout/Layout";

function Signup() {
  const [username, SetUsername] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [phone, SetPhone] = useState("");
  const [answer, SetAnswer] = useState("");
  const [address, SetAddress] = useState("");
  const navigate = useNavigate();

  // const [register, setRegister] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });
  // const [error, setError] = useState(null);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;

  //   try {
  //     setRegister({
  //       ...register,

  //       [name]: value,
  //     });
  //   } catch (error) {
  //     setError(`Error is ${error.message}`);
  //     console.log(`Error is ${error.message}`);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const URI = "/api/register";
  //     await axios
  //       .post(URI, register)
  //       .then((response) => {
  //         alert(`Loggedin  SuccessFully `);
  //         navigate("/login");
  //       })
  //       .catch((error) => {
  //         alert(error.message);
  //       });
  //   } catch (error) {
  //     setError(`Error is ${error.message}`);
  //   }
  // };

  const handleSubmit = async (e) => {
    // console.log(name, email, password, phone, address);
    // toast("Registered Successfully");
    try {
      e.preventDefault();
      const res = await axios.post(
        "/api/register",
        {
          username,
          email,
          password,
          phone,
          address,
          answer,
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
        navigate("/login");
        alert("Register Successfully");
      } else {
        toast.error(res.data.message);
        alert(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      // alert("Something went wrong");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout title={"Register Dialkro"}>
      <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat login-page">
        <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
          <div className="text-white">
            <div className="mb-8 flex flex-col items-center">
              <h1 className="mb-2 text-2xl">Dialkro</h1>
              <span className="text-gray-300">Enter Sign Up Details</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-red-400  px-6 py-2 text-center text-black placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  value={username}
                  onChange={(e) => SetUsername(e.target.value)}
                  type="name"
                  placeholder="Username"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-red-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  value={answer}
                  onChange={(e) => SetAnswer(e.target.value)}
                  type="sports"
                  placeholder="Full Name"
                  id="sports"
                  required
                  name="sports"
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-red-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                  type="email"
                  placeholder="Enter Your Email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-red-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  value={password}
                  onChange={(e) => SetPassword(e.target.value)}
                  placeholder="Passwords....."
                  id="password"
                  name="password"
                  type="password"
                  required
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-red-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  value={phone}
                  onChange={(e) => SetPhone(e.target.value)}
                  type=""
                  placeholder="Phone"
                  id="phone"
                  name="phone"
                  required
                />
              </div>

              <div className="mb-4 text-lg">
                <input
                  className="rounded-3xl border-none bg-red-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                  value={address}
                  onChange={(e) => SetAddress(e.target.value)}
                  type="address"
                  placeholder="Address"
                  id="address"
                  name="address"
                  required
                />
              </div>
              <div className="mt-8 flex justify-center text-lg text-black">
                <button
                  type="submit"
                  className="rounded-3xl bg-red-900  px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-red-600"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Signup;
