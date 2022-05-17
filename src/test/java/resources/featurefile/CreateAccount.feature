Feature: Create account page
  @sanity @smoke @regression
  Scenario: verify user should create account successfully
    Given I click on signIn link
    When I enter emailAddress "email" in email field
    And I click on create account button
    And I click on Title "Mr."
    And I enter firstName "Miles"
    And I enter lastname "lan" in lastname field
    And I enter password "354738" in password field
    And I enter firstName "Miles" in address field
    And I enter lastName "lan" in address field
    And I enter address "11 king street" in address filed
    And I enter city "London" in city field
    And I select State "Florida" from state dropdown
    And I enter postalCode "23456" in postcode field
    And I enter Mobile "9898989898" in mobile field
    And I enter "11 king street" in future reference field
    And I click on register field
    Then I verify My account message "MY ACCOUNT"






