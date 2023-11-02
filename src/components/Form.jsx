import React, { useEffect, useState } from "react";
import { useSelectCurrency } from "../hooks/useSelectCurrency";
import { listOfcurrencies } from "../data/currency";
import { Message } from "./Message";

export const Form = ({ setCurrency }) => {
  const [listOfCriptos, setListOfCriptos] = useState([]);
  const [normalCurrency, SelectNormalCurrency] = useSelectCurrency(
    "Choose Your Normal Currency:",
    listOfcurrencies
  );
  const [criptoCurrency, SelectCriptoCurrency] = useSelectCurrency(
    "Choose Your Cripto Currency:",
    listOfCriptos
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
      const res = await fetch(url);
      const results = await res.json();
      const apiCurrencies = results.Data.map((cripto) => {
        const data = {
          id: cripto.CoinInfo.Name,
          name: cripto.CoinInfo.FullName,
        };
        return data;
      });

      setListOfCriptos(apiCurrencies);
    };

    fetchApi();
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if ([normalCurrency, criptoCurrency].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    setCurrency({ normalCurrency, criptoCurrency });
  };

  return (
    <>
      {error && <Message message="All fields are mandatory!"></Message>}
      <form onSubmit={submitHandler}>
        <SelectNormalCurrency></SelectNormalCurrency>
        <SelectCriptoCurrency></SelectCriptoCurrency>
        <input
          className="bg-indigo-400 w-full hover:bg-indigo-500 p-2 md:p-3 text-white text-lg rounded-lg uppercase font-bold cursor-pointer my-2 "
          type="submit"
          value="check"
        />
      </form>
    </>
  );
};
