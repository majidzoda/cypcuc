Feature: Log in

Scenario: Successful log in
Given I browse Aspen website
When I input my username and password
    | username                      | password   |
    | fmajidzoda@merceradvisors.com | Mercer123$ |
And Click on Login button
Then I should land on the home page