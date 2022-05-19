const input = require('sync-input');
const rate = {'USD': 1, 'JPY': 113.5, 'EUR': 0.89, 'RUB': 74.36, 'GBP': 0.75};
console.log('Welcome to Currency Converter!');
for (let cur in rate) {
    console.log(`1 USD equals  ${rate[cur]} ${cur}`);
}

let target = input(`I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
Type the currency you wish to convert: USD
To: `).toUpperCase();

if (Object.keys(rate).includes(target)) {
    let amount = Number(input('Amount: '));
    if (Number.isNaN(amount)) {
        console.log('The amount has to be a number');
    } else if (amount < 1) {
        console.log('The amount can not be less than 1');
    } else {
        console.log(`Result: ${amount} USD equals ${(rate[target] * amount).toFixed(4)} ${target}`);
    }
} else {
    console.log('Unknown currency');
}
