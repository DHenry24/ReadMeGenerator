const fs = require('fs');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions for your project:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information for your project:',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide contribution guidelines for your project:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions for your project:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please choose a license for your project:',
      choices: ['MIT', 'Apache', 'GPL', 'BSD'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ])
  .then((answers) => {
    const licenseBadgeUrl = `https://img.shields.io/badge/license-${encodeURIComponent(answers.license)}-blue.svg`;

    const readmeContent = `# ${answers.title}

![License](${licenseBadgeUrl})

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} license.

## Questions
For additional questions, please contact ${answers.email}. Visit my GitHub profile to see my other projects.`;

    fs.writeFile('README.md', readmeContent, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README.md generated!');
      }
    });
  });