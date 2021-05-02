import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./styles/global";
import CookiesView from "./views/Cookies";

const Popup = () => {
  return (
    <>
      <CookiesView />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
);
