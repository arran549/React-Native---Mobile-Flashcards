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

export function createNewDeck (deck) {
    return {
        type: CREATE_NEW_DECK,
        deck
    }
}

export function receiveDecks(decks) {
    return {
        type: RECIEVE_DECKS,
        decks
    }
}