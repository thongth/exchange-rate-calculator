const currencyEl1 = document.getElementById('currency-one');
const currencyEl2 = document.getElementById('currency-two');
const amountEl1 = document.getElementById('amount-one');
const amountEl2 = document.getElementById('amount-two');
const swapButton = document.getElementById('swap');
const rate = document.getElementById('rate');

function calculate() {
    const currency1 = currencyEl1.value;
    const currency2 = currencyEl2.value;
    fetch(`https://api.exchangeratesapi.io/latest?base=${currency1}`)
        .then(result => result.json())
        .then(data => {
            amountEl2.value = amountEl1.value * data.rates[currency2];
            rate.innerText = `1 ${currency1} = ${data.rates[currency2]} ${currency2}`;
        });
}

function swapCurrency(){
    const temp = currencyEl1.value;
    currencyEl1.value = currencyEl2.value;
    currencyEl2.value = temp;
    calculate();
}

currencyEl1.addEventListener('change', calculate);
currencyEl2.addEventListener('change', calculate);
amountEl1.addEventListener('input', calculate);
amountEl2.addEventListener('input', calculate);

swapButton.addEventListener('click', swapCurrency);