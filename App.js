import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckOverview from './components/DeckOverview'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import ViewDecks from './components/ViewDecks'
import { purple, white, green } from './utils/colors'
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import CreateDeckView from './components/CreateDeckView'
import AddCardView from './components/AddCardView'
import DeckCard from './components/DeckCard'
import QuizView from './components/QuizView'


function UdaciStatusBar ({ backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor,  height: Constants.statusBarHeight}} >
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    
    )
}

const Tabs = TabNavigator({
        ViewDecks: {
                screen: ViewDecks,
                navigationOptions: {
                    tabBarLabel: 'Decks',
                    title: 'Decks',
                    headerTintColor:  white,
                    tabBarIcon: ({ tintColor }) => <FontAwesome name='bars' size={30} color={tintColor} />,
                    //header: null
                    headerStyle: {
                        backgroundColor: purple,
                        marginTop: -40
                    },
                },
        },
        CreateDeck: {
            screen: CreateDeckView,
            navigationOptions: {
                tabBarLabel: 'Create Deck',
                tabBarIcon: ({ tintColor }) => <FontAwesome name='plus' size={30} color={tintColor} />,
                title: 'Create Deck',
                headerTintColor:  white,
                headerStyle: {
                    backgroundColor: purple,
                    marginTop: -40
                },
            }
        }
    } , 
    {
        tabBarPosition: 'bottom',
        lazyLoad: false,
        tabBarOptions: {
            lazyLoad: false,
            activeTintColor: Platform.OS === 'ios' ? purple : white,
            style: {
                height: 56,
                backgroundColor: Platform.OS === 'ios' ? white : purple,
                shadowColor: 'rgba(0,0,0,0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        },
    })


const MainNavigator = StackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            //header: null
        }
    },
    AddCardView: {
        screen: AddCardView,
        navigationOptions: {
            title: "ADD CARD",
            headerTintColor:  white,
            headerStyle: {
                backgroundColor: purple,
                marginTop: -40
            },
        }
    },
    DeckOverview: {
        screen: DeckOverview,
        navigationOptions: {
            title: "Deck",
            headerTintColor:  white,
            headerStyle: {
                backgroundColor: purple,
                marginTop: -40
            },
        }
    },
    QuizView: {
        screen: QuizView,
        navigationOptions: {
            title: "DECK QUIZ",
            headerTintColor:  white,
            headerStyle: {
                backgroundColor: purple,
                marginTop: -40
            },
        }
    }
})

export default class App extends React.Component {

    store = createStore(reducer)

    render() {
        return (
            <Provider store={this.store}>
                <View style={{flex: 1}}>
                    <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
                    <MainNavigator />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
