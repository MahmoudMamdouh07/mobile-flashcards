import {
  ADD_DECK,
  RECEIVE_DECKS,
  REMOVE_DECKS,
  REMOVE_DECK,
} from "../actions/decks";
import { ADD_CARD } from "../actions/card";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck,
      };
    case ADD_CARD:
      const { deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          questions: state[deckId].questions.concat([card]),
        },
      };
    case REMOVE_DECKS:
      return null;
    default:
      return state;
  }
}
