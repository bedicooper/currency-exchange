import "./style.css";

const Result = ({ amount, currencyFrom, currencyTo, result }) => (
    <p className="result__paragraph">
        {
            result
                ? `${amount} ${currencyFrom} to ${result.toFixed(2)} ${currencyTo}`
                : `Podaj wartości i waluty aby móc obliczyć.`}
    </p>
);

export default Result;