import "./style.css";

const Form = () => (
    <>
        <div className="form__container">
            <label for="changeFrom">
                <span>Jaką walutę chcesz zamienić?</span>
            </label>
            <select name="changeFrom" className="form__field" required>
                <option value="PLN">polski złoty</option>
                <option value="EUR">euro</option>
                <option value="GBP">funt brytyjski</option>
                <option value="USD">dolar amerykański</option>
                <option value="CHF">frank szwajcarski</option>
                <option value="JPY">jen japoński</option>
            </select>
        </div>
        <div className="form__container">
            <label for="amount">
                <span>Wartość jaką chcesz zamienić:</span>
            </label>
            <input name="amount" type="number" step="0.01" min="0" className="form__field" required />
        </div>
        <div className="form__container">
            <label for="changeTo">
                <span>Na jaką walutę zamienić?</span>
            </label>
            <select name="changeTo" className="form__field" required>
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
    </>
);

export default Form;