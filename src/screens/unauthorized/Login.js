import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
class Login extends Component {
    componentDidMount () {
        console.log('componentDidMount',this.props)
    }
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}  >
                <Text> Login Screen</Text>
            </View>
        );
    }
}
const  mapStateToProps = (state) => {
    console.log('mapStateToProps',state)
    return {
        Logged: state.Auth.loggedIn,
        user: state.Auth.user
    }
}
export default connect(mapStateToProps)(Login);