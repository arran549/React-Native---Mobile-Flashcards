import { CREATE_NEW_DECK, ADD_CARD_TO_DECK, RECIEVE_DECKS }  from '../actions'

function decks (state = { }, action) {

    

    switch(action.type) {
        case RECIEVE_DECKS : 
            return {
                ...state,
                ...action.decks
            }
        case CREATE_NEW_DECK :
            return {
                ...state,
                ...action.deck                
            }
        case ADD_CARD_TO_DECK :

            const deck = state[action.deckId]

            
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    cards: [ ...deck.cards, action.card]
                }
            }
        default : 
            return state
    }
}

export default decks;

