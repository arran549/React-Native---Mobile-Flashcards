import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY2'

export function saveDeck (deck) {
   
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function getDecks () {
    
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
        return JSON.parse(result) || {};
    })

}

export function getDeck (deckId) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
        return JSON.parse(result)[deckId]
    })
}

export function saveCardToDeck(deckId, card) {

    return getDeck(deckId).then(deck => {
        
        deck.cards.push(card)
        saveDeck({[deck.id]: deck}).then(result => {   
            return 
        });
    })
}

