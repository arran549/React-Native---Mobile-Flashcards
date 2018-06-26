import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Title from './Title'
import TextButton from './TextButton'
import SolidButton from './SolidButton'
import { connect } from 'react-redux'
import { gray } from '../utils/colors'
import QuestionCard from './QuestionCard'
import AnswerCard from './AnswerCard'


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

    render () {

        const { deck } = this.props;
        

        if ( this.state.questionIndex === deck.cards.length) {
            return (<View>
                        <Text>Current Score: {this.state.score}</Text>
                        <Title title={'You answered '} />
                        <Text style={{fontSize: 16, color: gray}}>{this.state.score } / {deck.cards.length}</Text>
                    </View>)
        }

        const card = deck.cards[this.state.questionIndex]

        if(this.state.showQuestion) {
            return (<QuestionCard card={card} score={this.state.score} numQuestions={deck.cards.length} showAnswer={this.showAnswer} />)
        }
        else {
            return (<AnswerCard card={card} answerCorrect={this.answerCorrect} answerIncorrect={this.answerIncorrect} />)
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