Feature: Registration
    Background: Enter reusable information
        Given I am on "registration" page
        When I fill in the "First name" field with "John"
        And I fill in the "Last name" field with "Doe"
        And I select "Argentina" in the "Country" list
        And I fill in the "Postal code" field with "1437"
        And I fill in the "House number" field with "3039"
        Then no error messages should appear

    Scenario: Register new user with invalid information
        Given I am on "registration" page
        When I fill in the "Date of Birth" field with "3-06-2005"
        And I fill in the "Phone" field with "John"
        And I fill in the "Email" field with "johndoemail.com"
        And I fill in the "Password" field with "invalidpass"
        And I press "register" button
        Then I should be in "registration" page
    
    Scenario: Register new user with valid information
        Given I am on "registration" page
        When I fill in the "Date of Birth" field with "2005-06-13"
        And I fill in the "Phone" field with "1122334455"
        And I fill in the "Email" field with "johndoe@mail.com"
        And I fill in the "Password" field with "ValidPa$s1"
        And I press "register" button
        Then I should be in "login" page

<------------------------------------------------------>

Feature: Login

    Scenario Outline: Login with invalid credentials
        Given I am on "login" page
        When I fill in the "email" field with "<email>"
        And I fill in the "password" field with "<password>"
        And I press "login" button
        Then Error message should say "<message1>"
        But It could also say "<message2>"
        Examples:
            | email             | password      | message1                      | message2              |
            | johndoe.mail.com  |               | "Email format is invalid"     | "Password is required"|
            | johndou@gmail.com | ValidPa$s1    | "Invalid email or password"   | 
            | johndoe@gmail.com | invalidpass   | "Invalid email or password"   |

    Scenario: Login with valid credentials
        Given I am on "login" page
        When I fill in the "email" field with "johndoe@mail.com"
        And I fill in the "password" field with "ValidPa$s1"
        And I press "login" button
        Then I should be in "my account" page

<------------------------------------------------------>

Feature: Product details page
    Scenario: Add item to cart
        Given I am on "pliers" "product details" page
        When I click on "Add to Cart" button
        And I go to "cart" page 
        Then product title should be "pliers"

    Scenario: Add item to favorites
        Given I am on "pliers" "product details" page
        When I click on "Add to favorites" button
        And I go to "favorites" page 
        Then product card title should be "pliers"

<------------------------------------------------------>

Feature: Favorites
    Scenario: Add item to favorites
        Given I am on "Hammer" "product details" page
        When I click on "Add to favorites" button
        And I go to "favorites" page 
        Then product card title should be "Hammer" 

    Scenario: Remove item from favourites
        Given I am on "favorites" page
        And product card title is "Hammer"
        When I click on "X" button
        Then text should contain "There are no favorites yet."

<------------------------------------------------------>

Feature: Cart
    Background: Add item to cart
        Given I am on "screws" "product details" page
        When I click on "Add to Cart" button
        And I go to "cart" page 
        Then product title should be "screws"

    Scenario Outline: Update item quantity in cart
        Given I am on "cart" page
        And product title is "screws"
        When I change the quantity of the item to "<quantity>"
        Then the quantity of the item in the cart should be updated to "<newQuantity>"
        But message could say "<message>"

        Examples:
            | quantity  | newQuantity | message                                     |
            | 0         | 1           | "Product quantity updated."                 |
            | 1000000000| 99          | "You can order at most 99 of this product". |
            | -1        | 1           | "Product quantity updated."                 |
            | 1         | 1           | 

    Scenario: Remove item from cart
        Given I am on "cart" page
        And product title is "screws"
        When I click on "X" button
        Then text should contain "The cart is empty. Nothing to display."
<------------------------------------------------------>

Feature: User profile page
    Scenario Outline: Change password
        Given I am on "profile" page
        When I go to "Password" section
        And I fill in the current password field with "<current>"
        And I fill in the New password field with "<new>"
        And I fill in the confirm password field with "<confirm>"
        And I click on "change password" button
        Then message should say "<message>"

    Examples:
        | current       | new           | confirm       | message                                     |
        | ValidPa$s1    | valid         | validPass     | "Unaurthorized"                             |
        | ValidPass     | ValidPa$s2    | ValidPa$s2    | "Unauthorized"                              |
        | ValidPa$s1    | ValidPass     | ValidPass     | "Unauthorized"                              |
        | ValidPa$s1    | ValidPa$s2    | ValdPa$s2     | "Your password is successfully updated!"    |

<------------------------------------------------------>

Feature: Checkout
    Background: go to payment page
        Given I am on "cart" page
        When I click on "checkout" button
        And I click on "checkout" button
        And I enter "3039" on "House number" field
        And I click on "checkout" button
        Then I am on "payment" page

    Scenario: Buy items in cart without filling with credit card information
        Given I am on "payment" page
        When I select "credit card" on "payment method" list
        And I click on "confirm" button
        Then message should say "Unknown error"

    Scenario: Buy items in cart filling with invalid credit card information
        Given I am on "payment" page
        When I select "credit card" on "payment method" list
        And I fill in the "card number" field with "11112222333344"
        And I fill in the "expiration date" field with "2026-11"
        Then "card number" field message should say "Invalid card number format."
        And "expiration date" field message should say "Invalid date format. Use MM/YYYY."    

    Scenario: Buy items in cart filling with valid credit card information
        Given I am on "payment" page
        When I select "credit card" on "payment method" list
        And I fill in the "card number" field with "1111-2222-3333-4444"
        And I fill in the "expiration date" field with "11/2027"
        And I fill in the "cvv" field with "123"
        And I fill in the "name" field with "John Doe"
        And I click on "confirm" button
        Then message should say "Payment was successful"


<------------------------------------------------------>

Feature: Product filters
    Scenario Outline: Filter products by category
        Given I am on "home" page
        When I click on "<category>" filter
        Then Product card attributes should contain "<category>"
        But Product card titles could contain "<category>"

        Examples: 
            | category |
            | Wrench   |
            | Sander   |
            | Other    |

<------------------------------------------------------>

Feature: Product search
    Scenario: Search specific product
        Given I am on "home" page
        When I click on "search" field
        And I write "combination pliers" in "search" field
        And I click on "search" button
        Then 1 product should be found
        And product card title should be "Combination Pliers"

<------------------------------------------------------>

Feature: Language change
    Scenario: Change language to spanish
        Given I am on "home" page
        When I click on "language" button
        And I click on "ES" button
        Then "home" button should say "inicio"

<------------------------------------------------------>

Feature: Product sort
    Scenario: Sort products alphabetically from A to Z
        Given I am on "home" page
        When I click on "sort" list
        And I click on "Name (A-Z)" button
        Then First product card title should be "Adjustable Wrench"
        And Last product card title should be "Wood Saw"