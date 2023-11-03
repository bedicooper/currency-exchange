import { useState } from "react";
import { currencies } from "./currencies";

export const useResult = () => {
  const [currencyFrom, setCurrencyFrom] = useState(currencies[0].code);
  const [currencyTo, setCurrencyTo] = useState(currencies[0].code);
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState({});

  const calculateResult = (amount, currencyTo, currencyFrom) => {
    const currencyToRate = currencies.find(currency => currency.code === currencyTo).rate;
    const currencyFromRate = currencies.find(currency => currency.code === currencyFrom).rate;

    setResult({
      amount: +amount,
      from: currencyFrom,
      resultValue: currencyFromRate * amount / currencyToRate,
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
