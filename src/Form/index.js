import { useEffect, useRef } from "react";
import { Wrapper, Container, Field, Button } from "./styled";
import { Clock } from "./Clock";
import { Result } from "./Result";

export const Form = ({ ratesData, result, calculateResult, amount, setAmount, currencyFrom, setCurrencyFrom, currencyTo, setCurrencyTo }) => {
    const inputRef = useRef(null);

    const onInputChange = ({ target }) => setAmount(target.value);
    const onSelectFromChange = ({ target }) => setCurrencyFrom(target.value);
    const onSelectToChange = ({ target }) => setCurrencyTo(target.value);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const onFormSubmit = (evnet) => {
        evnet.preventDefault();
        calculateResult(amount, currencyTo, currencyFrom);
    };

    return (
        <Wrapper onSubmit={onFormSubmit}
            $hidden={!ratesData.requestStatus}
        >
            <Container $clock>
                <Clock />
            </Container>
            <Container>
                <label htmlFor="amount">
                    <span>Wartość jaką chcesz zamienić:</span>
                </label>
                <Field
                    ref={inputRef}
                    value={amount}
                    onChange={onInputChange}
                    id="amount"
                    type="number"
                    step="0.01"
                    min="0"
                    required
                />
            </Container>
            <Container>
                <label htmlFor="changeFrom">
                    <span>Jaką walutę chcesz zamienić?</span>
                </label>
                <Field as="select"
                    value={currencyFrom}
                    onChange={onSelectFromChange}
                    id="changeFrom"
                    required
                >
                    {ratesData.rateValues.map(currency =>
                        <option key={currency.code} value={currency.code} >
                            {currency.code}
                        </option>)}
                </Field>
            </Container>
            <Container>
                <label htmlFor="changeTo">
                    <span>Na jaką walutę zamienić?</span>
                </label>
                <Field as="select"
                    value={currencyTo}
                    onChange={onSelectToChange}
                    id="changeTo"
                    required
                >
                    {ratesData.rateValues.map(currency =>
                        <option key={currency.code} value={currency.code} >
                            {currency.code}
                        </option>)}
                </Field>
            </Container>
            <Container $button>
                <Button>Przelicz!</Button>
            </Container>
            <Container $result>
                <Result
                    result={result}
                />
            </Container>
        </Wrapper>
    )
};