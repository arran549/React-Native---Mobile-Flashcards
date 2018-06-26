import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Title from './Title'
import TextButton from './TextButton'
import SolidButton from './SolidButton'
import { connect } from 'react-redux'
import { gray } from '../utils/colors'


const Ask = ({state, deck, card}) => {


    return (state.showAnswer ? <Answer /> : <Question card={card} questions={deck.cards.length} score={state.score} />)
}


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
            return (<View>
                        <Title title={card.question} />
                        <Title title={`${this.state.score} out of ${deck.cards.length}`} />
                        <SolidButton onPress={() => this.setState({ showQuestion: false })} >SHOW ANSWER</SolidButton>
                    </View>)
        }

        return (<View>
                    <Title title={card.answer} />
                    <TextButton onPress={this.answerCorrect}>Correct</TextButton>
                    <TextButton onPress={this.answerIncorrect}>Incorrect</TextButton>
                </View>)


        

        return <Ask state={this.state} deck={deck} card={card}/>

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