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

  const [userData, setUserdata] = useState([]);
  const [uBusiness, setUBusiness] = useState([]);
  const [userprofile, setUserProfile] = useState("");

const API_PATH = 'https://api.dialkro.in';
  const fetchProfileData = async () => {
    try {
      if (userprofile) {
        const URI = `${API_PATH}/api/profile/${userprofile}`;
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
        const URI = `${API_PATH}/api/profile/business/${userprofile}`;
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
      e.preventDefault(); // Ye sb API jo v lgi hui hai ise page pe, ye sb ke aage wo API PATH wala url lagan aha iske ander
      const URI = `https://api.dialkro.in/api/login`;
      const response = await axios.post(URI, login);

      if (response.status === 400)
        return res.json({
          message: "No uSer Exist With That Email Or Password",
        });

      const token = response.data.token;
      const id = response.data.id;

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
  
      const data = await response.json();
      console.log('Login successful:', data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
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
    try {
      const URi = `${API_PATH}/api/logout`;
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
    debugger
    try {
      e.preventDefault();
      const uri = `${API_PATH}/api/business`;
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

  //Get Business From Database
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////
  //FindBusiness By Category
  //////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////

  const [businesses, setUsers] = useState([]);
  const [selectBusinessCategory, setSelectBusinessCategory] = useState("");
  const [selectBusinessLocation, setselectBusinessLocation] = useState("");

  // const [error, setError] = useState(null);
  useEffect(() => {
    (async () => {
      if (selectBusinessCategory) {
        const URI = `${API_PATH}/api/business?category=${selectBusinessCategory}`;
        try {
          const response = await axios.get(URI);
          setUsers(response.data.allBusiness);
          // console.error(response.data);
        } catch (err) {
          console.error("Error fetching data:", err);
          // Display error message to the user
        }
      } else if (selectBusinessLocation) {
        const URI = `${API_PATH}/api/business?city=${selectBusinessLocation}`;
        try {
          const response = await axios.get(URI);
          setUsers(response.data.allBusiness);
          // console.error(response.data);
        } catch (err) {
          console.error("Error fetching data:", err);
          // Display error message to the user
        }
      } else {
        const URI = `${API_PATH}/api/business`;
        try {
          const response = await axios.get(URI);
          setUsers(response.data.allBusiness);
          // console.error(response.data);
        } catch (err) {
          console.error("Error fetching data:", err);
          // Display error message to the user
        }
      }
    })();
  }, [selectBusinessCategory, selectBusinessLocation]);

  const [businessesCategory, setBusinessesCategory] = useState([]);
  // const [fetchBusinessByCategory, setFetchBusinessByCategory] = useState([]);
  useEffect(() => {
    (async () => {
      const URL = `${API_PATH}/api/category`;
      await axios
        .get(URL)
        .then((response) => {
          setBusinessesCategory(response.data.data);
          // console.log(response.data.business)
        })
        .catch((err) => {
          setError(`Error Fecthing Business Category ${err} `);
        });
    })();
  }, []);

  const [businessesLocation, setBusinessesLocation] = useState([]);
  // const [fetchBusinessByCategory, setFetchBusinessByCategory] = useState([]);
  useEffect(() => {
    (async () => {
      const URL = `${API_PATH}/api/city`;
      await axios
        .get(URL)
        .then((response) => {
          setBusinessesLocation(response.data.data);
        })
        .catch((err) => {
          setError(`Error Fecthing Business Location ${err} `);
        });
    })();
  }, []);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
      const URI = `${API_PATH}/api/profile/forgot`;
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
      const URI = `${API_PATH}/api/profile/reset/${resetCred.token}`;
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
    setSelectBusinessCategory,

    businessesLocation,
    selectBusinessLocation,
    setselectBusinessLocation,

    // businessCheck,
    // selectBusinessCheck,
    // setSelectBusinessCheck,
    // fetchBusinessByCategory,
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
