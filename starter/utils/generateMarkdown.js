// function to generate markdown for README

function generateMarkdown(data) {
  let license = data.license;
  if (license === 'MIT') {
  } else if (license === 'ISC') {
  } else if (license === 'Apache') {
  } else if (license === 'GPL') {
  } else if (license === 'BSD') {
  } else if (license === 'None') {
  };


  return `# ${data.title}

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Contribution](#contributing)
5. [Tests](#tests)
6. [GitHub](#github)
7. [Email](#email)
8. [License](#license)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contributionGuidelines}

## Tests
${data.testing}

## GitHub
${data.github}

## Email
${data.emailAddress}

## License
This application is covered under ${data.license} license. Please see the repo for full license.


`;

};

module.exports = { generateMarkdown };

