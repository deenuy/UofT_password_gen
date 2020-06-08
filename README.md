# Generate Password Algorithm Implementation using JavaScript
This is a web application to generate a random password based on user-selected input criteria. Front end is desiged using HTML, CSS and Bootstrap with JavaScript for user interaction and algorithm implementation.

Hosted Url: https://deenuy.github.io/UofT_password_gen/

## This repo contains:
* README.md 
* Index.html
* CSS/style.css for custom styling
* scripts/javascript.js for implementaiton logic

## Usage:
The user will be prompted to choose from the following password criteria:
* Length (must be between 8 and 128 characters)
* Character type:
    * Special characters (see examples)
    * Numeric characters
    * Lowercase characters
    * Uppercase characters
    Note: The application requires at least one character type as mandatory. Else will be prompted for valid selection.

Once all prompts are answered, the user will be presented with a random password. User can copy the password using `Copy to Clipboard`.