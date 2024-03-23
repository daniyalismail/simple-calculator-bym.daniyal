#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{ message: "Enter The First Number = ", type: "number", name: "First_Number" },
    { message: "Enter The Second Number = ", type: "number", name: "Second_Number" },
    { message: "Enter Which Operation You Wants To Perform = ", type: "list", name: "Operations", choices: ["Addition", "Subtraction", "Division", "Multiplication"] },]);
if (answer.Operations === "Addition") {
    console.log(answer.First_Number + answer.Second_Number);
}
else if (answer.Operations === "Subtraction") {
    console.log(answer.First_Number - answer.Second_Number);
}
else if (answer.Operations === "Division") {
    console.log(answer.First_Number / answer.Second_Number);
}
else if (answer.Operations === "Multiplication") {
    console.log(answer.First_Number * answer.Second_Number);
}
else {
    console.log("Enter The Valid Operation");
}
