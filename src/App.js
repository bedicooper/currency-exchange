import { MainContainer } from "./Main/MainContainer";
import TitleBlock from "./TitleBlock";
import Form from "./Form";
import Footer from "./Footer";
import { useResult } from "./useResult";
import { useState, useEffect } from "react";
import { Prompt } from './Prompt';

const useGetRatesData = () => {

  const [ratesData, setRatesData] = useState({
    fetchStatus: false,
    error: false,
    date: "2023-11-04T23:59:59Z",
    rateValues: [],
  });

  const updateFetchStatus = (rates) => {
    console.log(rates);

    setRatesData({
      ...ratesData,
      fetchStatus: true,
      date: rates.meta.last_updated_at,
      rateValues: [Object.keys(rates.data)],
    });
  };

  const updateErrorStatus = (error) => {
    console.error(error)

    setRatesData({
      ...ratesData,
      error: true,
    });
  };

  const fetchRates = () => {
    fetch("https://raw.githubusercontent.com/bedicooper/currency-exchange/main/public/data.json")
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
    }, 2000);
  }, []);

  return ratesData;
};

function App() {

  const ratesData = useGetRatesData();

  const {
    result,
    amount,
    currencyFrom,
    currencyTo,
    calculateResult,
    setAmount,
    setCurrencyFrom,
    setCurrencyTo,
  } = useResult();

  return (
    <>
      <MainContainer>
        <TitleBlock title={"Przelicznik walut"} />
        <Prompt
          ratesData={ratesData}
        />
        <Form
          ratesData={ratesData}
          result={result}
          calculateResult={calculateResult}
          amount={amount} setAmount={setAmount}
          currencyFrom={currencyFrom} setCurrencyFrom={setCurrencyFrom}
          currencyTo={currencyTo} setCurrencyTo={setCurrencyTo}
        />
        <Footer
          ratesData={ratesData}
        />
      </MainContainer>
    </>
  );
}

export default App;