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
* [Contact Information]
* [Link to Walkthough Video]

## Description
${data.description}
${renderLicenseSection(data.license)}

## Installation
${data.installation}

## Usage
${data.usage}

## Contact Information
My GitHub account is [GitHub Account Link](https://github.com/${data.github})
To email me you can contact me at ${data.email}

`;
}

export default generateMarkdown;
