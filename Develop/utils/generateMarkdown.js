const generateMarkdown = function({title, detail, install, usage, license, contributors, user}) {
  let licensePick = `${license}`;
  let licenseLink = '';
  if (licensePick === 'Mozilla') {
    licensePick = 'MozillaPublicLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/mpl-2.0/';
  };
  if (licensePick === 'Apache') {
    licensePick = 'ApacheLicense2.0';
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/';
  };
  if (licensePick === 'MIT') {
    licensePick = 'MITLicense';
    licenseLink = 'https://choosealicense.com/licenses/mit/';
  };

return (`
#${title}
![badge](https://img.shields.io/badge/license-${license}-brightorange)
## Description of project
${detail}
## How to install
${install}
## What the project is used for
${usage}
## License:
${license}
Permission to use this application is granted under the ${license} license. ${licenseLink}
## People who have contributed to this project
${contributors}
## Created By:
[GitHub link: ${user}](https://github.com/${user})
  `)}

module.exports = generateMarkdown;