Feature: Submit Form on Testcafe Example

Scenario: As a User, I want to be able to submit form on Web Example Testcafe
    Given User has navigated into Web Testcafe
    When User fill "DHONY" on field YourName
        And User click button submit 
    Then User will see page ThankYou with their name