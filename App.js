import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckOverview from './components/DeckOverview'

export default class App extends React.Component {

    store = createStore(reducer)
    
    render() {
        return (
            <Provider store={this.store}>
                <View style={styles.container}>
                    <DeckOverview />
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
