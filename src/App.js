import { useState } from "react";
import { currencies } from "./currencies"
import Main from "./Main";
import Header from "./Header";
import Container from "./Container";
import Result from "./Result";
import Form from "./Form";
import Footer from "./Footer";

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
    <Main >
      <Header title={"Przelicznik walut"} />
      <Container >
        <div>
          <Form
            calculateResult={calculateResult}
            amount={amount} setAmount={setAmount}
            currencyFrom={currencyFrom} setCurrencyFrom={setCurrencyFrom}
            currencyTo={currencyTo} setCurrencyTo={setCurrencyTo}
          />
        </div>
        <div>
          <Result
            result={result}
          />
        </div>
      </Container >
      <Footer title={"Uwaga, wszystkie pola są wymagane."} />
    </Main >
  );
}

export default App;