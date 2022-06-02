// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return (`* [${license} License] (#license)`)
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `<h2 id='license'>License</h2>
      Copyright © ${license}. All rights reserved.
      
      Lincensed under the ${license} license.`
    )
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  #${data.title} 
  ## Description
  ${data.description}
  ## Installation
  ${data.installNotes}
  ## Usage
  ${data.usageInfo}
  ## Contact
  ${data.github}
  ${data.email}

`;
}

module.exports = generateMarkdown;
