Business Need: Purchase from Catalogue

  Background: User is logged in and ready to purchase something

  @social
  Scenario Outline: PURCHASE01 - Purchase an item from the catalogue
    Given customer:1 is logged and on the catalogue screen
    When customer:1 selects <item> to purchase
    And clicks the purchase button
    Then the users is shown the purchase message <purchaseMessage>
    Examples:
      | item   | purchaseMessage                      |
      | "Shoe" | "You have purchased the item 'Shoe'" |