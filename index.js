const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'appName',
      message: 'What is your App name or the title of your porject?',
    },
    {
      type: 'input',
      name: 'propose',
      message: 'Please write a brief introduction as to what you project does.',
    },
    {
      type: 'input',
      name: 'technology',
      message: 'What technologies and or languages did you use',
    },
    {
      type: 'input',
      name: 'site',
      message: 'Please provide an active link to your site',
    },
    {
      type: 'input',
      name: 'repo',
      message: 'Please provide a link to your repo',

    },
    {
      type: 'input',
      name: 'screenshots',
      message: 'Please provide the relative path to the screenshot of your project.',
    },
    {
      type: 'input',
      name: 'assistance',
      message: 'Please provide the names of your study group',
    },
    {
      type: 'input',
      name: 'contact',
      message: 'Please provide your contact information',
    },
  ]);
};

const generateDoc = (answers) =>
  `
   #Hi! My Project name is  ${answers.appName}

     ${answers.propose}
    
      Technolgies used: ${answers.technology}
      Active Site: ${answers.site}
      Repo: ${answers.repo}
      Screenshot: ![Screenshots](${answers.screenshots})
      People who I worked with to complete the project: ${answers.assistance}</li>
      My contact information: ${answers.contact}
   `;

// Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('Read-Me.md', generateDoc(answers)))
    .then(() => console.log('Successfully wrote to Read-Me file'))
    .catch((err) => console.error(err));
};

init();