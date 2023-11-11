import { useState, useEffect } from "react";
import axios from "axios";

export const useGetRatesData = () => {

  const [ratesData, setRatesData] = useState({
    requestStatus: false,
    error: false,
    date: "2023-11-04T23:59:59Z",
    rateValues: [{ code: 'PLN', value: 1 }],
  });

  const updateRequestStatus = (rates) => {

    setRatesData({
      ...ratesData,
      requestStatus: true,
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

  const requestRates = () => {
    (async () => {
      try {
        const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_TxBZVPlw4Ri6EYX86I67OnfSkC8GetVi56sXTCce&currencies=PLN%2CGBP%2CUSD%2CEUR%2CCHF%2CJPY&base_currency=PLN");
        updateRequestStatus(response.data);
      } catch (error) {
        updateErrorStatus(error);
      }
    })();
  };

  useEffect(() => {
    setTimeout(() => {
      requestRates();
    }, 1500);
  }, []);

  return ratesData;
};
