// TODO: Include packages needed for this application
//FileSystem
const fs = require('fs');

//generateMarkdown 
const generate= require('./utils/generateMarkdown.js');
//inquirer @ 8.2.4
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ([
  {
    type: "input",
    name: "title",
    message: "What is the title of your project/Application? ",
  },

  {
    type: "input",
    name: "Description",
    message: "Describe this project/Application?",
  },

  {
    type: "input",
    name: "Install",
    message: "List any installation instructions. If None type None or something similar",
  },

  {
    type: "input",
    name: "Usage",
    message: "Usage information for project. If None type None or something similar",
  },

  {
    type: "input",
    name: "test",
    message: "Enter the test Instructions. If None type None or something similar",
  },

  {
    type: "input",
    name: "Contribute",
    message: "Enter Contribution Guidelines. If None type None or something similar",
  },

  {
    type: "input",
    name: "Username",
    message: "What is your GitHub username?",
  },

  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },

  {
    type: "list",
    name: "License",
    message: "What License are you using? Pick other if the license isn't listed.",
    choices: [
        "Apache License 2.0", 
        "GNU General Public License 3.0", 
        "MIT License", 
        "Eclipse Public License 2.0",
        "Mozilla Public License 2.0",
        "GNU Lesser General Public License v2.1",
        "None"]
  },


  {
    type: "input",
    name: "OtherLicense",
    message: "What License are you using. Be Specific.?",
    //this question should only show up when user picks other
    when: function(answers) {
        return answers.License === "Other";
    }
  }
 
  
]);



  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.writeFile(fileName, data, err => {

    if (err){
        return console.log(err);
    }

    return console.log("README.MD generated ! :^)")
})

}

// TODO: Create a function to initialize app
// i set my questions to a const labelled questions
//under this initialize, i can call inquirer.prompt with questions const as my parameter.
function init() {

    //create inquirer prompt using questions array
    inquirer.prompt(
        questions
    ).then(function (answers){
        //instead of writing multiple if statements, a single state when these are empty, console.error will occur
        if (answers.title 
         && answers.Description  
         && answers.Install  
         && answers.Usage  
         && answers.test  
         && answers.Contribute ){

            //creating readme.md 
            writeToFile('README.md', generate(answers));
          } else {
            console.error('error invalid input please try again.')
            //console.error(answers.title , answers.Description , answers.Install , answers.Usage , answers.test , answers.Contribute);
          }
    })
    // //list answers
    // .then(answers => {
    //     console.log(answers);
    // });


 

}

// Function call to initialize app
init();
