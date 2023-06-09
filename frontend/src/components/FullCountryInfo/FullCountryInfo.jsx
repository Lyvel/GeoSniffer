import React from "react";
import "./fullCountryInfo.css";

/* Full country info component
    Not fully implemented, only a concept atm */

const FullCountryInfo = () => {
  const updateView = () => {
    var view = document.getElementById("countryView");
    if (view !== undefined) {
      view.classList.add("countryView__full");
    }
  };

  updateView();

  return (
    <div className="fullcountryinfo fadeIn">
      <h1>Full country info</h1>
    </div>
  );
};

export default FullCountryInfo;
