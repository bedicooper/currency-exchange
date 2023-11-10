import { useState, useEffect } from "react";

export const useGetRatesData = () => {

  const [ratesData, setRatesData] = useState({
    fetchStatus: false,
    error: false,
    date: "2023-11-04T23:59:59Z",
    rateValues: [{code: 'PLN', value: 1}],
  });

  const updateFetchStatus = (rates) => {

    setRatesData({
      ...ratesData,
      fetchStatus: true,
      date: rates.meta.last_updated_at,
      rateValues: Object.values(rates.data),
    });
  };

  const updateErrorStatus = (error) => {
    console.error(error);

    setRatesData({
      ...ratesData,
      error: true,
    });
  };

  const fetchRates = () => {
    https://api.currencyapi.com/v3/latest?apikey=cur_live_TxBZVPlw4Ri6EYX86I67OnfSkC8GetVi56sXTCce&currencies=PLN%2CGBP%2CUSD%2CEUR%2CCHF%2CJPY&base_currency=PLN
    fetch("currency-exchange/data.json")
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(rates => updateFetchStatus(rates))
      .catch(error => updateErrorStatus(error));
  };

  useEffect(() => {
    setTimeout(() => {
      fetchRates();
    }, 1500);
  }, []);

  return ratesData;
};
