export const CREATE_NEW_DECK = 'CREATE_NEW_DECK'
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK'
export const RECIEVE_DECKS = 'RECEIVE_DECKS'

export function addCardToDeck (card, deckId) {
    return {
        type: ADD_CARD_TO_DECK,
        card,
        deckId
    }
}