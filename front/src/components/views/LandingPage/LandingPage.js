import React, { useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

function LandingPage(props) {
  useEffect(() => {
    axios.get("/api/hello").then((res) => console.log(res));
  });

  const onClickHandler = () => {
    axios
      .get("api/users/logout")
      .then((res) => {
        if (!res.data.success) {
          return alert("Failed logout");
        }
        props.history.push("/login");
      })
      .catch((err) => alert("logout err", err));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      LandingPage
      <button onClick={onClickHandler}>Logout</button>
    </div>
  );
}

export default withRouter(LandingPage);
