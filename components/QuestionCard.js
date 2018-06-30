import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Title from './Title'
import TextButton from './TextButton'
import SolidButton from './SolidButton'
import { connect } from 'react-redux'
import { gray, white } from '../utils/colors'

export default function QuestionCard ({ card, numQuestions, showAnswer, question }) {
    return (
        <View style={styles.container}>
            <View style={[styles.item]}>
                <Title title={card.question} style={{fontSize: 20}} />
                <Title style={styles.small} title={`${question} out of ${numQuestions}`} />
            </View>
            <View style={styles.showAnswerBtn}>
                <SolidButton style={styles.button} onPress={() => showAnswer()} >SHOW ANSWER</SolidButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    button: {
       borderRadius: 10,
       marginTop: 30,
       padding: 10,
       
    },
    small: {
        color: gray,
        fontSize: 14,
        paddingTop: 20

    },
    showAnswerBtn: {
        marginTop: 20
    },
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 10,
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