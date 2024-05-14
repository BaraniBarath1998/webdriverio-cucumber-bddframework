Feature: Finding and doing actions on elements directly on particular page android native feature test

Scenario: select directly App Alert Dialouge box and do operation
    Given Access the App Alert Dialouge box directly
    When Click repeat alarm button
    Then Verify repeat alarm popup is coming

# Scenario: Working with Dialouge and alert box
#     Given Access the App Alert Dialouge box directly
#     When click on okcancel dialogue with message 
#     Then verify the alert box 

# Scenario: vertical scrolling in app - Run independent
#     Given Access the App Activity page
#     When Scrool to the Security surfaces in the page
#     Then verify Security surface options

# Scenario: Horizontal scrolling in app 
#     Given Access the Gallary page directly
#     When Scrool to any one of the image horizontally 

Scenario:Scroll and Picking the date
    Given Access the Date widget dialog box
    When Get the currentdate and change the date

