function renderLicenseBadgeandLink(license) {
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
if(license ==='None'){

  return '';
  // %20 =spaces for urls
  //https://img.shields.io/badge/License-Apache%20License%202.0'-orange
}

if(license =='Apache License 2.0'){
//returns badge when click redirects to license page
  return `[![Apache License 2.0](https://img.shields.io/badge/License-Apache%20License%202.0'-orange)](https://opensource.org/license/apache-2-0/)`;
 
  
}

if(license =='GNU General Public License 3.0'){
  //returns badge when click redirects to license page
  return `[![GNU General Public License 3.0](https://img.shields.io/badge/License-GNU%20General%20Public%20License%203.0-orange)](https://opensource.org/license/gpl-3-0/)`;
  
 
  
}

if(license =='MIT License'){
//returns badge when click redirects to license page
  return `[![MIT License](https://img.shields.io/badge/License-MIT%20License-orange)](https://opensource.org/license/mit/)`;
 
  
}

if(license =='Eclipse Public License 2.0'){
  //returns badge when click redirects to license page
  return `[![Eclipse Public License 2.0](https://img.shields.io/badge/License-Eclipse%20Public%20License%202.0-orange)](https://opensource.org/license/epl-2-0/)`;
 
  
}

if(license =='Mozilla Public License 2.0'){
//returns badge when click redirects to license page
  return `[![Mozilla Public License 2.0](https://img.shields.io/badge/License-GNU%20General%20Public%20License%203.0-orange)](https://opensource.org/license/mpl-2-0/)`;
 
  
}

if(license =='GNU Lesser General Public License v2.1'){
//returns badge when click redirects to license page
  return `  [![GNU Lesser General Public License v2.1](https://img.shields.io/badge/License-GNU%20Lesser%20General%20Public%20License%20v2.1-orange)](https://opensource.org/license/lgpl-2-1/)`;
 
}



}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## BADGES/License🔖
---
${renderLicenseBadgeandLink(data.License)}

## Description 📖
---
> ${data.Description}
## Installation ⚙️
---

> ${data.Install}

## Usage 💻
---

> ${data.Usage}

## Test ✔️
---

> ${data.test}

## Contributions 🧑‍🤝‍🧑
---

> ${data.Contribute}

## Contact me 📇
---
- [Via Email](mailto:${data.email})
- [Via Github](https://github.com/${data.Username})



`;
}

module.exports = generateMarkdown;
