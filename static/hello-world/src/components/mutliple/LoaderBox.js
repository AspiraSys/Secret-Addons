import React from "react";

const loaderBoxStyle = {
  width: "50px",
  height: "50px",
  border: "5px solid #264653",
  borderRadius: "3px",
  animation: "rotateBox 5s infinite ease-in-out",
  margin: "0 auto",
  position: "relative",
  top: "50%",
  transform: "translateY(-50%)",
};

const keyframes = `
  @keyframes rotateBox {
    0% {
      transform: rotate(0deg);
      border-color: #264653;
    }
    25% {
      border-color: #2a9d8f;
    }
    50% {
      transform: rotate(180deg);
      border-color: #e9c46a;
    }
    75% {
      border-color: #f4a261;
    }
    100% {
      transform: rotate(360deg);
      border-color: #264653;
    }
  }
`;

const LoaderBox = () => {
  React.useEffect(() => {
    // Add keyframes style to document head
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    // Cleanup style element on component unmount
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return <div style={loaderBoxStyle}></div>;
};

export default LoaderBox;
