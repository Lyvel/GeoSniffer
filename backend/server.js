const axios = require("axios");
const express = require("express");
const app = express();

const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.get("/api/:id", (req, res) => {
  fetchCountryData(req.params.id).then((data) => {
    res.send(data);
  });
});

const errorMessages = { status: 404, message: "Country not found" };

const fetchCountryData = async (country) => {
  const countryData = await axios
    .get(`https://restcountries.com/v3.1/name/${country}/?fullText=true`)
    .catch((error) => {
      return JSON.stringify(errorMessages);
    });

  return stripCountryData(countryData.data);
};

const stripCountryData = async (country) => {
  if (country === undefined) {
    return JSON.stringify(errorMessages);
  }

  var currencies = [];
  Object.keys(country[0].currencies).forEach((key) =>
    currencies.push(
      "(" +
        country[0].currencies[key].symbol +
        ") " +
        country[0].currencies[key].name
    )
  );

  var nativeNames = [];
  Object.keys(country[0].name.nativeName).forEach((key) => {
    if (country[0].name.nativeName[key].official === country[0].name.official) {
    } else {
      nativeNames.push(country[0].name.nativeName[key].official);
    }
  });

  var languages = [];
  Object.keys(country[0].languages).forEach((key) =>
    languages.push(country[0].languages[key])
  );

  var timezones = [];
  Object.keys(country[0].timezones).forEach((key) =>
    timezones.push(country[0].timezones[key])
  );

  const newCountryData = {
    name: country[0].name.official,
    currencies: currencies.join("\n"),
    languages: languages.join("\n"),
    capital: country[0].capital[0],
    flagpng: country[0].flags.png,
    area: country[0].area.toLocaleString(),
    googlemaps: country[0].maps.googleMaps,
    population: country[0].population.toLocaleString(),
    timezone: timezones.join("\n"),
    continent: country[0].continents[0],
    nativeNames: nativeNames.join("\n"),
  };

  return JSON.stringify(newCountryData, null, 2);
};

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
