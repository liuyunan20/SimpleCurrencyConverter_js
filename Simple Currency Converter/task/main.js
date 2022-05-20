const input = require('sync-input');
const rate = {'USD': 1, 'JPY': 113.5, 'EUR': 0.89, 'RUB': 74.36, 'GBP': 0.75};
console.log('Welcome to Currency Converter!');
for (let cur in rate) {
    console.log(`1 USD equals  ${rate[cur]} ${cur}`);
}

let source;
let target;
let amount;
console.log('What do you want to do?\n' +
    '1-Convert currencies 2-Exit program');
let action = input();
while (action !== '2' && action !== '1') {
    console.log('Unknown input\n' + 'What do you want to do?\n' +
        '1-Convert currencies 2-Exit program');
    action = input();
}

switch (action) {
    case '2':
        console.log('Have a nice day!');
        break;
    case '1':
        source = input('What do you want to convert?\n' +
            'From: ').toUpperCase();
        while (!Object.keys(rate).includes(source)) {
            console.log('Unknown currency');
            source = input('What do you want to convert?\n' +
                'From: ').toUpperCase();
        }
        target = input('To: ').toUpperCase();
        while (!Object.keys(rate).includes(target)) {
            console.log('Unknown currency');
            target = input('To: ').toUpperCase();
        }
        amount = Number(input('Amount: '));
        while (Number.isNaN(amount)) {
            console.log('The amount has to be a number');
            amount = Number(input('Amount: '));
        }
        while (amount < 1) {
            console.log('The amount can not be less than 1');
            amount = Number(input('Amount: '));
        }
        console.log(`Result: ${amount} ${source} equals ${(rate[target] / rate[source] * amount).toFixed(4)} ${target}`);
        break;
}
