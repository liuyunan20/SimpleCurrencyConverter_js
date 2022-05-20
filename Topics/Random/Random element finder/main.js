function getRomanNumber(array) {
    let index = Math.floor(Math.random() * (array.length - 1) + 1);
    return array[index];
}

// const romanNumbers = ["I", "II", "III", "IV", "V"];
// console.log(getRomanNumber(romanNumbers));