# Moble-Flashcards Udacity's 3rd Project of React Nanodegree

This is the 3rd and final project in react nanodegree provided by Udacity. This project is a mobile app built using React Native that allows a user to make decks of certain titles. add cards to each deck that has a question and answer. and a possiblity to quiz on these answers. currently the answers should be using true or false. for example: question: Am I right? ->> answer: false. No one is ever right.

## 🚀 How to use

- Install using create-react-native-app

## Required Packages

- redux react-redux @react-navigation/stack @react-navigation/native react-native-gesture-handler @react-navigation/bottom-tabs

## Components

- AddCard.js => used to add a card to a specific deck
- AddDeck.js => to add a deck to the list of decks
- Deck.js => a deck component that is in a list of decks
- Decks.js => the list of all decks
- DeckInformation.js => contains the title and number of cards in a deck
- Home.js => contains components in the bottom tab
- Quiz.js => the quiz screen for a specific deck
- SubmitBtn.js => a repeated button in multiple components
- UdaciCards => the screen that contains a deck's title and ability to add new deck and to start a quiz
