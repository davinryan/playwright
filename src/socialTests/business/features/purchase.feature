Business Need: Purchase from Catalogue

  Background: User is logged in and ready to purchase something

  @social
  Scenario Outline: PURCHASE01 - Purchase an item from the catalogue
    Given customer:1 is logged and on the catalogue screen
    When customer:1 purchases <item>
    Then the users is shown the purchase message <purchaseMessage>
    Examples:
      | item               | purchaseMessage                         |
      | "Graphics Card"    | "You have purchased 'Graphics Card'"    |
      | "USB Key"          | "You have purchased 'USB Key'"          |
      | "Keyboard & Mouse" | "You have purchased 'Keyboard & Mouse'" |


  @social
  Scenario Outline: PURCHASE02 - Purchase an item from the school holidays catalogue
    Given customer:1 is logged and on the catalogue screen
    And available catalogue items are from the school holidays collection
    When customer:1 purchases <item>
    Then the users is shown the purchase message <purchaseMessage>
    Examples:
      | item                 | purchaseMessage                           |
      | "iPhone 20"          | "You have purchased 'iPhone 20'"          |
      | "Dell XPS 7300"      | "Dell XPS 7300'"                          |
      | "External drive 1TB" | "You have purchased 'External drive 1TB'" |

  @social
  Scenario Outline: PURCHASE03 - Purchase an item from the school holidays catalogue
    Given customer:1 is logged and on the catalogue screen
    And available catalogue items are from the school holidays collection using builder pattern
    When customer:1 purchases <item>
    Then the users is shown the purchase message <purchaseMessage>
    Examples:
      | item                 | purchaseMessage                           |
      | "iPhone 20"          | "You have purchased 'iPhone 20'"          |
      | "Dell XPS 7300"      | "Dell XPS 7300'"                          |
      | "External drive 1TB" | "You have purchased 'External drive 1TB'" |

  @social
  Scenario Outline: PURCHASE04 - Fail to refresh catalogue
    Given customer:1 is logged and on the catalogue screen
    When no catalogue items are available due to a server outage
    Then the user is presented with the outage error <outageError>
    Examples:
      | outageError          |
      | "There is currently an outage. Please try again in 10 minutes." |