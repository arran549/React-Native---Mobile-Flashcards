import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from './Title'
import TextButton from './TextButton'
import SolidButton from './SolidButton'
import { connect } from 'react-redux'
import { gray } from '../utils/colors'

export default function QuestionCard ({ card, numQuestions, showAnswer, score }) {
    return (
        <View>
            <Title title={card.question} />
            <Title title={`${score} out of ${numQuestions}`} />
            <SolidButton onPress={() => showAnswer()} >SHOW ANSWER</SolidButton>
        </View>
    )
}