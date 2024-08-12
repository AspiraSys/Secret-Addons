import React, { useState, useEffect } from "react";
import Icons from "./Icons";
import LoaderBox from "../mutliple/LoaderBox";

const SpaceModal = ({ isOpen, data, onClose, isLoading }) => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setDatas(data.pageList);
    }
  }, [isOpen, data]);

  const hasFindings = (page) => {
    return page.disallowedWord.some(
      (word) => page.findings[word] && page.findings[word].length > 0
    );
  };

  const noFindingsInAllPages = datas.every((page) => !hasFindings(page));

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
      marginTop: "10px",
      maxHeight: "420px",
      overflowY: "auto",
      padding: "8px 10px",
      borderBottom: "1px solid grey",
    },
    secureDataListScrollbar: {
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    secureDataItem: {
      display: "flex",
      gap: "10px",
      backgroundColor: "#D4D5D7",
      marginBottom: "10px",
      padding: "0px 15px",
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
      margin: 0,
      fontFamily: "Helvetica",
      fontWeight: "700",
      fontStyle: "normal",
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
    noDiv: {
      width: "60%",
      margin: "10px 0",
      padding: "5px",
      borderRadius: "5px",
      backgroundColor: "#d4d5d795",
    },
    noData: {
      fontSize: "15px",
      textAlign: "center",
      padding: "0px 15px",
      fontFamily: "Helvetica",
      fontWeight: "600",
      fontStyle: "regular",
    },
    pageSection: {
      padding: "5px 5px 15px 0",
      borderBottom: "1px solid rgb(210, 208, 208)",
    },
    pageSectionTitle: {
      marginTop: "10px",
      textTransform: "capitalize",
      fontFamily: "Helvetica",
      fontWeight: "700",
      fontStyle: "normal",
    },
    findingsSection: {
      padding: "10px 40px",
    },
    listText: {
      fontFamily: "Helvetica",
      fontWeight: "600",
      fontStyle: "regular",
    },
  };

  return (
    <>
      <style>
        {`
          .secureDataLists::-webkit-scrollbar {
            visibility: hidden;
          }
        `}
      </style>
      <div style={styles.modalOverlay}>
        <div style={styles.modalContent}>
          <div style={styles.topDiv}>
            <h2>Space Scanning</h2>
            <Icons.CancelIcon style={styles.iconClose} onClick={onClose} />
          </div>
          <div className="secureDataLists" style={styles.secureDataList}>
            {isLoading ? (
              <div style={styles.loaderCont}>
                <LoaderBox />
              </div>
            ) : (
              <div>
                {noFindingsInAllPages ? (
                  <p style={styles.noData}>
                    There is no secure data present in this space.
                  </p>
                ) : (
                  datas.map((page) => (
                    <div key={page.id} style={styles.pageSection}>
                      <h3 style={styles.pageSectionTitle}>{page.title}</h3>
                      {hasFindings(page) ? (
                        page.disallowedWord.map((word) =>
                          page.findings[word]?.length > 0 ? (
                            <div key={word} style={styles.findingsSection}>
                              <ul>
                                {page.findings[word].map((finding, index) => (
                                  <li
                                    key={index}
                                    dangerouslySetInnerHTML={{
                                      __html: finding,
                                    }}
                                    style={styles.listText}
                                  />
                                ))}
                              </ul>
                            </div>
                          ) : null
                        )
                      ) : (
                        <div style={styles.noDiv}>
                          <p style={styles.noData}>
                            There is no secure data present on this page.
                          </p>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
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
    </>
  );
};

export default SpaceModal;
