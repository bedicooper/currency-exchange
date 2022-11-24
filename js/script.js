{
    const ratePLN = 1.00;
    const rateGBP = 5.48;
    const rateUSD = 4.72;
    const rateEUR = 4.72;
    const rateCHF = 4.77;
    const rateJPY = 0.032;

    const calculateFromValue = (amountFrom, currencyFrom) => {
        switch (currencyFrom) {
            case "PLN":
                return amountFrom * ratePLN;

            case "USD":
                return amountFrom * rateUSD;

            case "EUR":
                return amountFrom * rateEUR;

            case "GBP":
                return amountFrom * rateGBP;

            case "CHF":
                return amountFrom * rateCHF;

            case "JPY":
                return amountFrom * rateJPY;

        };
    };

    const calculateToRate = (currencyTo) => {
        let rateTo
        switch (currencyTo) {
            case "PLN":
                rateTo = ratePLN;
                break;
            case "USD":
                rateTo = rateUSD;
                break;
            case "EUR":
                rateTo = rateEUR;
                break;
            case "GBP":
                rateTo = rateGBP;
                break;
            case "CHF":
                rateTo = rateCHF;
                break;
            case "JPY":
                rateTo = rateJPY;
                break;
        };
        return rateTo;
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

        const fromValue = calculateFromValue(amountFrom, currencyFrom);
        const toRate = calculateToRate(currencyTo);

        const result = exchangeCalculation(fromValue, toRate);

        updateResultText(amountFrom, currencyFrom, result, currencyTo);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}