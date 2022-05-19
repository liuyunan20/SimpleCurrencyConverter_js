const rate = {'USD': 1, 'JPY': 113.5, 'EUR': 0.89, 'RUB': 74.36, 'GBP': 0.75};
console.log('Welcome to Currency Converter!');
for (let cur in rate) {
    console.log(`1 USD equals  ${rate[cur]} ${cur}`);
}