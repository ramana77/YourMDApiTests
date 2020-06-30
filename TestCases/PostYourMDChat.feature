@PostYourMD @API
Feature: YourMD Chat Tests

 Scenario Outline: Post yourMD chat and validate response code
    Given user sends a post request  with valid inputs and checks the "<ResponseCode>" and validates
      | Hint             | Value                                   |
      | Type a message … | I'm sorry, that selection isn't valid. |

    Examples: 
      | ResponseCode |
      |          200 |

 Scenario Outline: Post yourMD chat with invalid headers and  validate response code
    Given user sends a post request with invalid headers and checks the "<ResponseCode>"
    
    Examples: 
      | ResponseCode |
      |          403 |  
      
 Scenario Outline: Post yourMD chat with invalid body and  validate response code
    Given user sends a post request with invalid body and checks the "<ResponseCode>"
    
    Examples: 
      | ResponseCode |
      |          403 |    