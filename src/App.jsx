import React, { useState } from "react";
import Header from "./components/Header";
import OriginLists from "./components/OriginLists";
import Graph from "./components/Graph";
import "./App.css";
import Loading from "./components/Loading";

export default function App() {
  const [nameOrigins, setNameOrigins] = useState([]);
  const [searchedName, setSearchedName] = useState("");
  const [showMore, setShowMore] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [labelsState, setLabelsState] = useState([]);
  const [loadingCountryName, setLoadingCountryName] = useState(false);

  const getNameOriginss = async (url) => {
    const response = await fetch(url)
      .then((response) => response.json())
      .catch((err) => console.log(err));

    setNameOrigins(response.country);
    response.country.map(async (country, id) => {
      await getCountryNamee(country.country_id);
    });
  };

  const getCountryNamee = (countrycode) => {
    return fetch(`https://restcountries.com/v3.1/alpha/${countrycode}`)
      .then((data) => data.json())
      .then((data) => {
        //console.log(data);
        setLabelsState((labelsState) => [...labelsState, data]);
        // setLoadingCountryName(false);
      });
  };

  const getCountryName = (countrycodes) => {
    setLoadingCountryName(true);
    for (let i = 0; i < countrycodes.length; i++) {
      //XMLHttpRequest to make sych requests to get full country name from nationalize.io
      const xhr = new XMLHttpRequest();
      xhr.open(
        "GET",
        `https://restcountries.com/v3.1/alpha/${countrycodes[i].country_id}`,
        [false]
      );
      xhr.send();
      xhr.onload = function () {
        const countryName = JSON.parse(xhr.response)[0].name.common;
        setLabelsState((labelsState) => [...labelsState, countryName]);
      };
    }
    setLoadingCountryName(false);
  };
  const getNameOrigins = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.country);
        setNameOrigins(data.country);
        getCountryName(data.country);
      });
  };

  const handleChange = (e) => {
    setSearchedName(e.target.value);
    e.preventDefault();
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(labelsState)
    setLabelsState((labelsState) => []);
    var url = `https://api.nationalize.io/?name=${searchedName}`;
    setShowMore(false);
    //getNameOrigins(url)
    getNameOriginss(url);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className=" flex flex-col justify-between bg-gradient-to-b from-teal-900 to-teal-800 min-h-screen dark:bg-gray-700">
        <div>
          <Header toggle={toggleDarkMode} />
          <div className="form-wrapper">
            <form onSubmit={handleSubmit} id="form">
              <label>
                <input
                  onChange={handleChange}
                  value={searchedName}
                  className="form-control"
                  id="title"
                  name="namesearched"
                  type="text"
                  placeholder="Search name here"
                />
              </label>
              <input
                className="text-white bg-teal-600 ml-2 p-2 rounded hover:bg-teal-500"
                type="submit"
                value="Look up"
              />
            </form>
          </div>

          {loadingCountryName ? (
            <Loading loading={loadingCountryName} />
          ) : (
            <OriginLists
              nameOrigins={nameOrigins}
              showMoreToggle={toggleShowMore}
              showMore={showMore}
              label={labelsState}
              loadingCountryName={loadingCountryName}
            />
          )}
          <div className=" mt-5 flex flex-col items-center">
            {showMore ? (
              <Graph nameOrigins={nameOrigins} labelsState={labelsState} />
            ) : (
              ""
            )}
          </div>
        </div>

        <div>
          <footer>
            <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
            <span className="block text-sm text-white ml-3 sm:text-center ">
              © 2022{" "}
              <a
                href="https://tesfatsionshiferaw.netlify.app/"
                className="hover:text-wh"
              >
                Tesfatsion Shiferaw™
              </a>
              . All Rights Reserved.
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}
