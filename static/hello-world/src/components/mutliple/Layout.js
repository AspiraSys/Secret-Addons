import React from "react";
import SideBar from "./SideBar";
import PageRoute from "../../routes/PageRoute";

const Layout = () => {
  const styles = {
    pageCont: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
    },
    mainCont: {
      width: "100%",
      display: "flex",
      flex: 1,
      overflowY: "hidden",
    },
    sideCont: {
      width: "18%",
      display: "flex",
      flexDirection: "column",
      padding: "5px 10px",
      position: "relative",
    },
    subMainCont: {
      width: "82%",
      borderLeft: "1px solid grey",
      padding: "35px 30px",
    },
    "@media (maxWidth: 600px)": {
      mainCont: {
        marginTop: "56px",
      },
    },
  };

  return (
    <div style={styles.pageCont}>
      <div style={styles.mainCont}>
        <div style={styles.sideCont}>
          <SideBar />
        </div>
        <div style={styles.subMainCont}>
          <PageRoute />
        </div>
      </div>
    </div>
  );
};

export default Layout;
