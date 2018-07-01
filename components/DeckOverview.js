import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Button } from 'react-native';
import TextButton from './TextButton'
import AddCardView from './AddCardView'
import { connect } from 'react-redux'
import Title from './Title'
import { white, gray } from '../utils/colors'


class DeckOverview extends Component {

    shouldComponentUpdate (nextProps) {
        return nextProps.deck !== undefined
    }
    
    render () {

        const { deck } = this.props

        return (
            <View>
                <View style={styles.item}>
                    <Title title={deck.name} />
                    <Text style={styles.cards}>{deck.cards.length} Cards</Text>
                    <View style={styles.buttons}>
                        <TextButton style={styles.button} onPress={() => this.props.navigation.navigate('AddCardView', { deckId: deck.id })}>ADD CARD</TextButton>
                        <Button style={styles.button} onPress={() => this.props.navigation.navigate('QuizView', { deckId: deck.id})} disabled={deck.cards.length <= 0} title='START QUIZ' />
                    </View>
                </View>
            </View>
        )
    }
}

function mapStateToProps (state, { navigation }) {

    const { deckId } = navigation.state.params;

    return {
        deck: state[deckId]
    }
}


export default connect(mapStateToProps)(DeckOverview)

const styles = StyleSheet.create({
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 20,
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
    },
    button: {
        marginTop: 30,
        fontSize: 18
    },
    buttons: {
        marginTop: 40
    },
    cards: {
        color: gray,
        marginTop: 10
    }
})