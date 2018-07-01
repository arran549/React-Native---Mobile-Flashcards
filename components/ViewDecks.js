import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import DeckCard from './DeckCard'
import Title from './Title'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'

class ViewDecks extends Component {

    state = { 
        ready: false
    }

    componentDidMount () {
        const { dispatch } = this.props

        getDecks().then((decks) => {
            return dispatch(receiveDecks(decks))
        
        }).then(() => this.setState({ ready: true}))
    }

    render () {

        const { navigation, decks } = this.props

        return (
           
            this.state.ready ? (           
            <ScrollView>
                {
                    this.props.decks.map((deck) => (<DeckCard key={deck.id} deck={deck} navigation={navigation}></DeckCard>))
                }
            </ScrollView>
            )
            : (<View><Text>...Loading</Text></View>)
        )
    }
}

function mapStateToProps (state) {
    return {
        decks: Object.values(state)
    }
}

export default connect(mapStateToProps)(ViewDecks)
