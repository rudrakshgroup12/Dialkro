import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import Layout from "../Layout/Layout";

function ForgotPassword() {
  const [email, SetEmail] = useState("");
  const [newPassword, SetNewPassword] = useState("");
  const [answer, SetAnswer] = useState("");
  // const [visible, SetVisible] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/forgot-password  ", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/register");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout title={"Forgot Password Dialkro"}>
      <section className="relative py-32 lg:py-36 bg-white">
        <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-red-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden"></span>
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-red-600 blur-xl opacity-80"></span>
          </div>
          <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-red-600 to-black-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90"></span>
          <div
            className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 
            lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1
              className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl
            font-bold text-gray-900"
            >
              Forgot Passward{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600">
                {" "}
                Reset
              </span>
              Your User Password using Your Email
            </h1>

            <div className="mt-10  w-full flex max-w-md mx-auto lg:mx-0">
              <div className="flex sm:flex-row flex-col gap-5 w-full">
                <form onSubmit={handleSubmit} className="mt-8">
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          Full Name
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          value={answer}
                          onChange={(e) => SetAnswer(e.target.value)}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="fullname"
                          placeholder="Full name"
                          required
                        ></input>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          Email
                        </label>
                      </div>

                      <div className="mt-2">
                        <input
                          value={email}
                          onChange={(e) => SetEmail(e.target.value)}
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="Email"
                        ></input>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          New Password
                        </label>
                      </div>
                      <div className="mt-2">
                        <input
                          value={newPassword}
                          onChange={(e) => SetNewPassword(e.target.value)}
                          // type={visible ? "text" : "password"}
                          type="password"
                          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          id="newpassword"
                          required
                          placeholder="Password"
                          name="password"
                        >
                          {/* <div
                            className="eye"
                            onClick={() => SetVisible(!visible)}
                          >
                            {visible ? <FaRegEye /> : <FaRegEyeSlash />}
                          </div> */}
                        </input>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={() => navigate("/forgot")}
                        // type="button"
                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <img
              src="https://agencex-astro.vercel.app/images/image1.webp"
              alt="Hero image"
              width="2350"
              height="2359"
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ForgotPassword;
