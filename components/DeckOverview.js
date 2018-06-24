import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextButton from './TextButton'
import { connect } from 'react-redux'

class DeckOverview extends Component {
    render () {
        return (
            <View>
                <Text>Udacity Flash Cards</Text>
                <Text>4 Cards</Text>
                
                <TextButton>ADD NEW CARD</TextButton>
                <TextButton>START QUIZ</TextButton>
            </View>
        )
    }
}

function mapStateToProps (state) {
    return {

    }
}


export default connect(mapStateToProps)(DeckOverview)