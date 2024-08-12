// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// import '@atlaskit/css-reset';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// index.js or App.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "@atlaskit/css-reset";

const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  @font-face {
    font-family: 'Helvetica';
    src: url('./assets/fonts/Helvetica.ttf') format('ttf');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'AvenirNextCyr-Regular';
    src: url('./assets/fonts/AvenirNextCyr-Demi.ttf') format('truetype');
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'AvenirNextCyr-Regular';
    font-weight: 700;
    font-style: normal;
  }

  p, div, h1, h2, h3, h4, h5, h6, ul, ol, dl, img, pre, form, fieldset {
  margin: 0;
  padding: 0;
   font-family: 'Helvetica';
  font-weight: 700;
    font-style: normal;
  }

  .css-11b3ww9-MuiPaper-root-MuiAppBar-root {
    background-color: #fff !important;
    color: #000 !important;
  }

  .css-yz9k0d-MuiInputBase-input {
    border: 1px solid #000 !important;
    border-radius: 6px !important;
  }

  .css-yz9k0d-MuiInputBase-input:focus-within {
    border: 1px solid #0049F8 !important;
  }
`;


const AppWithStyles = () => (
  <>
    <style>{globalStyles}</style>
    <App />
  </>
);

ReactDOM.render(
  <React.StrictMode>
    <AppWithStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
