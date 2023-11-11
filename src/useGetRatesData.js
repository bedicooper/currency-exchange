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
        localStorage.setItem("rates", JSON.stringify(response.data));
        updateRequestStatus(response.data);
      } catch (error) {
        updateErrorStatus(error);
      }
    })();
  };

  const getInitialState = (requestDelay) => {
    const localStorageState = localStorage.getItem("rates");

    const dateDifference = () => {
      const initialState = JSON.parse(localStorageState);
      const storedIsoDate = initialState.meta.last_updated_at;
      const storedDate = new Date(storedIsoDate);
      const daysDifference = (Date.now() - storedDate.getTime()) / 1000 / 3600 / 24;

      return daysDifference;
    };

    if (localStorageState === null) {
      console.log("Storage empty - Request Data form API");
      requestDelay();
    } else if (Math.floor(dateDifference()) !== 0) {
      console.log("To old data  - Request Data form API");
      requestDelay();
    } else {
      console.log("Rates up to date - Get Data from localStorage");
      updateRequestStatus(JSON.parse(localStorageState));
    }
  };

  useEffect(() => {
    const requestDelay = () => {
      setTimeout(() => {
        requestRates();
      }, 1500);
    }

    getInitialState(requestDelay);
  }, []);

  return ratesData;
};
