import React, { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Loading, NotFound } from "../";
import {
  useCountryData,
  useUpdateCountryData,
} from "../Context/CountryContext";
import "./countrySearch.css";

import { useUpdateFullInfoData } from "../Context/FullInfoContext";

/* Search bar component */

const CountrySearch = () => {
  /* Stores the current country string entered */
  const [country, setCountry] = useState("");

  const updateCountryData = useUpdateCountryData();
  const countryData = useCountryData();

  const updateFullInfoData = useUpdateFullInfoData();

  /* Fetches the JSON from my backend server and updates the CountryData context */
  const fetchCountryData = async () => {
    updateCountryData("");
    document.querySelector(".countrysearch").style.transform = "none";
    showLoading();
    fetch(`https://country-info-7dq7.onrender.com/api/${country}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })
      .then((data) => {
        updateFullInfoData("false");
        if (data.status === 404) {
          updateCountryData("404");
          return;
        }

        document.querySelector(".countrysearch").style.transform =
          "translateY(-40vh)";

        updateCountryData(data);
        hideLoading();
      })
      .catch((err) => {
        updateCountryData("404");
      });
  };

  /* Displays the loading component */
  const showLoading = () => {
    document.querySelector(".loading").style.display = "block";
  };

  /* Hides the loading component */
  const hideLoading = () => {
    document.querySelector(".loading").style.display = "none";
  };

  return (
    <div className="countrysearch">
      <div className="countrysearch__searchbar">
        <IoLocationSharp size={30} />
        <input
          type="text"
          placeholder="Enter country name"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && fetchCountryData();
          }}
        />
        <button
          onClick={() => {
            fetchCountryData();
          }}
        >
          <FaSearchLocation />
        </button>
      </div>
      <Loading />
      {countryData === "404" && (
        <>
          {hideLoading()}
          <NotFound />
        </>
      )}
    </div>
  );
};

export default CountrySearch;
