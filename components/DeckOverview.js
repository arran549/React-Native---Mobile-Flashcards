import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextButton from './TextButton'
import AddCardView from './AddCardView'
import { connect } from 'react-redux'
import Title from './Title'

class DeckOverview extends Component {

    shouldComponentUpdate (nextProps) {
        return nextProps.deck !== undefined
    }
    
    render () {

        const { deck } = this.props

        return (
            <View>
                <View>
                    <Title title={deck.name} />
                    <Text>{deck.cards.length} Cards</Text>
                    
                    <TextButton onPress={() => this.props.navigation.navigate('AddCardView', { deckId: deck.id })}>ADD CARD</TextButton>
                    <TextButton onPress={() => this.props.navigation.navigate('QuizView', { deckId: deck.id})}>START QUIZ</TextButton>

                </View>
            </View>
        )
    }
}

function mapStateToProps (state, { navigation }) {

    const { deckId } = navigation.state.params;

    return {
        deck: state[deckId]
    }
}


export default connect(mapStateToProps)(DeckOverview)