"use strict";
const FIRST_NUM = document.getElementById("first-num");
const SECOND_NUM = document.getElementById("second-num");
const BTN = document.getElementById("btn");
const RESULT = document.getElementById("result");
const sum = (firstNum, secondNum) => firstNum + secondNum;
const printNum = (firstNum, secondNum) => {
    if (secondNum) {
        const sumOnNum = sum(firstNum, secondNum);
        RESULT.innerHTML = `${sumOnNum}`;
        return;
    }
    RESULT.innerHTML = String(firstNum);
};
BTN.addEventListener("click", () => printNum(+FIRST_NUM.value, +SECOND_NUM.value));
