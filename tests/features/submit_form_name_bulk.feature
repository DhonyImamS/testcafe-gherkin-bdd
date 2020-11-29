Feature: Submit Bulk Name at Form Testcafe Example

@all @bulkScenario
Scenario Outline: As a User, I want to be able to submit Bulk Name on Web Example Testcafe
    Given User has navigated into Web Testcafe
    When User fill "<UserName>" on field YourName
        And User click button submit 
    Then User will see page ThankYou with their name
Examples:
    | UserName | 
    | DHONY  | 
    | DHONY IMAM  | 
    | DHONY IMAM SAPUTRA  | 