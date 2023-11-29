function divide(firstNum, secondNum) {
    if (secondNum === 0) {
        throw new Error("Division by zero is undefined.");
    }

    return firstNum / secondNum;
}

module.exports = divide