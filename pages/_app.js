import "../styles/globals.css";
import React from "react";
import Header from "../Components/Header";
function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
