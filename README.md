## Automated API tests

This repository contains automated API tests for the provided task.

## Pre-requisites

- Node.js 16+

## Running tests locally

#### Clone this repository
```bash 
got clone git@github.com:ekeminiudoh/API-TEST--PLAYWRIGHT.git
```

#### navigate to the project directory
```bash
cd API-TEST--PLAYWRIGHT
```

#### Install dependencies
```bash
npm install
```

#### Run test 
<!-- Describe that the command below will run the test, generate report and open it on the browsers -->
To run the tests, run the following command. This command will run the tests, generate a report and open it on the browser.

```bash
npx playwright test
```

### Generate report
<!-- Describe the use of playwright reporting. -->
I used the default playwright reporting to generate a report after running the tests. To generate the report, run the following command after running the tests.

```bash
npx playwright show-report
```

 The report will be saved in the `/playwright-report` directory.

 
 

## Running tests in Github CI/CD
The CI/CD pipeline is configured in the `.github/workflows/playwright.yml` file to run the automated test on GitHub using the playwright Docker container runner.

To run the tests in GitHub CI/CD, push the code to the repository and the pipeline will be triggered automatically.




## Authors
| 👤 Name      | Github                                         | GitLab                                         | LinkedIn                                                 |
|--------------|------------------------------------------------|------------------------------------------------|----------------------------------------------------------|
| Ekemini Udoh | [@ekeminiudoh](https://github.com/ekeminiudoh) | [@ekeminiudoh](https://gitlab.com/ekeminiudoh) | [@EkeminiUdoh](https://www.linkedin.com/in/ekeminiudoh/) |

## 🤝 Contributing
Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/ekeminiudoh/UI-TEST-PLAYWRIGHT/issues).

## Show your support
Give a ⭐️ if you like this project!

## Acknowledgments
- [Playwright](https://playwright.dev/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [GitHub CI/CD](https://docs.github.com/ee/ci/)
- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/)
- [JavaScript](https://www.javascriptlang.org/)

