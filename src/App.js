import { SwipeableDrawer } from "@material-ui/core";
import React from "react";
import Header from "./components/Header.js";
import SwipeButtons from "./components/SwipeButtons.js";
import TinderCards from "./components/TinderCards";

function App() {
  return (
    <div>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
