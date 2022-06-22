# cypress-example

## Task description

### UI Testing

Ex. Please automate 2 included scenarios using any Javascript framework you feel the most
comfortable with.
Test scenarios:

1. Open 10C home page ('https://10clouds.com/')
2. Open Careers tab
3. Validate that there is exactly 1 'Senior QA Automation Engineer' role open

4. Open 10C home page ('https://10clouds.com/')
5. Open Careers tab
6. Select “QA” from “All departments” dropdown.
7. Validate that each result contains "QA Automation" or “QA Engineer” in the title

## How to run tests locally

- run `npm install`
- run `npm run test` or `npx cypress open`

## Reporting

Reporter: [mochawesome](https://www.npmjs.com/package/mochawesome)  
Report file: `/reports/mochawesome.html`

## GitHub Actions

[E2E tests workflow](https://github.com/vit-ganich/10cloud-test-task-ui/actions/workflows/ci.yml)
