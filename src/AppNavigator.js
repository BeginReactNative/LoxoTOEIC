import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import RootNav from '../src/navigations/rootNav';

class AppNavigator extends Component {
      componentDidMount() {
        console.log('componentDidMount:' ,this.props)
    }
    render() {
        return (
            <RootNav
                navigation={addNavigationHelpers({
                    dispatch: this.props.dispatch,
                    state: this.props.nav
                })}
            />            
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps',state)
    return {
        nav: state.nav
    }
}

export default connect(mapStateToProps)(AppNavigator);