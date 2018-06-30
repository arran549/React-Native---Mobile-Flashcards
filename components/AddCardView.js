import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'
import { saveCardToDeck } from '../utils/api'

class AddCardView extends Component {

    state = {
        question: 'When was udacity founded?',
        answer: 'something'
    }

    addCard = () => {

        const { question, answer } = this.state

        const card = {
            question,
            answer,
        }

        const deckId = this.props.navigation.state.params.deckId

        saveCardToDeck(deckId, card).then( () => {
            this.props.addCard(card, deckId)
        })
    }

    render () {

        

        return (
            <View>
                <Text>Add a card</Text>
                <Text>DeckId: {this.props.navigation.state.params.deckId}</Text>
                <Text>Question</Text>
                <TextInput  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(text)=> this.setState({ question: text })} value={this.state.question} />

                <Text>Answer</Text>
                <TextInput  style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={(text)=> this.setState({ answer: text })} value={this.state.answer} />

                <TextButton onPress={this.addCard}>SUBMIT</TextButton>
            </View>
        )
    }
}

function mapStateToProps (state, { navigation }) {
    return {
        deckId: navigation.state.params
    }
}

function mapDispatchToProps (dispatch) {
     return {
         addCard: (card, deckId) => dispatch(addCardToDeck(card, deckId))
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCardView)