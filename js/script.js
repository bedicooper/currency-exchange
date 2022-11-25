{
    const ratePLN = 1.00;
    const rateGBP = 5.48;
    const rateUSD = 4.72;
    const rateEUR = 4.72;
    const rateCHF = 4.77;
    const rateJPY = 0.032;

    const convertCurrencyToRate = (currency) => {
        switch (currency) {
            case "PLN":
                return ratePLN;
            case "USD":
                return rateUSD;
            case "EUR":
                return rateEUR;
            case "GBP":
                return rateGBP;
            case "CHF":
                return rateCHF;
            case "JPY":
                return rateJPY;
        };
    };

    const exchangeCalculation = (fromValue, toRate) => {
        return fromValue / toRate;
    }

    const updateResultText = (amountFrom, currencyFrom, result, currencyTo) => {
        const resultPhraseElement = document.querySelector(".js-resultPhrase");
        resultPhraseElement.innerText = `${amountFrom} ${currencyFrom} to ${result.toFixed(2)} ${currencyTo}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountFromElement = document.querySelector(".js-amountFrom");
        const currencyFromElement = document.querySelector(".js-currencyFrom");
        const currencyToElement = document.querySelector(".js-currencyTo");

        const amountFrom = +amountFromElement.value;
        const currencyFrom = currencyFromElement.value;
        const currencyTo = currencyToElement.value;

        const fromValue = convertCurrencyToRate(currencyFrom) * amountFrom;
        const toRate = convertCurrencyToRate(currencyTo);

        const result = exchangeCalculation(fromValue, toRate);

        updateResultText(amountFrom, currencyFrom, result, currencyTo);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}