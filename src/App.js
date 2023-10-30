import { useState } from "react";
import { currencies } from "./currencies";
import Main from "./Main";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import { GlobalStyle } from "./GlobalStyle";

function App() {

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

  return (
    <>
    <GlobalStyle />
    <Main >
      <Header title={"Przelicznik walut"} />
      <Form
        result={result}
        calculateResult={calculateResult}
        amount={amount} setAmount={setAmount}
        currencyFrom={currencyFrom} setCurrencyFrom={setCurrencyFrom}
        currencyTo={currencyTo} setCurrencyTo={setCurrencyTo}
      />
      <Footer />
    </Main >
    </>
  );
}

export default App;