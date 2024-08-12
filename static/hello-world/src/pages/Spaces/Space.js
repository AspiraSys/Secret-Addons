import React, { useEffect, useState } from "react";
import ListBox from "../../components/common/ListBox";
import BreadCrum from "../../components/common/BreadCrum";
import { useParams, useNavigate } from "react-router-dom";
import SpaceList from "../../response/SpaceList.json";
import PageList from "../../response/PageList.json";
import ActionButton from "../../components/mutliple/ActionButton";
import SpaceModal from "../../components/common/SpaceModal";
import ScanResult from "../../response/ScanResult.json";

const Space = () => {
  const { id } = useParams();
  const spaceData = SpaceList.find((page) => page.id === id);

  const [spaceDatas, setSpaceDatas] = useState(spaceData);
  const [docList, setDocList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [reviwedScan, setReviwedScan] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    // Filter pages by the parentId matching the space id
    const filteredPages = PageList.filter((page) => page.spaceId === id);
    setDocList(filteredPages);
  }, [id]);

  const handleNavigateToDetail = (pageId) => {
    navigate(`/spaces/${id}/${pageId}`);
  };

  const handleSpaceModal = () => {
    setIsModalOpen(true);
    setIsLoading(true);

    const displayInterval = setInterval(() => {
      setIsLoading(false);
      clearInterval(displayInterval);
    }, 2000);
  };

  // Inline styles
  const styles = {
    topIcons: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    },
    topTiltle: {
      paddingTop: "30px",
    },
    topTiltleText: {
      fontSize: "20px",
      textTransform: "capitalize",
    },
    listBox: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      padding: "40px 0px",
      gap: "35px",
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
    noDataMessage: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
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
        <BreadCrum subLink={spaceDatas.name} />
        <div style={styles.iconSet}>
          <div style={styles.iconCont}>
            <ActionButton handleSpaceScan={handleSpaceModal} />
          </div>
        </div>
      </div>
      <div style={styles.topTiltle}>
        <h5 style={styles.topTiltleText}>Pick Where you left off</h5>
      </div>
      <div style={styles.listBox}>
        {docList.length > 0 ? (
          docList.map((item, index) => (
            <ListBox
              data={item}
              parent={spaceDatas.name}
              key={index}
              onNavigate={() => handleNavigateToDetail(item.id)}
            />
          ))
        ) : (
          <div style={styles.noDataMessage}>
            <div style={styles.noDataCont}>
              <h6 style={styles.noDataText}>There is no data in this space.</h6>
            </div>
          </div>
        )}
      </div>
      <SpaceModal
        isOpen={isModalOpen}
        data={ScanResult}
        onClose={() => setIsModalOpen(false)}
        isLoading={isLoading}
        lastReviewed={reviwedScan}
      />
    </>
  );
};

export default Space;
