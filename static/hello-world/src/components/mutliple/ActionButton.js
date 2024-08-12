import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Icons from "../../components/common/Icons";

const ActionButton = ({
  handleSpaceScan,
  handleDataScan,
  handleComplianceScan,
}) => {
  // Internal styles
  const styles = {
    iconsSapce: {
      fontSize: "30px",
      cursor: "pointer",
    },
    iconContImg: {
      width: "28px",
      height: "28px",
      objectFit: "cover",
      borderRadius: "5%",
      cursor: "pointer",
    },
    btnShareButton: {
      padding: "10px 30px",
      backgroundColor: "#0348f6d1",
      border: "none",
      outline: "none",
      borderRadius: "5px",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      letterSpacing: "1px",
    },
    btnStartButton: {
      padding: "10px 46px",
      backgroundColor: "#F5F5F5",
      border: "none",
      outline: "none",
      borderRadius: "5px",
      color: "#000",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
      letterSpacing: "1px",
    },
  };

  return (
    <>
      <Tooltip title="Space Scanner" arrow>
        <Icons.SpaceScanner
          style={styles.iconsSapce}
          onClick={handleSpaceScan}
        />
      </Tooltip>
      <Tooltip title="Data Scanner" arrow>
        <Icons.DataBaseScanner
          style={styles.iconsSapce}
          onClick={handleDataScan}
        />
      </Tooltip>
      <Tooltip title="Compliance Scanner" arrow>
        <Icons.ComplianceScanner
          style={styles.iconsSapce}
          onClick={handleComplianceScan}
        />
      </Tooltip>
      <div style={{ marginTop: "10px" }}>
        <button style={styles.btnShareButton}>Share</button>
      </div>
      <div style={{ marginTop: "10px" }}>
        <button style={styles.btnStartButton}>Star this space</button>
      </div>
    </>
  );
};

export default ActionButton;
