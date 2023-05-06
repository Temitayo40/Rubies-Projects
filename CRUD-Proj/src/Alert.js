import React, { useEffect } from "react";

function Alert({ msg, type, showAlert, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
}

export default Alert;
