import { useState } from "react";
import { currencies } from "./currencies"
import Main from "./Main";
import Header from "./Header";
import Container from "./Container";
import Section from "./Section";
import Result from "./Result";
import Form from "./Form";
import Footer from "./Footer";

function App() {

  const [currencyFrom, setCurrencyFrom] = useState("");
  const [currencyTo, setCurrencyTo] = useState("");
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState();

  const calculateResult = (amount, currencyTo, currencyFrom) => {
    const getCurrencyTo = currencies.find(currency => currency.name === currencyTo).rate;
    const getCurrencyFrom = currencies.find(currency => currency.name === currencyFrom).rate;

    setResult((getCurrencyFrom * amount) / getCurrencyTo);
  };

  return (
    <Main >
      <Header title={"Przelicznik walut"} />
      <Container >
        <Section
          content={
            <Form
              setResult={setResult}
              calculateResult={calculateResult}
              amount={amount} setAmount={setAmount}
              currencyFrom={currencyFrom} setCurrencyFrom={setCurrencyFrom}
              currencyTo={currencyTo} setCurrencyTo={setCurrencyTo}
            />
          }
        />
        <Section
          content={
            <Result
              amount={amount}
              currencyFrom={currencyFrom}
              currencyTo={currencyTo}
              result={result}
            />
          }
        />
      </Container >
      <Footer title={"Uwaga, wszystkie pola są wymagane."} />
    </Main >
  );
}

export default App;