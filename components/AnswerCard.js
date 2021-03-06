import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Animated } from 'react-native';
import Title from './Title'
import TextButton from './TextButton'
import SolidButton from './SolidButton'
import { connect } from 'react-redux'
import { gray, white } from '../utils/colors'

import { red } from '../utils/colors'

class AnswerCard extends Component {

    state = {
        opacity: new Animated.Value(0)
    }

    componentDidMount () {

        const { opacity } = this.state

        Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
    }

    render() {

        const { card, answerCorrect, answerIncorrect, question, numQuestions } = this.props
        const { opacity } = this.state

        return (
            <View style={[styles.container]}>
                <Animated.View style={[styles.item, { opacity: opacity }]}>
                    <Title title={card.answer} />
                    <Title style={styles.small} title={`Answer`} />
                    <Title style={styles.small} title={`${question} of ${numQuestions}`} />
                </Animated.View>
                <View style={styles.buttons}>
                    <SolidButton onPress={() => answerCorrect()}>Correct</SolidButton>
                    <SolidButton onPress={() => answerIncorrect()} color={red}>Incorrect</SolidButton>
                </View>    
            </View>
        )
    }

}

export default AnswerCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    buttons: {
        //flex: 1,
        //justifyContent: 'flex-start',
        marginTop: 10,
        height: 100,
        alignItems: 'center',

    },
    small: {
        color: gray,
        fontSize: 14,
        paddingTop: 20

    },

    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 10,
        height: 150,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
})