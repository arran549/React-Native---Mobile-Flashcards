import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native';
import TextButton from './TextButton'
import { connect } from 'react-redux'
import { addCardToDeck, createNewDeck } from '../actions'
import { v1 as uuid } from 'uuid'
import { saveDeck } from '../utils/api'
import { white, gray, green } from '../utils/colors'

class CreateDeckView extends Component {

    state = {
        name: null,
    }


    reset () {
        this.setState({ name: null })
    }

    addDeck = () => {

        const { name } = this.state

        const id = uuid()

        const deck = {
             [id]: {
                    id,
                    name,
                    cards: []
             },
        }

        saveDeck(deck)
        this.props.addDeck(deck)
        
        this.reset();
        this.props.navigation.navigate('DeckOverview', { deckId: id})
    }

    render () {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20, marginTop: 20, padding: 10}}>
                    Create New Deck
                </Text>
              
                <View style={{marginTop: 20, padding: 10, flex: 1, flexDirection: 'column'}}>
                    <TextInput style={styles.input} onChangeText={(text)=> this.setState({ name: text })} value={this.state.name} placeholder='Name' placeholderTextColor={gray} />
                    <TextButton style={styles.button} onPress={this.addDeck}>SUBMIT</TextButton>
                </View>
                
            </View>
        )
    }
}

function mapStateToProps (state) {
    return {

    }
}

function mapDispatchToProps (dispatch) {
     return {
        addDeck: (deck) => dispatch(createNewDeck(deck))
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateDeckView)

const styles = StyleSheet.create({
    button: {
        marginTop: 20
    },
    input: {
        height: 40, 
        width: 270, 
        borderColor: gray, 
        borderWidth: 1, 
        marginTop: 10,
        paddingLeft: 10,
        borderRadius: 10
    },
    container: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
        height: 250,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0,0,0,0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        }
    }
})