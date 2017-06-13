import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './configureStore';

class App extends Component {
    render() {
        return (
        <Provider store={store}>
            <View style={{flex:1, justifyContent: 'center',alignItems: 'center'}} >
                <Text>Main Screen</Text>
            </View>
        </Provider>
        );
    }
}

export default App;