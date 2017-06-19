import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import store from './configureStore';
import AppNavigator from './AppNavigator';
import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import TestScreen from './screens/Test2';


class App extends Component {
    render() {
        return (
        <Provider store={store}>
          <StyleProvider style={getTheme(material)} >
           <AppNavigator />
          </StyleProvider>  
        </Provider>
        );
    }
}

export default App;
