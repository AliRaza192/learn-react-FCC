import React from "react";

function Card({ cardNum, imgUrl, Name }) {
  return (
    <div>
      <div className=" bg-gray-600 p-4 justify-between">
        <h1 className="text-3xl font-semibold text-white">{cardNum}</h1>
        <img className="w-100 h-64" src={imgUrl} />
        <h2 className="text-2xl font-semibold text-yellow-100">{Name}</h2>
        <footer className="mt-4 text-sm font-light text-white">
          Card Close
        </footer>
      </div>
    </div>
  );
}

export default Card;
