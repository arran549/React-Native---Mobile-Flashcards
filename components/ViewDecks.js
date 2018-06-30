import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

        var decks = getDecks();

        getDecks().then((decks) => dispatch(receiveDecks(decks))).then(() => this.setState({ ready: true}))
    }

    render () {

        const { navigation, decks } = this.props

        //alert(JSON.stringify(decks))

        return (
           
            this.state.ready && decks.length > 0 ? (           
            <View>
                <Title title="Decks" />
                {
                    this.props.decks.map((deck) => (<DeckCard key={deck.id} deck={deck} navigation={navigation}></DeckCard>))
                }
            </View>
            )
            : (<View><Text>Hello</Text></View>)
        )
    }
}

function mapStateToProps (state) {
    return {
        decks: Object.values(state)
    }
}

export default connect(mapStateToProps)(ViewDecks)
