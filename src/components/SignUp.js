import React from "react";
import { useState, useEffect } from "react";

const SignUp = (props) => {
  const initialValue = {
    username: "",
    email: "",
    password: "",
    cpassword: "",
    role: "user",
  };
  const [formValues, setFormValues] = useState(initialValue);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    //avoid the page rerendering
    e.preventDefault();
    if (formValues.password === formValues.cpassword) {
      // formValues.email === "admin@gmail.com"
      //   ? setFormValues({ ...formValues, role: "admin" })
      //   : setFormValues({ ...formValues, role: "user" });
      console.log(formValues);
      let dataItems = [];
      let dataDummyItems = JSON.parse(localStorage.getItem("userInfo"));
      console.log(dataDummyItems);
      dataDummyItems
        ? dataDummyItems.push(formValues)
        : dataItems.push(formValues);

      localStorage.setItem(
        "userInfo",
        dataItems.length > 0
          ? JSON.stringify(dataItems)
          : JSON.stringify(dataDummyItems)
      );
      console.log(dataItems, dataDummyItems);
      setIsSubmit(true);
      setFormValues(initialValue);
    } else {
      alert("password and confirm pwd does not matches");
    }
  };

  useEffect(() => { }, [isSubmit]);

  console.log("welcome signup", formValues);
  return (
    <div className="container">
      <br />
      <br />
      <br />
      <br />
      <h3>welcome to Signup page</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="name" className="form-label" required>
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="email" className="form-label" required>
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label" required>
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label" required>
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            value={formValues.cpassword}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label" required>
            Role
          
          <select name="role" value={formValues.role} onChange={handleChange}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
          </label>
        </div>
        {/* <input type="text" className="Phone Number" pattern="[7-9]{1}[0-9]{9}" 
       title="Phone number with 7-9 and remaing 9 digit with 0-9"></input> */}
        {/* <button type="button" class="btn btn-outline-success">Success</button> */}
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="customFile" />
          <label className="custom-file-label">{/* Choose file */}</label>
        </div>

        <button type="submit" className="btn btn-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
