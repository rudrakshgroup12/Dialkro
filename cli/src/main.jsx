import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { AuthPro } from "./Components/ProAuth/AuthPro.jsx";
import { SearchProvider } from "./Components/ProAuth/Search.jsx";
import { AuthProvider } from "./Components/context/auth.jsx";
// toastify
// import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <SearchProvider>
        {/* <ToastContainer /> */}
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </SearchProvider>
    </AuthProvider>
  </BrowserRouter>
);
