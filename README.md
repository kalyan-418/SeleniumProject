Feature file of OUTLOOK
Feature: Outlook Email Interaction

  Scenario: Open Outlook, verify credentials, open an email, and send a reply
    Given I have Outlook application installed on my machine
    When I open Outlook
    Then I should see the login screen
    When I enter valid credentials
    And I click the "Sign In" button
    Then I should be successfully logged in
    And the inbox should be displayed
    When I open an email from the inbox
    Then the email content should be visible
    When I click the "Reply" button
    And I enter a reply message
    And I click the "Send" button
    Then my reply should be sent successfully
    And I should see a confirmation that the reply was sent
