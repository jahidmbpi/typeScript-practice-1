"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
const addArrow = (num1, num2) => num1 + num2;
// object ---->function--->method
const poorUser = {
    name: "mejbah",
    balance: 0,
    addBalance(balance) {
        return `my new balance is ${this.balance + balance}`;
    },
};
const array = [1, 4, 10];
const newArray = array.map((ele) => ele * ele);
