import { useState, useEffect } from "react";
import axios from "axios";

export const useGetRatesData = () => {

  const [ratesData, setRatesData] = useState({
    fetchStatus: false,
    error: false,
    date: "2023-11-04T23:59:59Z",
    rateValues: [{ code: 'PLN', value: 1 }],
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

    axios.get("data.json")
      .then(response => updateFetchStatus(response.data))
      .catch(error => updateErrorStatus(error));
  };

  useEffect(() => {
    setTimeout(() => {
      fetchRates();
    }, 1500);
  }, []);

  return ratesData;
};
