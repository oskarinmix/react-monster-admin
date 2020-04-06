import { useState, useEffect } from "react";
import { apiJson } from "../data/api";
const useUser = () => {
  const [users, setUsers] = useState(apiJson.results);
  const [user, setUser] = useState(users[Math.floor(50 * Math.random())]);
  const getFullName = () => {
    return `${user.name.title} ${user.name.first} ${user.name.last}`;
  };
  const switchUser = () => {
    setUser(users[Math.floor(50 * Math.random())]);
  };
  
  return { user, users,setUser, setUsers, switchUser, getFullName };
};

export default useUser;
