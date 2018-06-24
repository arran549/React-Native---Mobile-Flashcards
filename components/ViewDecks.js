import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'

class ViewDecks extends Component {
    render () {
        return (
            <View>
                {
                    this.props.decks.map(deck => (<Text key={deck.name} >{deck.name}</Text>))
                }
            </View>
        )
    }
}

function mapStateToProps (state) {
    return {
        decks: Object.values(state)
    }
}

export default connect(mapStateToProps)(ViewDecks)
