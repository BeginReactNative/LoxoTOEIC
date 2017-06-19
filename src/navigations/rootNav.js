import React, {
    Component
} from 'react';
import {
    StackNavigator
} from 'react-navigation';
import UnAthorized from './UnauthorizedNav';
import Authorized from './AuthorizedNav';


const RootNavRouter = StackNavigator({
        // UnAthorized: { screen: UnAthorized },
        Authorized: {
            screen: Authorized,
            navigationOptions: {
                header: null
            }
        }

    },

);

export default RootNavRouter;
