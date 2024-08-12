import React, { useEffect } from "react";
import Icons from "./Icons";
import LoaderBox from "../mutliple/LoaderBox";
import { formatDate } from "../../pages/Spaces/SpaceDetail/Detail";

const SecureDataModal = ({
  isOpen,
  data,
  onClose,
  isLoading,
  lastReviewed,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Inline styles
  const styles = {
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modalContent: {
      background: "white",
      padding: "20px",
      borderRadius: "8px",
      maxWidth: "800px",
      maxHeight: "580px",
      width: "100%",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    topDiv: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid grey",
      padding: "10px",
    },
    iconClose: {
      cursor: "pointer",
    },
    secureDataList: {
      marginTop: "20px",
      maxHeight: "420px",
      overflowY: "auto",
      padding: "8px 10px",
      borderBottom: "1px solid grey",
    },
    secureDataItem: {
      display: "flex",
      gap: "10px",
      backgroundColor: "#D4D5D7",
      marginBottom: "10px",
      padding: "10px 15px",
      borderRadius: "5px",
    },
    secureDataItemTitle: {
      margin: 0,
      fontSize: "1.1em",
      fontFamily: "Helvetica",
      fontWeight: "700",
      fontStyle: "normal",
    },
    secureDataItemText: {
      fontSize: "16px",
      fontFamily: "Helvetica",
      fontWeight: "700",
      fontStyle: "regular",
    },
    modalButton: {
      display: "flex",
      float: "right",
      padding: "10px 50px",
      border: "none",
      outline: "none",
      borderRadius: "5px",
      cursor: "pointer",
      backgroundColor: "#000",
      fontWeight: "bold",
      marginTop: "15px",
      color: "#ffff",
      letterSpacing: "2px",
      transition: ".5s ease all",
      fontFamily: "Helvetica",
      fontWeight: "600",
      fontStyle: "regular",
    },
    modalButtonHover: {
      backgroundColor: "rgba(108, 68, 50, 0.844)",
    },
    loaderCont: {
      paddingBottom: "20px",
    },
    date: {
      float: "right",
      padding: "10px",
    },
    noData: {
      padding: "5px 10px",
      backgroundColor: "#D4D5D7",
    },
  };

  return (
    <div style={styles.modalOverlay}>
      <div style={styles.modalContent}>
        <div style={styles.topDiv}>
          <h2>Secure Data</h2>
          <Icons.CancelIcon style={styles.iconClose} onClick={onClose} />
        </div>
        <div style={styles.secureDataList}>
          {isLoading ? (
            <div style={styles.loaderCont}>
              <LoaderBox />
            </div>
          ) : (
            <>
              {data.length === 0 ? (
                <div style={styles.noData}>
                  <p>There is no secure data present in this space</p>
                </div>
              ) : (
                <>
                  {data.map((item, index) => (
                    <div key={index} style={styles.secureDataItem}>
                      <p
                        style={styles.secureDataItemText}
                        dangerouslySetInnerHTML={{ __html: item.value }}
                      />
                    </div>
                  ))}
                  <p style={styles.date}>
                    Last Reviewed: {formatDate(lastReviewed)}
                  </p>
                </>
              )}
            </>
          )}
        </div>

        <button
          style={styles.modalButton}
          onClick={onClose}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.modalButtonHover.backgroundColor)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              styles.modalButton.backgroundColor)
          }>
          Close
        </button>
      </div>
    </div>
  );
};

export default SecureDataModal;
