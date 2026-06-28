# Random Password Generator

A simple Random Password Generator built using HTML, CSS and JavaScript.

This project generates secure random passwords based on the options selected by the user. Users can choose the password length and include uppercase letters, lowercase letters, numbers, and special characters. The project also shows password strength, stores recent passwords, and allows copying the password with one click.

## Features

* Generate random passwords
* Select password length using a range slider
* Include:

  * Uppercase Letters
  * Lowercase Letters
  * Numbers
  * Symbols
* Password strength indicator
* Progress bar based on password strength
* Show/Hide password
* Copy password to clipboard
* Stores the last 5 generated passwords using Local Storage
* Clear password history

## Technologies Used

* HTML
* CSS
* JavaScript
* Local Storage

## Project Structure

```text
Random-Password-Generator/
│
├── index.html
├── style.css
└── script.js
```

## How It Works

1. Select the password length using the slider.
2. Choose the character types you want to include.
3. Click the **Generate Password** button.
4. The password is created instantly.
5. Check the password strength and progress bar.
6. Copy the password using the Copy button.
7. The generated password is saved in the history.
8. Only the latest 5 passwords are stored in Local Storage.

## What I Learned

While building this project, I learned:

* DOM Manipulation
* Event Listeners
* Working with Strings
* Random Password Generation
* Input Validation
* Local Storage
* Clipboard API
* Async and Await
* JavaScript Functions
* Dynamic UI Updates

## Future Improvements

* Auto-generate password when settings change
* Add password statistics
* Add password entropy score
* Improve mobile responsiveness
* Add custom password options

## Author

Monu Kumar
