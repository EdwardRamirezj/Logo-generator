const inquirer = require('inquirer');
const fs = require('fs');
const {logoGenerator} = require('./shapes.js');


//prompt user with 3 charater length text, text color, shape, shape color

inquirer
.prompt([
    {
        type: 'input',
        message: 'Enter text (3 characters max)',
        name:'text'
    },
    {
        type:'input',
        message:'Enter text color',
        name: 'textcolor'
    },
    {
        type:'list',
        message:'Choose the following shape for your logo',
        name: 'shape',
        choices: [
            {title:'square', value:'square'},
            {title:'circle', value:'circle'},
            {title:'triangle', value:'triangle'},
        ],
    },
    {
        type:'input',
        message:'Enter color for selected shape',
        name:'shapecolor',
   },
])
.then((response) => {
    logoContent = logoGenerator(response);
    fs.writeFile('logo.svg', logoContent, (err) =>
    err ? console.error(err) : console.log('Success!logo.svg has been created')
    )
   
}) 
