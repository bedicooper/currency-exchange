import { MainContainer } from "./Main/MainContainer";
import TitleBlock from "./TitleBlock";
import Form from "./Form";
import Footer from "./Footer";
import { useResult } from "./useResult";
import { Prompt } from './Prompt';
import { useGetRatesData } from "./useGetRatesData.1";

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