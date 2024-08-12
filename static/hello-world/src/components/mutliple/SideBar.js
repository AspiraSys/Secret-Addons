import React, { useEffect, useState } from "react";
import Icons from "../common/Icons";
import Images from "../common/Images";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import PageList from "../../response/PageList.json";
import SpaceList from "../../response/SpaceList.json";
import ScanResult from "../../response/ScanResult.json";
import { useSidebarContext } from "../../context/CommonContext";

const SideBar = () => {
  const styles = {
    sideCont: {
      width: "280px",
      padding: "10px 0px",
    },
    sideHead: {
      width: "280px",
      top: "0",
      padding: "10px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      borderBottom: "1px solid grey",
    },
    box: {
      width: "35px",
      height: "35px",
      backgroundColor: "#F9E2AF",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    boxH5: {
      fontSize: "10px",
    },
    profileName: {
      paddingLeft: "10px",
      fontSize: "1.2em",
      margin: "0",
      textTransform: "capitalize",
    },
    mainMenu: {
      width: "250px",
      padding: "10px 0px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    navBox: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "5px 20px",
      borderRadius: "5px",
      position: "relative",
      cursor: "pointer",
      color: "#000",
      textDecoration: "none",
    },
    activeNavBox: {
      backgroundColor: "#004af865",
      borderRadius: "5px",
      position: "relative",
      color: "#fff",
    },
    darkActive: {
      width: "5px",
      height: "25px",
      backgroundColor: "blue",
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
      position: "absolute",
      left: "0",
      visibility: "hidden",
    },
    navIcons: {
      fontSize: "20px",
    },
    navTitle: {
      fontSize: "16px",
      paddingLeft: "10px",
      paddingBottom: "3px",
    },
    navBoxHover: {
      backgroundColor: "#004af865",
      borderRadius: "5px",
      position: "relative",
      color: "#fff",
    },
    navBoxHoverDarkActive: {
      visibility: "visible",
    },
    spaceCont: {
      width: "280px",
      padding: "10px 0px",
    },
    fixedSpace: {
      width: "100%",
      padding: "5px 20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    fixedSpaceH6: {
      fontSize: "16px",
    },
    addIcon: {
      cursor: "pointer",
    },
    spaceMenu: {
      width: "100%",
      padding: "15px 20px",
      height: "30vh",
      overflowY: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "18px",
    },
    spaceSubDiv: {
      display: "flex",
      alignItems: "center",
      cursor: "pointer",
    },
    imgBox: {
      width: "30px",
      height: "30px",
    },
    imgBoxImg: {
      width: "100%",
      height: "100%",
      borderRadius: "5px",
    },
    spaceName: {
      fontSize: "16px",
      fontWeight: "bold",
      paddingLeft: "10px",
      textTransform: "capitalize",
    },
    buttonBox: {
      width: "300px",
    },
    btnDivision: {
      width: "100%",
      marginTop: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    sideBtn: {
      width: "65%",
      padding: "10px 0px",
      backgroundColor: "#F5F5F5",
      borderRadius: "5px",
      cursor: "pointer",
      border: "none",
      outline: "none",
      fontSize: "16px",
      letterSpacing: "1px",
      fontWeight: "600",
    },
  };

  const sideBarActions = [
    {
      id: 1,
      name: "Overview",
      icon: <Icons.HomeIcon style={styles.navIcons} />,
      path: "/",
    },
    {
      id: 2,
      name: "Recent",
      icon: <Icons.RecentIcon style={styles.navIcons} />,
      path: "/recent",
    },
    // Uncomment other actions if needed
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const { isSidebarReset, acknowledgeSidebarReset } = useSidebarContext();

  const [sideNavs, setSideNavs] = useState([]);
  const [originalSpaces, setOriginalSpaces] = useState([]);
  const [onSpace, setOnSpace] = useState(true);

  const [profileNameShow, setProfileNameShow] = useState(false);
  const [spaceTitleName, setSpaceTitleName] = useState("Atlassian Poc");

  useEffect(() => {
    if (SpaceList) {
      const formattedSpaces = SpaceList.map((page) => ({
        id: page.id,
        name: page.name,
        image: page.icon,
      }));
      setSideNavs(formattedSpaces);
      setOriginalSpaces(formattedSpaces);
    }
  }, []);

  const handleNavigate = (items) => {
    setProfileNameShow(true);
    setSpaceTitleName(items.name);

    const filteredPages = PageList.filter((page) => page.spaceId === items.id);

    setSideNavs(
      filteredPages.map((page) => ({
        id: page.id,
        name: page.title,
        image: page.picture,
      }))
    );

    setOnSpace(false);
    navigate(`/spaces/${items.id}`);
  };

  useEffect(() => {
    if (isSidebarReset) {
      handleNormal();
      acknowledgeSidebarReset();
    }
  }, [isSidebarReset, acknowledgeSidebarReset]);

  useEffect(() => {
    if (location.pathname === "/") {
      handleNormal();
    }
  }, [location.pathname]);

  const handleNormal = () => {
    setProfileNameShow(false);
    setSpaceTitleName("Atlassian Poc");
    setSideNavs(originalSpaces);
    setOnSpace(true);
  };

  const handlePage = (item) => {
    const page = ScanResult.pageList.find((page) => page.id === item.id);

    if (page) {
      const { spaceId, id: pageId } = page;
      navigate(`/spaces/${spaceId}/${pageId}`);
    } else {
      console.error("Page not found in ScanResult.");
    }
  };

  return (
    <>
      <div style={styles.sideCont}>
        <div style={styles.sideHead}>
          {profileNameShow ? (
            <div style={styles.imgBox}>
              <img src={Images.space_one} alt={""} style={styles.imgBoxImg} />
            </div>
          ) : (
            <div style={styles.box}>
              <h5 style={styles.boxH5}>AT</h5>
            </div>
          )}
          <div>
            <h2 style={styles.profileName}>{spaceTitleName}</h2>
          </div>
        </div>
        <div style={styles.mainMenu}>
          {sideBarActions.map((item) => (
            <NavLink
              to={item.path}
              key={item.id}
              style={({ isActive }) =>
                isActive
                  ? { ...styles.navBox, ...styles.activeNavBox }
                  : styles.navBox
              }
              onClick={handleNormal}>
              <div style={styles.darkActive}></div>
              <div style={styles.navIcons}>{item.icon}</div>
              <h5 style={styles.navTitle}>{item.name}</h5>
            </NavLink>
          ))}
        </div>
        <div style={styles.spaceCont}>
          <div style={styles.fixedSpace}>
            <h6 style={styles.fixedSpaceH6}>Spaces</h6>
            <Icons.AddIcon style={styles.addIcon} />
          </div>
          <div style={styles.spaceMenu}>
            {sideNavs.map((item) => (
              <div
                style={styles.spaceSubDiv}
                key={item.id}
                onClick={
                  onSpace ? () => handleNavigate(item) : () => handlePage(item)
                }>
                <div style={styles.imgBox}>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={styles.imgBoxImg}
                  />
                </div>
                <div>
                  <p style={styles.spaceName}>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;

