import React, { Component } from 'react';
import { View, StyleSheet, Text, Platform, Button } from 'react-native';
import Title from './Title'
import TextButton from './TextButton'
import SolidButton from './SolidButton'
import { connect } from 'react-redux'
import { gray, white } from '../utils/colors'
import QuestionCard from './QuestionCard'
import AnswerCard from './AnswerCard'
import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

class QuizView extends Component {

    state = {
        score: 0,
        questionIndex: 0,
        showQuestion: true
    }

    shouldComponentUpdate (nextProps) {
        return nextProps.deck !== undefined
    }


    incrementScore = () => {
        this.setState({
            score: this.state.score + 1,
        })
    }

    answerCorrect = () => {
        this.incrementScore()
        this.nextQuestion()
    }

    answerIncorrect = () => {
        this.nextQuestion()
    }

    nextQuestion = () => {
        this.setState({
            questionIndex: this.state.questionIndex + 1,
            showQuestion: true
        })
    }

    showAnswer = () => {
        this.setState({
            showQuestion: false
        })
    }

    goBackToDeck = () => {
        this.props.navigation.navigate('DeckOverview', { deckId: this.props.deck.id })
    }

    restartQuiz = () => {
        this.setState({
            score: 0,
            questionIndex: 0,
            showQuestion: true
        })
    }

    completedQuiz = () => {
        clearLocalNotification().then(setLocalNotification)
    }

    render () {

        const { deck } = this.props;


        if ( this.state.questionIndex === deck.cards.length) {

            this.completedQuiz()

            return (<View style={styles.container}>
                        
                        <Title style={styles.title} title={'You answered '} />
                        <Text style={{fontSize: 28, color: gray, marginTop: 20}}>{this.state.score } / {deck.cards.length}</Text>
                        <View style={styles.buttons}>
                            <TextButton style={styles.button} onPress={this.goBackToDeck}>BACK TO DECK</TextButton>
                            <TextButton style={styles.button} onPress={this.restartQuiz}>RESTART QUIZ</TextButton>
                        </View>
                    </View>)
        }

        const card = deck.cards[this.state.questionIndex]

        if(this.state.showQuestion) {
            return (<QuestionCard card={card} question={this.state.questionIndex + 1} numQuestions={deck.cards.length} showAnswer={this.showAnswer} />)
        }
        else {
            return (<AnswerCard card={card} answerCorrect={this.answerCorrect} question={this.state.questionIndex + 1} numQuestions={deck.cards.length} answerIncorrect={this.answerIncorrect} />)
        }
    }
}

function mapStateToProps(state, { navigation }) {

    const { deckId } = navigation.state.params;

    return {
        deck: state[deckId]
    }
}

export default connect(mapStateToProps)(QuizView)

const styles = StyleSheet.create({
    container: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
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
    },
    button: {
        marginTop: 30
    },
    title: {
        marginTop: 50
    },
    buttons: {
        marginTop: 40
    }
})
