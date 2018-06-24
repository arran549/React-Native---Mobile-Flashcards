import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'

class AddCardView extends Component {

    state = {
        question: 'Enter Title',
        answer: 'something'
    }

    addCard = () => {

        const { question, answer } = this.state

        const card = {
             answer,
             question
        }

        this.props.addCard(card)
    }

    render () {
        return (
            <View>
                <Text>Add a card</Text>

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

function mapStateToProps (state) {
    return {

    }
}

function mapDispatchToProps (dispatch) {
     return {
         addCard: (card) => dispatch(addCardToDeck(card, 'deck1'))
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCardView)