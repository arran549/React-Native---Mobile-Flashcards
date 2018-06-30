import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Title from './Title'
import TextButton from './TextButton'
import SolidButton from './SolidButton'
import { connect } from 'react-redux'
import { gray, white } from '../utils/colors'

export default function AnswerCard ({ card, answerCorrect, answerIncorrect }) {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Title title={card.answer} />
            </View>
            
            <SolidButton style={styles.button} onPress={() => answerCorrect()}>Correct</SolidButton>
            <SolidButton style={styles.button} onPress={() => answerIncorrect()}>Incorrect</SolidButton>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1
    },
    buttonsContainer: {
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