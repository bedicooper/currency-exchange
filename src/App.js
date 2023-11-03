import { MainContainer } from "./Main/MainContainer";
import TitleBlock from "./TitleBlock";
import Form from "./Form";
import Footer from "./Footer";
import { useResult } from "./useResult";

function App() {

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
        <Form
          result={result}
          calculateResult={calculateResult}
          amount={amount} setAmount={setAmount}
          currencyFrom={currencyFrom} setCurrencyFrom={setCurrencyFrom}
          currencyTo={currencyTo} setCurrencyTo={setCurrencyTo}
        />
        <Footer />
      </MainContainer>
    </>
  );
}

export default App;