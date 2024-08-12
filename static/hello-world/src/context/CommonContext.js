// SidebarContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

// Create a context to share the sidebar reset functionality
const CommonContext = createContext();

export const CommonProvider = ({ children }) => {
  const [isSidebarReset, setIsSidebarReset] = useState(false);

  // Function to reset the sidebar
  const resetSidebar = () => {
    setIsSidebarReset(true);
  };

  // Function to acknowledge the reset
  const acknowledgeSidebarReset = () => {
    setIsSidebarReset(false);
  };

   useEffect(() => {
     resetSidebar();
   }, []);

  return (
    <CommonContext.Provider
      value={{ isSidebarReset, resetSidebar, acknowledgeSidebarReset }}>
      {children}
    </CommonContext.Provider>
  );
};

// Custom hook to use the SidebarContext
export const useSidebarContext = () => {
  return useContext(CommonContext);
};
