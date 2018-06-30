import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SolidButton from './SolidButton'
import Title from './Title'

class AskQuestion extends Component {

    state = {
        showQuestion: true
    }

    showQuestion(){
        this.setState({ showQuestion: true })
    }

    showAnswer() {
        this.setState({ showQuestion: false })
    }

    render () {
        return (this.state.showQuestion ?  <Question card={card} /> : <Answer questions={deck.cards.length} score={state.score} />)
    }

}

export default AskQuestion

const Ask = ({state, deck, card}) => {

    

    
}

const Question = ({ card, questions, score }) => (
    <View>
        <Title title={card.question} />
        <Text style={{fontSize: 16, color: gray}}>{state.questionIndex + 1} / {deck.cards.length}</Text>

        <SolidButton onPress={() => this.setState({ showAnswer: true })} />
    </View>
)

const Answer = ({ card }) => (
    <View>
        <Title title={card.answer} />
        <TextButton onPress={this.answerCorrect}>Correct</TextButton>
        <TextButton onPress={this.answerIncorrect}>Incorrect</TextButton>
    </View>
)