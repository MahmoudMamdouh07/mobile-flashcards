export const ADD_CARD = "ADD_CARD";

export function submitCard(deckId, card) {
  return {
    type: ADD_CARD,
    deckId,
    card,
  };
}
