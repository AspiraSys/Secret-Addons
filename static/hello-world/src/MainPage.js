import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/mutliple/Layout";
import { CommonProvider } from "./context/CommonContext";

const MainPage = () => {
  return (
    <>
      <CommonProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </CommonProvider>
    </>
  );
};

export default MainPage;
