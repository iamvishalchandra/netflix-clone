import React from "react";
import Nav from "../Nav/Nav";
import Banner from "../Banner/Banner";
import "./HomeScreen_Style/HomeScreen.css";
import RowList from "../RowList/RowList";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* NavBar */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Rows */}
      <RowList />
    </div>
  );
}

export default HomeScreen;
