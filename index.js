#! /usr/bin/env node
//Import the 'Inquirer, module, which is a command line interface for Node.js
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright.bold("\n \t Wellcome to the code with Sameer Anis' - Word Counter\n"));
//Declare a constant 'answers' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence to Count the Word: "
    }
]);
const words = answers.sentence.trim().split(" ");
// Print the array of words tot he console
console.log(words);
// Print the word count of the sentence to the console
console.log(`Your Sentence word count is ${words.length}`);
