import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Button, Animated } from 'react-native';
import TextButton from './TextButton'
import AddCardView from './AddCardView'
import { connect } from 'react-redux'
import Title from './Title'
import { white, gray, purple } from '../utils/colors'


class DeckOverview extends Component {

    state = {
        opacity: new Animated.Value(0)
    }

    shouldComponentUpdate (nextProps) {
        return nextProps.deck !== undefined
    }
    
    componentDidMount () {
        const { opacity } = this.state

        Animated.timing(opacity, { toValue: 1, duration: 1000 }).start()
    }

    render () {

        const { opacity } = this.state

        const { deck } = this.props

        return (
            <View>
                <Animated.View style={[styles.item, { opacity: opacity}]}>
                    <Title style={styles.title} title={deck.name} />
                    <Text style={styles.cards}>{deck.cards.length} Cards</Text>
                    <View style={styles.buttons}>
                        <TextButton style={styles.button} onPress={() => this.props.navigation.navigate('AddCardView', { deckId: deck.id })}>ADD CARD</TextButton>
                        <Button style={styles.button} onPress={() => this.props.navigation.navigate('QuizView', { deckId: deck.id})} disabled={deck.cards.length <= 0} title='START QUIZ' />
                    </View>
                </Animated.View>
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
    title: {
        marginTop: 20
    },
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
        fontSize: 18,
        color: purple
    },
    buttons: {
        marginTop: 40
    },
    cards: {
        color: gray,
        marginTop: 20
    }
})