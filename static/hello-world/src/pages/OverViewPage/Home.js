import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListBox from "../../components/common/ListBox";
import PageList from "../../response/PageList.json";

const Home = () => {
  const [actualData, setActualData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (PageList) {
      setActualData(PageList);
    }
  }, []);

  const handleNavigateToDetail = (pageId) => {
    navigate(`/spaces/${pageId?.spaceId}/${pageId?.id}`);
  };

  // Inline styles
  const styles = {
    topTitle: {
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
  };

  return (
    <>
      <div style={styles.topTitle}>
        <h5>Pick Where you left off</h5>
      </div>
      <div style={styles.listBox}>
        {actualData.map((item, index) => (
          <ListBox
            data={item}
            parent={"space-1"}
            key={index}
            onNavigate={() => handleNavigateToDetail(item)}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
