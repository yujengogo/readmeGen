// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {
    case "Apache 2.0 License":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      break;
    case "BSD 3-Clause License":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      break;
  }

}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0 License":
      return "[https://opensource.org/licenses/Apache-2.0";
      break;
    case "Boost Software License 1.0":
      return "https://www.boost.org/LICENSE_1_0.txt";
      break;
    case "BSD 3-Clause License":
      return "https://opensource.org/licenses/BSD-3-Clause";
      break;
  }
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  switch (license) {
    case "Apache 2.0 License":
      return "The Apache License 2.0 outlines what users are allowed to do with the licensed code. Under this license, users can: Use the code commercially: Companies can include the licensed code in proprietary software that they then sell to customers";
      break;
    case "Boost Software License 1.0":
      return "Boost is a set of libraries for the C++ programming language that provides support for tasks and structures such as linear algebra, pseudorandom number generation, multithreading, image processing, regular expressions, and unit testing.";
      break;
    case "BSD 3-Clause License":
      return "The BSD 3-clause license allows you almost unlimited freedom with the software so long as you include the BSD copyright and license notice in it (found in Fulltext). You may not use the names of the original company or its members to endorse derived products.";
      break;
  }
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.yourProjectTitle}
        
  ## Description
  
  -${data.description1}
  -${data.description2}
  -${data.description3}
  -${data.description4}

  
  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
 
  
  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}
  
  
  ## Badges
  
  ${renderLicenseBadge(data.license)}
  

  ## Features
  
  ${data.feature1}

  ${data.feature2}

  ${data.feature3}
  
  
`;
};

module.exports = generateMarkdown;
