import { MainContainer } from "./Main/MainContainer";
import TitleBlock from "./TitleBlock";
import Form from "./Form";
import Footer from "./Footer";
import { useResult } from "./useResult";
import { useState } from "react";
import { Prompt } from './Prompt';

function App() {

  const [ratesData, setRatesData] = useState({
    fetchStatus: false,
    error: false,
    date: "2023-11-05T23:59:59Z",
    rates: {
    },
  });

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