import "./style.css";

const Form = ({ calculateResult, amount, setAmount, currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo }) => {

    const onInputChange = ({ target }) => setAmount(target.value);
    const onSelectFromChange = ({ target }) => setCurrencyFrom(target.value);
    const onSelectToChange = ({ target }) => setCurrencyTo(target.value);

    const onFormSubmit = (evnet) => {
        evnet.preventDefault();
        calculateResult(amount, currencyTo, currencyFrom);
     };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <div className="form__container">
                <label htmlFor="changeFrom">
                    <span>Jaką walutę chcesz zamienić?</span>
                </label>
                <select
                    value={currencyFrom} onChange={onSelectFromChange}
                    name="changeFrom" className="form__field" required>
                    <option />
                    <option value="PLN">polski złoty</option>
                    <option value="EUR">euro</option>
                    <option value="GBP">funt brytyjski</option>
                    <option value="USD">dolar amerykański</option>
                    <option value="CHF">frank szwajcarski</option>
                    <option value="JPY">jen japoński</option>
                </select>
            </div>
            <div className="form__container">
                <label htmlFor="amount">
                    <span>Wartość jaką chcesz zamienić:</span>
                </label>
                <input
                    value={amount}
                    onChange={onInputChange}
                    name="amount"
                    type="number"
                    step="0.01"
                    min="0"
                    className="form__field"
                    required
                />
            </div>
            <div className="form__container">
                <label htmlFor="changeTo">
                    <span>Na jaką walutę zamienić?</span>
                </label>
                <select
                    value={currencyTo} onChange={onSelectToChange}
                    name="changeTo" className="form__field" required>
                    <option />
                    <option value="PLN">polski złoty</option>
                    <option value="EUR">euro</option>
                    <option value="GBP">funt brytyjski</option>
                    <option value="USD">dolar amerykański</option>
                    <option value="CHF">frank szwajcarski</option>
                    <option value="JPY">jen japoński</option>
                </select>
            </div>
            <div className="form__container form__container--button">
                <button className="form__button">Przelicz!</button>
            </div>
        </form>
    )
};

export default Form;