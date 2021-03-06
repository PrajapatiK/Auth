import React, { useState } from "react";
// import { dummyDataItems } from "../data";
//import LoginForm from "./components/LoginForm";

const Home = () => {
  console.log("welcome home");
  let userInfo = [];
  userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let loggedinrole = localStorage.getItem("loggedinrole");
  console.log(loggedinrole);
  userInfo = userInfo.filter((user) => user.role !== "admin" )

const removeUser = (email) => {
  console.log('removed');
  let users = userInfo.filter(user => user.email !== email)
  console.log(users);
  localStorage.setItem("userInfo", JSON.stringify(users));
}

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
          <div className="p-2 flex-fill bd-highlight">
            <h6>Remove</h6>
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
            <div className="p-2 flex-fill bd-highlight"><a href="# " style={{ textDecoration: "none" }} onClick={() => removeUser(item.email)}>Remove</a></div>
          </div>
        ))}
      </>}
    </div>
  );
};

export default Home;
