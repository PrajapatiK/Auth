import React, { useState } from "react";
// import { dummyDataItems } from "../data";
//import LoginForm from "./components/LoginForm";

const Home = () => {
  console.log("welcome home");
  let userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let loggedinrole = localStorage.getItem("loggedinrole");
  console.log(loggedinrole);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h3>welcome to home page</h3>
      {loggedinrole === "admin" && <>
        <div
          class="d-flex bd-highlight justify-content-start"
          style={{ color: "black" }}
        >

          <div className="p-2 flex-fill bd-highlight">
            <h6>userName</h6>
          </div>
          <div className="p-2 flex-fill bd-highlight">
            <h6>userEmail</h6>
          </div>
          <div className="p-2 flex-fill bd-highlight">
            <h6>userPwd</h6>
          </div>
          <div className="p-2 flex-fill bd-highlight">
            <h6>userId</h6>
          </div>
        </div>

        {userInfo.map((item) => (
          <div
            class="d-flex bd-highlight justify-content-start"
            style={{ color: "red" }}
          >
            <div className="p-2 flex-fill bd-highlight">{item.username}</div>
            <div className="p-2 flex-fill bd-highlight">{item.email}</div>
            <div className="p-2 flex-fill bd-highlight">{item.password}</div>
            <div className="p-2 flex-fill bd-highlight">{item.id}</div>
          </div>
        ))}
      </>}
    </div>
  );
};

export default Home;
