Feature: Login functionality
  @wip @smoke
  Scenario: User should not be able to login with unvalid credentials
    Given User navigate to homepage
    When Enter invalid credentials
    Then Click the login button
    Then Verify that user could not login
  @db
  Scenario: User should not be able to login with unvalid credentials-2
    Given User navigate to homepage
    When Enter invalid credentials - second one
    Then Click the login button
    Then Verify that user could not login - second one

