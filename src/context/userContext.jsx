
import React, { createContext, useState, useContext } from "react";
import { UserData } from "../db";




const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [users] = useState(UserData);
  const [selectedUser, setSelectedUser] = useState();
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <UserContext.Provider
      value={{
        users,
        selectedUser,
        selectedTab,
        setSelectedUser,
        setSelectedTab,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Create custom hook for using this context
export default UserContext