{
let formElement = document.querySelector(".js-form");
let amountFromElement = document.querySelector(".js-amountFrom");
let currencyFromElement = document.querySelector(".js-currencyFrom");
let currencyToElement = document.querySelector(".js-currencyTo");
let resultElement = document.querySelector(".js-result");
let resultCurrencyElement = document.querySelector(".js-resultCurrency");


let PLN = 1.00;
let GBP = 5.48;
let USD = 4.72;
let EUR = 4.72;
let CHF = 4.77;
let JPY = 0.032;

const updateResultText = (amountFrom, currencyFromElement, exchangeCalculation, currencyToElement) => {
    const resultPhraseElement = document.querySelector(".js-resultPhrase");
    resultPhraseElement.innerText = `${amountFrom} ${currencyFromElement.value} to ${exchangeCalculation.toFixed(2)} ${currencyToElement.value}`;
};


const onFormSubmit = (event) => {
    event.preventDefault();

    let amountFrom = amountFromElement.value;
    let currencyFrom
    let currencyTo
    let exchangeCalculation
   
    switch (currencyFromElement.value) {
        case "PLN":
            currencyFrom = PLN;
            break;
        case "USD":
            currencyFrom = USD;
            break;
        case "EUR":
            currencyFrom = EUR;
            break;
        case "GBP":
            currencyFrom = GBP;
            break;
        case "CHF":
            currencyFrom = CHF;
            break;
        case "JPY":
            currencyFrom = JPY;
            break;
    };

    switch (currencyToElement.value) {
        case "PLN":
            currencyTo = PLN;
            break;
        case "USD":
            currencyTo = USD;
            break;
        case "EUR":
            currencyTo = EUR;
            break;
        case "GBP":
            currencyTo = GBP;
            break;
        case "CHF":
            currencyTo = CHF;
            break;
        case "JPY":
            currencyTo = JPY;
            break;
    };

    exchangeCalculation = (amountFrom * currencyFrom) / currencyTo;

    updateResultText(amountFrom, currencyFromElement, exchangeCalculation, currencyToElement);
};

const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
};

init();
}