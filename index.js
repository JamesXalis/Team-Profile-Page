const fs = require("fs");
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");



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

const teamMembersArray = [];


function init(){
    inquirer.prompt(managerQs)
    .then((answers)=>{
        let newManager= new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
        teamMembersArray.push(newManager);
        checkNextRole(answers);
    })
};
function engineerPrompt(){
    inquirer.prompt(engineerQs)
    .then((answers)=>{
        let newEngineer= new Engineer(answers.EngineerName, answers.EngineerId, answers.EngineerEmail, answers.EngineerGit);
        teamMembersArray.push(newEngineer);
        checkNextRole(answers);
    })
};
function internPrompt(){
    inquirer.prompt(internQs)
    .then((answers)=>{
        let newIntern= new Intern(answers.internName, answers.internId, answers.internEmail, answers.internGit);
        teamMembersArray.push(newIntern);
        checkNextRole(answers);
    })
};

function checkNextRole(answers){
    if (answers.nextRole === "Engineer") engineerPrompt();
    else if (answers.nextRole === "Intern")internPrompt();
    else{
        fs.writeFile("./dist/index.html", generateHTML(sortMembers(teamMembersArray)), (err) => err ? console.log("failed") : console.log("success"))
    }
};



init();