import { AsyncStorage } from 'react-native'

const DECKS_STORAGE_KEY = 'DECKS_STORAGE_KEY2'

export function saveDeck (deck) {
    
   //alert(JSON.stringify(deck))
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck))
}

export function getDecks () {
    //AsyncStorage.clear()
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
    // return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
    //     alert( result)
    // })


    return getDeck(deckId).then(deck => {
        //alert(JSON.stringify(card))

        

        deck.cards.push(card)
        deck.cards.push(card)

        alert(JSON.stringify(deck))
        //alert(JSON.stringify(deck))
        saveDeck(deck).then(result => {   
            return 
        });
    })
}

