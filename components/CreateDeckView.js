import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { addCardToDeck, createNewDeck } from '../actions'
import { v1 as uuid } from 'uuid'

class CreateDeckView extends Component {

    state = {
        name: 'Udacity',
    }

    addDeck = () => {

        const { name } = this.state

        const id = uuid()

        const deck = {
             [id]: {
                    id,
                    name,
                    cards: []
             },
        }

        this.props.addDeck(deck)
        //console.log("navigate to deck overview", deck)
        this.props.navigation.navigate('DeckOverview', { deckId: id})
    }

    render () {
        return (
            <View>
                <Text style={{fontSize: 20, marginTop: 20, padding: 10}}>
                    Create New Deck
                </Text>
                <View style={{marginTop: 20, padding: 10}}>
                <Text>Name of Deck</Text>
                <TextInput  style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10}}
                            onChangeText={(text)=> this.setState({ name: text })} value={this.state.name} />
                </View>
                <TextButton onPress={this.addDeck}>SUBMIT</TextButton>
            </View>
        )
    }
}

function mapStateToProps (state) {
    return {

    }
}

function mapDispatchToProps (dispatch) {
     return {
        addDeck: (deck) => dispatch(createNewDeck(deck))
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckView)