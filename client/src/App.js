import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";

function App() {
  let currentUrl = window.location.href;

  return (
    <BrowserRouter>
      {/* {currentUrl.endsWith('login') || currentUrl.endsWith('registration') ? */}
      {/* <></> : */}
      <NavBar />
      {/* } */}
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
