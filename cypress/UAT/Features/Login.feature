Feature: Login

Scenario Outline: Validating the Login page of HRM

Given User enters the url

When enters username as <username>
And enters password as <password>
And Click on submit
Then Login should be successful
# test data should be given in scenario outline
Examples:
    | username | password |
    | ADmin    | Admin123 |
    | admin    | pass     |
    | Admin    | admin123 |
    | admin    | Admin123 |  