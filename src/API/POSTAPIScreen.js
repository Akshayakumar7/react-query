import { useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import ".././styles/apistyle.css";
import { useCreateUser } from "../APICall/getEmployeeData";

const POSTAPIScreen = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  const {
    mutate: createUser,
    data,
    isError,
    error,
    isSuccess,
  } = useCreateUser();

  const handleCreateUser = () => {
    const newUser = {
      name: name,
      username: userName,
      email: email,
    };
    createUser(newUser);
  };

  console.log("data", data);

  return (
    <>
      <div className="post-api-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userName">Username:</label>
          <input
            id="userName"
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="submit-button" onClick={handleCreateUser}>
          Create new user
        </button>
        <h4>Name: {data?.name}</h4>
        <h4>User name: {data?.username}</h4>
        <h4>Email: {data?.email}</h4>
      </div>
    </>
  );
};

export default POSTAPIScreen;
