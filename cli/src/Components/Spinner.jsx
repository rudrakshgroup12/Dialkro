import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Spinner({ path = "login" }) {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevValue) => --prevValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);

  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="Text-center">Loading....{count} second</h1>
        <button className="btn btn-primary " type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          />
          <span role="status">Loading...</span>
        </button>
      </div>
    </>
  );
}

export default Spinner;
