import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from './Title'
import TextButton from './TextButton'
import SolidButton from './SolidButton'
import { connect } from 'react-redux'
import { gray } from '../utils/colors'

export default function AnswerCard ({ card, answerCorrect, answerIncorrect }) {
    return (
        <View>
            <Title title={card.answer} />
            <TextButton onPress={() => answerCorrect()}>Correct</TextButton>
            <TextButton onPress={() =>answerIncorrect()}>Incorrect</TextButton>
        </View>
    )
}