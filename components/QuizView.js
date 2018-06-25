import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class QuizView extends Component {

    render () {
        return (
            <View>
                <Text>Hello QuizView</Text>
            </View>
        )
    }
}

function mapStateToProps(state, props) {

    const { deckId } = navigation.state.params;

    return {
        deck: state[deckId]
    }
}

export default QuizView