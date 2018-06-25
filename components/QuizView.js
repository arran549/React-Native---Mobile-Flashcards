import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Title from './Title'
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { gray } from '../utils/colors'

const Question = ({card}) => (
    <View>
        <Title title={card.question} />
    </View>
)

const Result = ({score, questions}) => (
    <View>
        <Title title={'You answered '} />
        <Title title={`${score} out of ${questions}`} />
    </View>
)

class QuizView extends Component {

    state = {
        score: 0,
        questionIndex: 0
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
        this.nexQuestion()
    }

    answerIncorrect = () => {
        this.nexQuestion()
    }

    nexQuestion = () => {
        this.setState({
            questionIndex: this.state.questionIndex + 1
        })
    }

    render () {

        const { deck } = this.props;

        if ( this.state.questionIndex === deck.cards.length) {
            return (<Result score={this.state.score} questions={deck.cards.length}/> )
        }

        return (
            <View>
                <Question card={deck.cards[this.state.questionIndex]} />
                <Text>Current Score: {this.state.score}</Text>
                <Text style={{fontSize: 16, color: gray}}>{this.state.questionIndex + 1} / {deck.cards.length}</Text>
                <View>
                    <TextButton onPress={this.answerCorrect}>Correct</TextButton>
                    <TextButton onPress={this.answerIncorrect}>Incorrect</TextButton>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state, { navigation }) {

    const { deckId } = navigation.state.params;

    alert(deckId)
    return {
        deck: state[deckId]
    }
}

export default connect(mapStateToProps)(QuizView)