import React, { createContext, useContext, useEffect, useState } from "react";
import { useRef } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const AuthContext = createContext();
export const AuthPro = ({ children }) => {
  const navi = useNavigate();
  const [businessData, setBusinessData] = useState({
    name: "",
    description: "",
    category: "",
    contact: {
      phone: "",
      email: "",
      website: "",
    },
    location: {
      address: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Fetch Business Listed By User

  const [userData, setUserdata] = useState([]);
  const [uBusiness, setUBusiness] = useState([]);
  const [userprofile, setUserProfile] = useState("");

  const fetchProfileData = async () => {
    try {
      if (userprofile) {
        const URI = `/api/profile/${userprofile}`;
        const response = await axios.get(URI);
        // alert(response.data);
        // console.log(response.data);
        setUserdata(response.data);
      }
    } catch (err) {
      setError(`Profile Error is ${err}`);
    }
  };

  const businessListedByUser = async () => {
    try {
      if (userprofile) {
        const URI = `/api/profile/business/${userprofile}`;
        const response = await axios.get(URI);
        setUBusiness(response.data.data);
        // console.log(response.data);
        // alert(response.data)
      }
    } catch (error) {
      setError(`Error is ${error}`);
      console.log(`Error is ${error}`);
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [islogin, setisLogin] = useState(() => {
    const storedToken = window.localStorage.getItem("token");
    return !!storedToken;
  });

  useEffect(() => {
    // Check for authentication when the component mounts
    const storedToken = window.localStorage.getItem("token");
    if (storedToken) {
      setisLogin(true);
      const storedId = window.localStorage.getItem("pussy"); // Chg here
      if (storedId) {
        // Chg here
        setUserProfile(storedId); // Chg here
      }
    }
  }, []);

  const loginHandleInputChange = (e) => {
    const { name, value } = e.target;

    try {
      setLogin({
        ...login,

        [name]: value,
      });
    } catch (error) {
      setError(`Error is ${error.message}`);
      console.log(`Error is ${error.message}`);
    }
  };

  const loginhandleSubmit = async (e) => {
    try {
      e.preventDefault();
      const URI = "/api/login";
      const response = await axios.post(URI, login);
      const token = response.data.token;
      const id = response.data.id;
      // console.log();
      // response.data.user.id;

      // const uri2 = "/api/profile";
      // const res2 = await axios.get(uri2);
      // console.log(res2);

      if (id) {
        setUserProfile(id);
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("pussy", id);
        setisLogin(token);
        navi("/profile");
      } else {
        // Handle the case where the user ID is not available
        console.error("User ID is null or undefined");
      }
    } catch (error) {
      setError(`Error is ${error}`);
      console.log(`Error is ${error.message}`);
    }
  };

  useEffect(() => {
    if (islogin) {
      fetchProfileData();
      businessListedByUser();
    }
  }, [userprofile]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const logOutNow = async () => {
    // Add logic to handle adding the new business (e.g., API call, state update, etc.)
    // console.log("Adding new business:", newBusiness);
    // Reset the form after adding a business
    // setNewBusiness({ name: "", description: "" });
    try {
      const URi = "/api/logout";
      await axios
        .get(URi)
        .then((response) => {
          // const tak = Cookies.remove("token", response.data.token);
          window.localStorage.removeItem("token");
          window.localStorage.removeItem("pussy");
          setisLogin(false);
          alert(
            `Loggedout  SuccessFully ${response.status} ${response.data.message} `
          );
          navi("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    } catch (error) {
      setError(`Error is ${error.message}`);
    }
  };

  const addBusinesshandleChange = (e) => {
    const { name, value } = e.target;
    setBusinessData({
      ...businessData,
      [name]: value,
    });
  };
  const addBusinesshandleSubmit = async (e) => {
    try {
      e.preventDefault();
      const uri = "/api/business";
      await axios
        .post(uri, businessData)
        .then((response) => {
          setLoading(`Loading ....`);
          alert(`Business Added SuccessFully`);
          navi("/businesses");
        })
        .catch((err) => {
          alert(`error is ${err}`);
        });
      setLoading(null);
    } catch (error) {
      setError(`Error is ${error}`);
    }
  };
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // const intervalRef = useRef(null);
  // useEffect(() => {
  //   intervalRef.current = setInterval(10); // Refresh every 5 seconds

  //   return () => clearInterval(intervalRef.current); // Clear interval on unmount
  // }, []); // Empty dependency array to run useEffect only once

  // ... Render data and components based on state

  // useEffect(() => {
  //   addBusinesshandleSubmit.then(() => {
  //     intervalRef.current = setInterval(() => {
  //       fetch();
  //     }, 5000);
  //   });
  //   return () => clearInterval(intervalRef.current);
  // }, [addBusinesshandleSubmit]);

  //Get Business From Database
  const [businesses, setUsers] = useState([]);

  // const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      const URL = "/api/business";
      // Axios will automatically reject the promise on HTTP error (status >= 400)
      // We can catch the error using .catch method
      await axios
        .get(URL)
        .then((response) => {
          // if (response.status === 401) {
          //   // Handle unauthorized access here
          //   // For example, redirect to login page or show an error message
          //   setError("Unauthorized access. Please login.");
          //   return;
          // }
          setUsers(response.data.business);
          // console.log(response.data);
        })
        .catch((err) => {
          // console.error("Error fetching users:", err);
          setError(`Log in Please `);
        });
    })();
  }, []);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   islogin;
  // }, [islogin]);
  //   const [singleBusi, setSingleBusi] = useState([]);
  //   const { id } = useParams();
  //   const getSingle = async () => {
  //     const URL = `/api/business/${id}`;
  //     try {
  //       const response = await axios.get(URL);
  //       setSingleBusi(response.data);
  //     } catch (error) {
  //       setError(`${error}`);
  //     }
  //   };

  //   const [businessesbyId, setbusinessesbyId] = useState([]);
  //   const { id } = useParams();
  //   //   console.log(`serial number is ${id}`)

  //   useEffect(() => {
  //     const fetchData = async () => {
  //

  //     fetchData();
  //   }, [id]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //FORGOT PASSWORD
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  const [emailid, setEmailid] = useState({ email: "" });
  //ForgetHandle
  const forgotHandleInputChange = (e) => {
    const { name, value } = e.target;

    try {
      setEmailid({
        ...emailid,

        [name]: value,
      });
    } catch (error) {
      setError(`Error is ${error.message}`);
      console.log(`Error is ${error.message}`);
    }
  };

  const forgothandleSubmit = async (e) => {
    try {
      e.preventDefault();
      const URI = "/api/profile/forgot";
      const response = await axios.post(URI, emailid);
      // setEmailid(response.data);
      alert(`Reset Password Request Has Been Sent TO you Email Id`);
      navi("/reset");
    } catch (error) {
      setError(`Error is ${error}`);
      console.log(`Error is ${error.message}`);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //CHANGE PASSWORD
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  const [resetCred, setresetCred] = useState({ email: "", token: "" });
  //ForgetHandle
  const changePasswordHandleInputChange = (e) => {
    const { name, value } = e.target;

    try {
      setresetCred({
        ...resetCred,

        [name]: value,
      });
    } catch (error) {
      setError(`Error is ${error.message}`);
      console.log(`Error is ${error.message}`);
    }
  };

  const changePasswordhandleSubmit = async (e) => {
    try {
      e.preventDefault();
      const URI = `/api/profile/reset/${resetCred.token}`;
      const response = await axios.post(URI, resetCred);
      // setEmailid(response.data);
      alert(response.data.message);
      // alert(`Password Changed SuccessFully`);
      navi("/login");
    } catch (error) {
      setError(`Error is ${error.message}`);
      console.log(`Error is ${error.message}`);
    }
  };

  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //FindBusiness By Category
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  const [businessesCategory, setBusinessesCategory] = useState([]);
  const [selectBusinessCategory, setSelectBusinessCategory] = useState("");
  const [fetchBusinessByCategory, setFetchBusinessByCategory] = useState([]);
  useEffect(() => {
    (async () => {
      const URL = "/api/business";
      await axios
        .get(URL)
        .then((response) => {
          const uniqueCategory = response.data.business.reduce((acc, curr) => {
            if (!acc.includes(curr.category)) {
              acc.push(curr.category);
            }
            return acc;
          }, []);
          console.log(uniqueCategory)
          setBusinessesCategory(uniqueCategory);
          // console.log(response.data.business)
        })
        .catch((err) => {
          setError(`Error Fecthing BUsiness Category ${err.message} `);
        });
    })();
  }, []);

  const selectBusinessCategoryHandleInputChange = (e) => {
    const { name, value } = e.target;
    try {
      setSelectBusinessCategory({
        ...selectBusinessCategory,
        [name]: value,
      });
    } catch (error) {
      setError(`Error is inputchange handle ${error.message}`);
      console.log(`Error is ${error.message}`);
    }
  };

  useEffect(() => {
    (async () => {
      // Added parentheses to invoke the async function immediately
      if (selectBusinessCategory) {
        // console.log(selectBusinessCategory)
        const URI = `/api/business?category=${selectBusinessCategory}`;
        try {
          const response = await axios.get(URI);

          setFetchBusinessByCategory(response.data.category[0]);
        } catch (error) {
          setError(`Error is busbycat ${error.message}`);
          console.log(`Error is ${error.message}`);
        }
      } else {
        navi("/businesses");
      }
    })();
  }, [selectBusinessCategory]);

  const authContextVal = {
    login,
    loginhandleSubmit,
    loginHandleInputChange,

    islogin,
    logOutNow,
    error,

    businessData,
    addBusinesshandleChange,
    addBusinesshandleSubmit,
    loading,
    businesses,

    uBusiness,
    userData,

    isDarkMode,
    setIsDarkMode,

    emailid,
    forgothandleSubmit,
    forgotHandleInputChange,

    resetCred,
    changePasswordHandleInputChange,
    changePasswordhandleSubmit,

    businessesCategory,
    selectBusinessCategory,
    selectBusinessCategoryHandleInputChange,
    fetchBusinessByCategory,
  };
  return (
    <AuthContext.Provider value={authContextVal}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
