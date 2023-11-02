import React from "react";

export const Message = ({ message }) => {
  return (
    <div className="bg-red-600 p-3 mb-2">
      <p className="text-lg text-white text-center">{message}</p>
    </div>
  );
};
