import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY2'

export function saveDeck (deck) {
    
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        deck
     }))
}

export function getDecks () {

    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
        return JSON.parse(result).deck || {};
    })

}