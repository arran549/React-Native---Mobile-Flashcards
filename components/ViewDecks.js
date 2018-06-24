import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'
import DeckCard from './DeckCard'
import Title from './Title'

class ViewDecks extends Component {
    render () {

        const { navigation } = this.props

        return (
           
            <View>
                <Title title="Decks" />
                {
                    this.props.decks.map(deck => (<DeckCard key={deck.id} deck={deck} navigation={navigation}></DeckCard>))
                }
            </View>
        )
    }
}

function mapStateToProps (state) {
    return {
        decks: Object.values(state)
    }
}

export default connect(mapStateToProps)(ViewDecks)
