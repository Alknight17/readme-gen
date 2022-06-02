
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub License](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}


function renderLicenseLink(license) {
  if (license !== "None") {
    return (`* [${license} License] (#license)`)
  }
  return ''
}


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
  <h1 id='title> ${data.title} </h1>

  ${renderLicenseBadge(data.license)}

  <h2 id='contents'> Table of Contents </h2>

  * [Description](#description)\n
  ${renderLicenseLink(data.license)}\n
  * [Installation](#installation)\n
  * [Usage](#usage)\n 
  * [Tests](#tests)\n
  * [Contributors](#contributors)\n
  * [Contact](#contact) 

  <h2 id='description'> Description </h2>
  ${data.description}

  ${renderLicenseSection(data.license)}

  <h2 id='installation'> Installation </h2>
  ${data.installNotes}

  <h2 id='usage'> Usage </h2>
  ${data.usageInfo}

  <h2 id='tests'> Tests </h2>
  ${data.testNotes}

  <h2 id='contribution'> Contribution </h2>
  ${data.contribNotes}

  <h2 id='contact'> Contact </h2>
  <p> Email :${data.email}

  GitHub:${data.github} </p>

`;
}

module.exports = generateMarkdown;
