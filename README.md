**Author: Maura Webber**
This is the front-end of Trackle.

# Trackle
Trackle is an app that a lets you log in and track your wordle word, the date that you guessed it and the number of guesses that it took you to guess it. 
It will then show you your average number of guesses. Users have the ability to update the word, number of guesses, and date guessed and or delete the wordle log. Users can also see other users wordle logs. 

## App Images 
### APP Landing Page
![App Landing Page](https://i.imgur.com/LvmPgMJ.png)
### Signed in Landing Page
![Signed In Landing Page](https://i.imgur.com/lh3W0bt.png)
### Create Wordle Log Page
![Create Wordle Log Page](https://i.imgur.com/BhptplM.png)

## Important Links

  - [Client repo](https://github.com/mauramaybe11/trackle-client)
  - [API repo](https://github.com/mauramaybe11/trackle-back-end)
  - [Deployed Client](TBH)
  - [Deployed API](TBH)

***

## Wire Frame

![Trackle WireFrame](https://i.imgur.com/PMpKN5I.png)
![Trackle WireFrame Logged In](https://i.imgur.com/LKD8VCW.png)


## Planning Story

1. Design ERD and Wire-frame
2. POST a Wordle Log through our API and Using Django on back end
3. GET all the Wordle logs from a single user
4. GET all the Wordle Logs for all users
5. GET a single Wordle Log for the user that owns the log. 
1. DELETE wordle log that the owner created
2. PATCH updated word, number of gueses, or date guessed by the owner
3. Styled project

### User Stories

  - As an unregistered user, I would like to sign up with email and password.
  - As a registered user, I would like to sign in with email and password.
  - As a signed in user, I would like to change password.
  - As a signed in user, I would like to sign out.
  - As a signed in user, I would like to create a wordle log that includes word guessed, number of guesses, date word was guessed.
  - As a signed in user, I would like to update name, date guessed, number of guesses.
  - As a signed in user, I would like to see all my wordle logs.
  - As a signed in user, I would like to see a single wordle log.
  - As a signed in user, I would like to delete a wordle log from teh database.
  - As a signed in user, I would like to see the following data for a single wordle log
    - word
    - number of guesses
    - date word guessed
    - date updated
    - date modified
  
### Technologies Used

Front End: 
- Javascript
- CSS
- HTML
- SASS
- Visual Studio Code
- AXIOS
- React
- React-Bootstrap
- React-Router-DOM
- Modal

Back End: 
- Django
- Psql

## Installation 
1. Fork and Clone the Repository 
2. Checkout to a  new branch 
3. Run ```npm install``` to install the needed dependencies
4. Run ```npm start```
5. Your site will now be running at http://localhost:7165

## Future Versions
-Create other games on the back and front end so that you can log other games like Quordle, Nerdle, Hexle


## ERD
![Trackle API ERD](https://i.imgur.com/Q110qH5.png)