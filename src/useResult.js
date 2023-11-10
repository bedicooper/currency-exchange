import { useState } from "react";
import { useGetRatesData } from "./useGetRatesData";

export const useResult = () => {
  const ratesData = useGetRatesData();
  const currencies = ratesData.rateValues;

  const [currencyFrom, setCurrencyFrom] = useState(currencies[0].code);
  const [currencyTo, setCurrencyTo] = useState(currencies[0].code);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState({});

  const calculateResult = (amount, currencyTo, currencyFrom) => {
    const currencyToRate = currencies.find(currency => currency.code === currencyTo).value;
    const currencyFromRate = currencies.find(currency => currency.code === currencyFrom).value;

    setResult({
      amount: +amount,
      from: currencyFrom,
      resultValue: amount / currencyFromRate * currencyToRate,
      to: currencyTo,
    });
  };

  return {
    result,
    amount,
    currencyFrom,
    currencyTo,
    calculateResult,
    setAmount,
    setCurrencyFrom,
    setCurrencyTo,
  };
};
