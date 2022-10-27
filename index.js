const fs = require("fs");
const inquirer = require("inquirer")

managerQs = [
    {
        message: "What's The Team Manager's name?",
        name: "managerName"
    },
    {
        message: "What's The Team Manager's Employee ID?",
        name: "managerId"
    },
    {
        message: "What's The Team Manager's Email Addres?",
        name: "managerEmail"
    },
    {
        message: "What's The Team Manager's Office Number?",
        name: "managerNumber"
    },
    {
        type: "list",
        message: "What role would you like to add to your team?",
        name: "nextRole",
        choices: ["Engineer","Intern","None, I'd like to genrate webpage now."]
    },
];
engineerQs = [
    {
        message: "What's The Team Engineer's name?",
        name: "engineerName"
    },
    {
        message: "What's The Team Engineer's Employee ID?",
        name: "engineerId"
    },
    {
        message: "What's The Team Engineer's Email Addres?",
        name: "engineerEmail"
    },
    {
        message: "What's The Team Engineer's GitHub Username?",
        name: "engineerGit"
    },
    {
        type: "list",
        message: "What role would you like to add to your team?",
        name: "nextRole",
        choices: ["Engineer","Intern","None, I'd like to genrate webpage now."]
    },
];
internQs = [
    {
        message: "What's The Team Intern's name?",
        name: "internName"
    },
    {
        message: "What's The Team Intern's Employee ID?",
        name: "internId"
    },
    {
        message: "What's The Team Intern's Email Addres?",
        name: "internEmail"
    },
    {
        message: "What's The Team Intern's Office Number?",
        name: "internNumber"
    },
    {
        type: "list",
        message: "What role would you like to add to your team?",
        name: "nextRole",
        choices: ["Engineer","Intern","None, I'd like to genrate webpage now."]
    },
];

function init(){
    inquirer.prompt(managerQs)
    .then((answers)=>{
        let nwManager= new Manager(answer.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
        membersObjArray.push(newManager);
        checkNextRole(answers);
    })
};

init();