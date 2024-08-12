// import React from 'react'
// import './Styles/Common.css'

// const App = () => {
  
//   const myStyle = {
//     fontSize: "12px" ,
//     color: "green",
//   };

//   const CommonStyles = {
//     onSite: {
//       fontSize: "35px",
//       color: "red"
//     }
//   }

//   return (
//     <>
//       <h3 className="test" style={{ color: "purple", fontSize: "30px" }}>
//         Himad Ameen I am right enough
//       </h3>
//       <h3 className="test" style={myStyle}>
//         Working hard to deploy in confluence
//       </h3>
//       <h3 className="test" style={CommonStyles.onSite}>
//         Working hard to deploy in confluence
//       </h3>
//     </>
//   );
// }

// export default App

import React from "react";
import MainPage from './MainPage'

const App = () => {
  return (
    <>
      <MainPage />
    </>
  );
};

export default App;