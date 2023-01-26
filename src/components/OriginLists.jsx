import React from "react";
import Loading from "./Loading";

export default function OriginLists({
  nameOrigins,
  showMoreToggle,
  showMore,
  label,
  loadingCountryName,
}) {
  // {
  //   label.length && console.log("label", label);
  // }
  // {
  //   nameOrigins.length && console.log("origins", nameOrigins);
  // }

  const combinedArray = label.reduce((acc, current, index) => {
    return [...acc, [current, nameOrigins[index]]];
  }, []);

  //console.log(combinedArray);

  const NameOrigins = () => {
    return combinedArray.map((country, index) => (
      <div>
        {/* {country[1][0].name.common} {country[0].probability * 100} */}
        <div>
          {index < 3 ? (
            <p className="text-white text-2xl mt-2 ">
              <span>
                {index + 1}. {country[0][0].name.common}{" "}
              </span>
              <span>{country[0][0].flag}</span>
              <span className="ml-3 text-3xl">
                {Math.round(country[1].probability * 100)}%
              </span>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    ));
  };
  return (
    <div className=" flex flex-col items-center">
      <div>
        <NameOrigins />
        {/* {nameOrigins.map(function (origins, index) {
          return (
            <div key={index}>
              <div>
                {index < 3 ? (
                  <p className="text-white text-2xl mt-2 ">
                    {index + 1}. {label[index]}{" "}
                    {Math.round(origins.probability * 100)}%
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          );
        })} */}
      </div>

      {nameOrigins.length ? (
        <div
          onClick={showMoreToggle}
          className=" mt-3 w-30 h-12 text-white cursor-pointer bg-orange-500 p-2 rounded hover:bg-slate-400"
        >
          <a>{showMore ? "Show Less" : "Show Detail"}</a>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
