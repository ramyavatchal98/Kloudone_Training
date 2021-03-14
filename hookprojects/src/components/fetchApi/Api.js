import React, { useState, useEffect } from "react";

const url =
  "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json";

const Main = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="title-div">
        <p>ID</p>
        <p>Firstname</p>
        <p>Lastname</p>
        <p>Loctaion</p>
        <p>Date</p>
        <p>Salary</p>
      </div>
      {users.map((user) => {
        const { id, firstName, lastName, location, date, salary } = user;
        return (
          <>
            <div className="userdata-div">
              <p>{id}</p>
              <p>{firstName}</p>
              <p>{lastName}</p>
              <p>{location}</p>
              <p>{date}</p>
              <p>{salary}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Main;
