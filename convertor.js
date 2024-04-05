#! /usr/bin/env  node
import inquirer from "inquirer";
let rates = {
    // According to 6-April-2024
    USD: 1,
    EUR: 0.92,
    JPY: 151.60,
    INR: 83.30,
    GBP: 0.79,
    PKR: 278,
    AED: 3.67,
    TAKA: 109.75 // Bangladeshi taka
};
let userCurrency = await inquirer.prompt([
    {
        name: "From",
        type: "list",
        message: "What currency do you want to convert ?",
        choices: ["USD", "EUR", "JPY", "INR", "PKR", "GBP", "AED", "TAKA"],
    },
    {
        name: "To",
        type: "list",
        message: "In which currency you want to convert ?",
        choices: ["USD", "EUR", "JPY", "INR", "PKR", "GBP", "AED", "TAKA"],
    },
    {
        name: "Amount",
        type: "input",
        message: "How much do you want to convert?",
    },
]);
let fromAmount = rates[userCurrency.From];
let toAmount = rates[userCurrency.To];
let amount = userCurrency.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(Math.floor(convertedAmount));
