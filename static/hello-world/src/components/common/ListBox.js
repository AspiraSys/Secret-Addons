import React from "react";
import Icons from "./Icons";

const ListBox = ({ data, parent, onNavigate }) => {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate(data.id);
    }
  };

  // Inline styles
  const styles = {
    listInner: {
      border: "1px solid grey",
      display: "flex",
      flexDirection: "column",
      borderRadius: "10px",
      padding: "10px",
      gap: "10px",
      width: "30%",
      cursor: "pointer",
    },
    topLayer: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    icon: {
      fontSize: "50px",
      color: "#004af8cd",
    },
    rightContent: {
      display: "flex",
      flexDirection: "column",
      gap: "2px",
    },
    rightContentTitle: {
      fontSize: "18px",
      fontWeight: "700",
      textTransform: "capitalize",
      fontFamily: "Helvetica",
      fontStyle: "normal",
    },
    rightContentSubtitle: {
      fontSize: "15px",
      fontWeight: "600",
      textTransform: "capitalize",
      fontFamily: "Helvetica",
      fontStyle: "normal",
    },
    bottomLayer: {
      padding: "5px 10px",
    },
    bottomLayerText: {
      fontSize: "12px",
      fontWeight: "500",
    },
  };

  return (
    <div style={styles.listInner} onClick={handleClick}>
      <div style={styles.topLayer}>
        <div>
          <Icons.ArticleIcon style={styles.icon} />
        </div>
        <div style={styles.rightContent}>
          <h3 style={styles.rightContentTitle}>{data.title}</h3>
          <h6 style={styles.rightContentSubtitle}>{parent}</h6>
        </div>
      </div>
      <div style={styles.bottomLayer}>
        <h6 style={styles.bottomLayerText}>Visited Jun 19, 2024</h6>
      </div>
    </div>
  );
};

export default ListBox;
