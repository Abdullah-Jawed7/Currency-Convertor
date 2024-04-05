#! /usr/bin/env  node
import inquirer from "inquirer";
let rates: any = {
  // According to 6-April-2024
  USD: 1,     // US Dollar
  EUR: 0.92,  // Europe euro
  JPY: 151.60,// Japanese yen
  INR: 83.30, // Indian rupee
  GBP: 0.79,  // Pound
  PKR: 278,   // Pakistani rupee
  AED: 3.67,  // UAE Dirham
  TAKA:109.75 // Bangladeshi taka
};
let userCurrency = await inquirer.prompt([
  {
    name: "From",
    type: "list",
    message: "What currency do you want to convert ?",
    choices: ["USD", "EUR", "JPY", "INR", "PKR", "GBP","AED","TAKA"],
  },
  {
    name: "To",
    type: "list",
    message: "In which currency you want to convert ?",
    choices: ["USD", "EUR", "JPY", "INR", "PKR", "GBP","AED","TAKA"],
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
