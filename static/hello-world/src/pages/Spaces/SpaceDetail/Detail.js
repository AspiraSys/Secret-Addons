import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BreadCrum from "../../../components/common/BreadCrum";
import Images from "../../../components/common/Images";
import PageList from "../../../response/PageList.json";
import ScanResult from "../../../response/ScanResult.json";
import Icons from "../../../components/common/Icons";
import Tooltip from "@mui/material/Tooltip";
import SecureDataModal from "../../../components/common/SecureDataModal";
import ActionButton from "../../../components/mutliple/ActionButton";
import SpaceModal from "../../../components/common/SpaceModal";

export const formatDate = (isoString) => {
  const date = new Date(isoString);
  return date.toLocaleString();
};

const Detail = () => {
  const { id, pageId } = useParams();
  const [pageData, setPageData] = useState(null);
  const [parentSpace, setParentSpace] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [secureData, setSecureData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [displayedText, setDisplayedText] = useState([]);
  const [reviwedScan, setReviwedScan] = useState(null);

  useEffect(() => {
    const matchedPage = ScanResult.pageList.find((page) => page.id === pageId);
    setPageData(matchedPage);

    const matchedSpace = PageList.find((space) => space.id === pageId);
    setParentSpace(matchedSpace);
  }, [pageId]);

  const handleEditClick = () => {
    const secureItems = pageData.disallowedWord;
    const extractedData = [];

    secureItems.forEach((item) => {
      if (pageData.findings[item]) {
        pageData.findings[item].forEach((finding) => {
          extractedData.push({ type: item, value: finding });
        });
      }
    });

    setSecureData(extractedData);
    setReviwedScan(pageData.lastReviewDate);
    setIsModalOpen(true);
    setIsLoading(true);
    setDisplayedText([]);

    let currentIndex = 0;
    const displayInterval = setInterval(() => {
      if (currentIndex < extractedData.length) {
        setDisplayedText((prev) => [...prev, extractedData[currentIndex]]);
        currentIndex += 1;
      } else {
        setIsLoading(false);
        clearInterval(displayInterval);
      }
    }, 2000);
  };

  const handleSpaceModal = () => {
    setIsModalOpen2(true);
    setIsLoading2(true);

    const displayInterval2 = setInterval(() => {
      setIsLoading2(false);
      clearInterval(displayInterval2);
    }, 2000);
  };

  // Inline styles
  const styles = {
    topIcons: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    iconSet: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    iconCont: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    topTiltle: {
      paddingTop: "30px",
    },
    topTiltleText: {
      fontSize: "20px",
      textTransform: "capitalize",
    },
    detailMainCont: {
      width: "100%",
      height: "90vh",
      display: "flex",
      justifyContent: "center",
    },
    detailInnerCont: {
      width: "80%",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      padding: "10px 15px",
    },
    topLayer: {
      width: "100%",
      padding: "20px 15px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid #F5F5F5",
    },
    leftLayer: {
      paddingLeft: "10px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
    },
    leftLayerImage: {
      width: "60px",
      height: "60px",
    },
    leftLayerTitle: {
      textTransform: "capitalize",
    },
    rightLayer: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      justifyContent: "center",
    },
    rightLayerText: {
      fontSize: "14px",
      fontWeight: "700",
      color: "#a09b9b",
    },
    centerLayer: {
      padding: "25px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      height: "60%",
      overflowY: "auto",
      borderBottom: "1px solid #F5F5F5",
    },
    centerContent: {
      fontSize: "18px",
      fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
      lineHeight: "40px",
      textAlign: "justify",
      fontWeight: "500",
    },
    innerCenter: {
      padding: "10px",
      display: "flex",
      alignItems: "center",
      gap: "50px",
    },
    innerCenterTitle: {
      fontSize: "20px",
      width: "15%",
    },
    innerCenterList: {
      listStyleType: "none",
      fontSize: "18px",
      fontWeight: "500",
    },
    subCenter: {
      width: "100%",
      padding: "30px 0px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid #F5F5F5",
    },
    subCenterButton: {
      padding: "5px 25px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      border: "none",
      outline: "none",
      cursor: "pointer",
      backgroundColor: "beige",
      borderRadius: "5px",
      fontSize: "16px",
      fontWeight: "600",
    },
    iconEdit: {
      fontSize: "30px !important",
      color: "#0348f6d1",
    },
    tooltipEditButton: {
      padding: "10px 25px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      border: "none",
      outline: "none",
      cursor: "pointer",
      backgroundColor: "beige",
      borderRadius: "5px",
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Helvetica",
    },
    tooltipButton: {
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    tooltipText: {
      marginRight: "5px",
      fontFamily: "Helvetica",
      fontWeight: "700",
    },
    tooltip: {
      position: "absolute",
      backgroundColor: "#a8a7a7",
      color: "#000",
      borderRadius: "4px",
      padding: "8px",
      width: "200px",
      zIndex: "1",
      top: "45px",
      left: "52%",
      transform: "translateX(-50%)",
      display: "none",
      fontSize: "14px",
      fontWeight: "500",
      letterSpacing: "1px",
      lineHeight: "20px",
      textTransform: "capitalize",
    },
    tooltipButtonHover: {
      display: "block",
    },
    bottomLeft: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      justifyContent: "center",
    },
    infoRow: {
      display: "flex",
      gap: "10px",
      alignItems: "center",
    },
    infoRowLabel: {
      fontSize: "16px",
      fontWeight: "600",
      textTransform: "capitalize",
      color: "#a09b9b",
      fontFamily: "Helvetica",
      fontStyle: "normal",
    },
    infoRowValue: {
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Helvetica",
      fontStyle: "normal",
    },
    iconEdit: {
      fontSize: "30px !important",
      color: "#0348f6d1",
    },
    noDataMessage: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "50px",
    },
    noDataCont: {
      width: "70%",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#F5F5F5",
      padding: "10px 5px",
      alignItems: "center",
    },
    noDataText: {
      fontSize: "18px",
      fontWeight: "600",
    },
  };

  return (
    <>
      <div style={styles.topIcons}>
        <BreadCrum subLink={parentSpace?.name} subLink2={pageData?.title} />
        <div style={styles.iconSet}>
          <div style={styles.iconCont}>
            <ActionButton handleSpaceScan={handleSpaceModal} />
          </div>
        </div>
      </div>
      {pageData?.disallowedWord && pageData?.findings ? (
        <div style={styles.detailMainCont}>
          <div style={styles.detailInnerCont}>
            <div style={styles.topLayer}>
              <div style={styles.leftLayer}>
                <img
                  src={parentSpace?.picture}
                  alt={parentSpace?.name}
                  style={styles.leftLayerImage}
                />
                <h2 style={styles.leftLayerTitle}>{pageData?.title}</h2>
              </div>
              <div style={styles.rightLayer}>
                <p style={styles.rightLayerText}>Created At</p>
                {parentSpace?.createdAt && (
                  <h6 style={styles.rightLayerText}>
                    {formatDate(parentSpace.createdAt)}
                  </h6>
                )}
              </div>
            </div>
            <div style={styles.centerLayer}>
              <h6 style={styles.centerContent}>{pageData?.description}</h6>
              {/* Uncomment and adjust as needed */}
              {/* {pageData?.disallowedWord.map(
                (item) =>
                  pageData.findings[item] && (
                    <div key={item} style={styles.innerCenter}>
                      <h3 style={styles.innerCenterTitle}>{item}</h3>
                      <ul>
                        {pageData.findings[item].map((finding, index) => (
                          <li
                            key={index}
                            dangerouslySetInnerHTML={{ __html: finding }}
                            style={styles.innerCenterList}
                          />
                        ))}
                      </ul>
                    </div>
                  )
              )} */}
            </div>
            <div style={styles.subCenter}>
              <div style={styles.bottomLeft}>
                {/* {pageData?.lastScanBy} */}
                <div style={styles.infoRow}>
                  <h5 style={styles.infoRowLabel}>lastScanBy:</h5>
                  <p style={styles.infoRowValue}>{pageData?.lastScanBy}</p>
                </div>
                <div style={styles.infoRow}>
                  <h5 style={styles.infoRowLabel}>lastScanDate:</h5>
                  <p style={styles.infoRowValue}>
                    {formatDate(pageData?.lastScanDate)}
                  </p>
                </div>
              </div>

              <Tooltip
                title={pageData?.disallowedWord.join(", ")}
                arrow
                sx={{ display: "block" }}
                style={styles.tooltipButton}>
                <button
                  style={styles.tooltipEditButton}
                  aria-label="Edit"
                  onClick={handleEditClick}>
                  <span style={styles.tooltipText}>Edit / Scan</span>
                  <Icons.EditIcon style={styles.iconEdit} />
                </button>
              </Tooltip>
            </div>
          </div>
        </div>
      ) : (
        <div style={styles.noDataMessage}>
          <div style={styles.noDataCont}>
            <h6 style={styles.noDataText}>
              There is no such key in this page.
            </h6>
          </div>
        </div>
      )}
      <SpaceModal
        isOpen={isModalOpen2}
        data={ScanResult}
        onClose={() => setIsModalOpen2(false)}
        isLoading={isLoading2}
        lastReviewed={reviwedScan}
      />
      <SecureDataModal
        isOpen={isModalOpen}
        data={secureData}
        onClose={() => setIsModalOpen(false)}
        isLoading={isLoading}
        lastReviewed={reviwedScan}
      />
    </>
  );
};

export default Detail;
