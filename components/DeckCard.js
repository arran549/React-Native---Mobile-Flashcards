import React, { Component } from 'react';
import { Text, View, StyleSheet, Platform, TouchableOpacity } from 'react-native'
import Title from './Title'
import { white, gray } from '../utils/colors'

class DeckCard extends Component {

    render () {

        const { deck } = this.props
        const { navigate } = this.props.navigation
        
        return (
            <View style={[styles.item]}>
                <TouchableOpacity onPress={() => navigate('DeckOverview', { deckId: deck.id })}>
                    <Title key={deck.id} title={deck.name}></Title>
                    <Text style={{fontSize: 16, color: gray}}>
                                {deck.cards.length} Cards
                            </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default DeckCard

const styles = StyleSheet.create({
    label: {
        
    },
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
})
