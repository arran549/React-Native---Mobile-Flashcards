import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { purple } from '../utils/colors'

class Title extends Component {
    render () {

        const { title, style } = this.props

        return (
            <View style={styles.container}>
                <Text style={[styles.title, style]}>{title}</Text>
            </View>
        )
    }
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: purple,
    },
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    }
})

