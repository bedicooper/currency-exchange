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



const updateResultText = (amountFrom, currencyFromElement, exchangeCalculation, currencyToElement) => {
    const resultPhraseElement = document.querySelector(".js-resultPhrase");
    resultPhraseElement.innerText = `${amountFrom} ${currencyFromElement.value} to ${exchangeCalculation.toFixed(2)} ${currencyToElement.value}`;
};


const onFormSubmit = (event) => {
    event.preventDefault();

    const amountFromElement = document.querySelector(".js-amountFrom");
    const currencyFromElement = document.querySelector(".js-currencyFrom");
    const currencyToElement = document.querySelector(".js-currencyTo");
    
    const amountFrom = +amountFromElement.value; 
    const currencyFrom = currencyFromElement.value;
    const currencyTo = currencyToElement.value;
    

    switch (currencyTo) {
        case "PLN":
            toRate = PLN;
            break;
        case "USD":
            toRate = USD;
            break;
        case "EUR":
            toRate = EUR;
            break;
        case "GBP":
            toRate = GBP;
            break;
        case "CHF":
            toRate = CHF;
            break;
        case "JPY":
            toRate = JPY;
            break;
    };


const fromValue = calculateFromValue (amountFrom, currencyFrom);
const exchangeCalculation = fromValue / toRate;

    updateResultText(amountFrom, currencyFromElement, exchangeCalculation, currencyToElement);
};

const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
};

init();
}