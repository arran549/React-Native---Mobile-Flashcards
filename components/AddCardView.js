import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Platform, Button } from 'react-native';
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { addCardToDeck } from '../actions'
import { saveCardToDeck } from '../utils/api'
import { gray, white, purple } from '../utils/colors'

class AddCardView extends Component {

    state = {
        question: null,
        answer: null,
        disableSubmit: true
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

        this.setState({
            question: null,
            answer: null,
            disableSubmit: true
        })

        this.props.navigation.navigate('DeckOverview', { deckId })
    }

    handleQuestionText = (text) => {
        this.setState({ question: text })
        this.updateSubmit();
    }

    handleAnswerText = (text) => {
        this.setState({ answer: text })
        this.updateSubmit();
    }

    updateSubmit = () => {

        const { question, answer } = this.state

        this.setState({disableSubmit: !question || !answer})
    }

    render () {

        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20, marginTop: 20}}>Add a card</Text>
                
                <Text style={styles.label}>Question</Text>
                <TextInput  style={styles.input}
                            onChangeText={this.handleQuestionText} value={this.state.question} placeholder='Question' />

                <Text style={styles.label}>Answer</Text>
                <TextInput  style={styles.input}
                            onChangeText={this.handleAnswerText} value={this.state.answer} placeholder='Answer' />

                <Button style={styles.button} onPress={this.addCard} disabled={this.state.disableSubmit} title='SUBMIT' />
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

const styles = StyleSheet.create({
    label: {
        marginTop: 20
    },
    button: {
        marginTop: 20,
        color: purple
    },
    input: {
        height: 40, 
        width: 300, 
        borderColor: gray, 
        borderWidth: 1, 
        marginTop: 10,
        paddingLeft: 10,
        borderRadius: 10
    },
    container: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        height: 300,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        }
    }
})