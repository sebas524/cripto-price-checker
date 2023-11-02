import React, { useState } from "react";

export const useSelectCurrency = (label, options) => {
  const [state, setState] = useState("");

  const SelectCurrency = () => (
    <>
      <label className="text-white block text-xl lg:text-2xl font-bold my-2">
        {label}
      </label>
      <select
        className=" w-full  p-1 md:p-2 text-lg rounded-lg  font-bold  my-2 "
        value={state}
        onChange={(e) => setState(e.target.value)}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option
            key={option.id}
            value={option.id}
          >
            {" "}
            {option.name}
          </option>
        ))}
      </select>
    </>
  );

  return [state, SelectCurrency];
};
