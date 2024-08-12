import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import SpaceList from "../../response/SpaceList.json";
import { useSidebarContext } from "../../context/CommonContext";

const BreadCrum = ({ subLink2 }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { resetSidebar } = useSidebarContext();

  // Function to find the matching space data based on id
  const getCurrentSpaceName = () => {
    const space = SpaceList.find((space) => space.id === id);
    return space ? space.name : "";
  };

  const subLink = getCurrentSpaceName();

  // Handle navigation back to home and reset the sidebar
  const handleHomeClick = () => {
    resetSidebar();
    navigate("/");
  };

  // Inline styles
  const styles = {
    breadCont: {
      padding: "10px 5px",
      display: "flex",
      gap: "10px",
    },
    slash: {
      fontFamily: "Helvetica",
      fontWeight: "700",
      fontStyle: "normal",
    },
    link: {
      textDecoration: "none",
      color: "#000",
      fontSize: "18px",
      fontWeight: "600",
      textTransform: "capitalize",
      fontFamily: "Helvetica",
      fontWeight: "700",
      fontStyle: "normal",
    },
    linkHover: {
      color: "#706d6d",
    },
    lastBreadcrumb: {
      fontSize: "18px",
      fontWeight: "600",
      cursor: "text",
      color: "#c6c0c0",
      textTransform: "capitalize",
    },
  };

  return (
    <div style={styles.breadCont}>
      <Link to="/" style={styles.link} onClick={handleHomeClick}>
        Home
      </Link>

      {subLink && !subLink2 && (
        <>
          <span style={styles.slash}>/</span>
          <p style={styles.lastBreadcrumb}>{subLink}</p>
        </>
      )}

      {subLink && subLink2 && (
        <>
          <span style={styles.slash}>/</span>
          <Link to={`/spaces/${id}`} style={styles.link}>
            {subLink}
          </Link>
          <span style={styles.slash}>/</span>
          <p style={styles.lastBreadcrumb}>{subLink2}</p>
        </>
      )}
    </div>
  );
};

export default BreadCrum;
