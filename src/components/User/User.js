import React from "react";
import "./User.css";

const User = (props) => {
  const { img, first_name, last_name, email, gender, salary, ip_address } =
    props.user;

  const addClickHandler = props.addClickHandler;

  return (
    <div className="user">
      <div className="userimg">
        <img src={img} alt="" />
      </div>
      <div className="userinfo">
        <h2>Name : {first_name + " " + last_name}</h2>
        <p>Email : {email}</p>
        <p>Gender : {gender}</p>
        <p>Salary : ${salary}</p>
        <p>Ip Address : {ip_address}</p>
      </div>
      <div>
        <button onClick={() => addClickHandler(props.user)}>
          Add As A Friend
        </button>
      </div>
    </div>
  );
};

export default User;
