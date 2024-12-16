// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license=== 'None') {
    return ``
  }else { 
  return `![license badge](https://img.shields.io/badge/license-${license}-blue)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license=== 'None') {
    return ``
  }else { 
  return `* [License](#license)`
  }
  //check if license is none, if so return emtpy string
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license=== 'None') {
    return ``
  }else { 
  return `## License
  This project is licensed with ${license}`
    

  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
${renderLicenseLink(data.license)}
* [Installation](#installtion)
* [Usage](#usage)
* [Contribution](#contribution)
* [Contact Information](#contact information)
* [Walkthough Video](#walkthrough video)
* [Additional Notes](#additional notes)

## Description
${data.description}
${renderLicenseSection(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contribution}

## Contact Information
My GitHub account is [GitHub Account Link](https://github.com/${data.github})
To email me you can contact me at ${data.email}

## Walkthrough Video
Please follow this link for my Screencastify walkthrough

## Additional Notes 
I did recieve tutoring assistance to help with my unerstanding of this assignment. I was having an issue in VS code 
where writeFile was not overwriting my previous ReadMe that I generated. My tutor helped me trouble shoot this issue 
by showing me how to redownload my window in VS code, I also verbally walked through all the code to make sure my conceptual
understanding was accuarate, and I got clarification on ternary operators like the one used in lines 74/75 of my index.js.
`;
}

export default generateMarkdown;
