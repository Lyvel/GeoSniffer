import React from "react";
import "./fullCountryInfo.css";

const FullCountryInfo = () => {
  const updateView = () => {
    var view = document.getElementById("countryView");
    if (view !== undefined) {
      view.classList.add("countryView__full");
    }
  };

  updateView();

  return (
    <div className="fullcountryinfo">
      <h1>Full country info</h1>
    </div>
  );
};

export default FullCountryInfo;
