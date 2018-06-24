import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'

class CreateDeckView extends Component {

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
                <Text style={{fontSize: 20, marginTop: 20, padding: 10}}>
                    Create New Deck
                </Text>
                <View style={{marginTop: 20, padding: 10}}>
                <Text>Name of Deck</Text>
                <TextInput  style={{height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10}}
                            onChangeText={(text)=> this.setState({ question: text })} value={this.state.question} />
                </View>
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

     }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckView)