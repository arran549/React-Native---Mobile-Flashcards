import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextButton from './TextButton'
import AddCardView from './AddCardView'
import { connect } from 'react-redux'

class DeckOverview extends Component {
    render () {
        return (
            <View>
            <View>
                <Text>Udacity Flash Cards</Text>
                <Text>{this.props.numberOfCards} Cards</Text>
                
                <TextButton>ADD NEW CARD</TextButton>
                <TextButton>START QUIZ</TextButton>

            </View>
            <View>
                <AddCardView />
            </View>
            </View>
        )
    }
}

function mapStateToProps (state, { deckId }) {
    return {
        numberOfCards: state[deckId].cards.length
    }
}


export default connect(mapStateToProps)(DeckOverview)