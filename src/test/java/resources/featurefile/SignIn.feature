Feature: Sign In Page Test
  I should be able to sign in successfully
  @sanity  @regression
  Scenario: I should navigate to sign in page successfully
    Given I click on signIn link
    Then I should verify "AUTHENTICATION" authentication message is displayed
  @smoke @regression
  Scenario Outline: Verify the error message with Invalid Credentials
    Given I click on signIn link
    When I enter username "<username>"
    And I enter password "<password>"
    And I click on signIn button
    Then verify the error message "<message>"

    Examples:
      | username       | password | message                    |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |
    @smoke @regression
    Scenario: Verify that user should log out successfully
      When I click on signIn link
      And I enter username "lil12@gmail.com"
      And I enter password "Prime123"
      And I click on signIn button
      And I click on SignOut button
      Then verify that signIn "Sign in" link is displayed
    @regression
    Scenario: Verify user should logIn successfully with valid credentials
      When I click on signIn link
      And I enter username "lil12@gmail.com"
      And I enter password "Prime123"
      And I click on signIn button
      Then I verify SignOut Link is displayed "Sign out"
