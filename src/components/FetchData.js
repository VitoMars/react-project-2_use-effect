import React, { useState, useEffect } from "react";
import axios from "axios";
const url = "http://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const response = await axios.get(url);
    setUsers(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <ul className="users">
      {users.map((user) => {
        const { id, login, avatar_url: img, html_url } = user;
        return (
          <li key={id} className="shadow">
            <img src={img} alt={login} />
            <div>
              <h5>{login}</h5>
              <a href={html_url}>Profilo</a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default FetchData;
