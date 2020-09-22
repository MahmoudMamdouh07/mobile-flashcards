import { AsyncStorage } from "react-native";
const FLASHCARDS = "FlashCards";
export function fetchAllDecks() {
  return AsyncStorage.getItem(FLASHCARDS)
    .then((decks) => Object.values(JSON.parse(decks)))
    .catch((err) => console.log(err));
}

export function deleteAllDecks() {
  return AsyncStorage.clear();
}

export function addDeck(deck) {
  return AsyncStorage.mergeItem(
    FLASHCARDS,
    JSON.stringify({ [deck.title]: deck })
  );
}

export async function addCard(title, card) {
  const decks = await AsyncStorage.getItem(FLASHCARDS);
  const deck = JSON.parse(decks)[title];
  await AsyncStorage.mergeItem(
    FLASHCARDS,
    JSON.stringify({
      [title]: {
        questions: deck.questions.concat([card]),
      },
    })
  );
}
