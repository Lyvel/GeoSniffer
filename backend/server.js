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
  _id = req.params.id;
  fetchCountryData(req.params.id).then((data) => {
    res.send(data);
  });
});

var _id = "";

const errorMessages = { status: 404, message: "Country not found" };

const fetchCountryData = async (country) => {
  const countryData = await axios
    .get(`https://restcountries.com/v3.1/name/${country}`)
    .catch((error) => {
      return JSON.stringify(errorMessages);
    });

  return stripCountryData(countryData.data);
};

const stripCountryData = async (country) => {
  if (country === undefined) {
    return JSON.stringify(errorMessages);
  }

  var index = 0;

  for (var i = 0; i < country.length; i++) {
    if (country[i].cca2.toLowerCase() === _id.toLowerCase()) {
      index = i;
      break;
    }
  }

  var currencies = [];
  Object.keys(country[index].currencies).forEach((key) =>
    currencies.push(
      "(" +
        country[index].currencies[key].symbol +
        ") " +
        country[index].currencies[key].name
    )
  );

  var nativeNames = [];
  Object.keys(country[index].name.nativeName).forEach((key) => {
    if (
      country[index].name.nativeName[key].official ===
      country[index].name.official
    ) {
    } else {
      nativeNames.push(country[index].name.nativeName[key].official);
    }
  });

  var languages = [];
  Object.keys(country[index].languages).forEach((key) =>
    languages.push(country[index].languages[key])
  );

  var timezones = [];
  Object.keys(country[index].timezones).forEach((key) =>
    timezones.push(country[index].timezones[key])
  );

  const newCountryData = {
    name: country[index].name.official,
    currencies: currencies.join("\n"),
    languages: languages.join("\n"),
    capital: country[index].capital[0],
    flagpng: country[index].flags.png,
    area: country[index].area.toLocaleString(),
    googlemaps: country[index].maps.googleMaps,
    population: country[index].population.toLocaleString(),
    timezone: timezones.join("\n"),
    continent: country[index].continents[0],
    nativeNames: nativeNames.join("\n"),
  };

  return JSON.stringify(newCountryData, null, 2);
};

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
