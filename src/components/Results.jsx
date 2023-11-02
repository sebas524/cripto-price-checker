import React from "react";

export const Results = ({ results }) => {
  const { IMAGEURL, PRICE, LASTUPDATE, LOWDAY, HIGHDAY, CHANGEPCT24HOUR } =
    results;
  return (
    <div>
      <img
        className="w-20 mx-auto my-2"
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="crypto image"
      />
      <div className="text-white text-xl lg:text-2xl">
        <p className="my-1">
          Price: <span className="font-black">{PRICE}</span>
        </p>
        <p className="my-1">
          Highest Price Today: <span className="font-black">{HIGHDAY}</span>
        </p>
        <p className="my-1">
          Lowest Price Today: <span className="font-black">{LOWDAY}</span>
        </p>
        <p className="my-1">
          Last 24-hours Variation:{" "}
          <span className="font-black">{CHANGEPCT24HOUR}</span>
        </p>
        <p className="my-1">
          Last Update: <span className="font-black">{LASTUPDATE}</span>
        </p>
      </div>
    </div>
  );
};
