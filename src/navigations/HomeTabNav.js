import React, {
    Component
} from 'react';
import {
    TabNavigator
} from 'react-navigation';
import Created from '../screens/authorized/Home/CreatedTab/Created';
import Joined from '../screens/authorized/Home/JoinedTab/Joined';
import Popular from '../screens/authorized/Home/PopularTab/Popular';

const HomeTabNav = TabNavigator({
        Created: {
            screen: Created,
            navigationOptions: {
                tabBarLabel: 'CREATED'
            }
        },
        Joined: {
            screen: Joined,
             navigationOptions: {
                tabBarLabel: 'CREATED'
            }
        },
        Popular: {
            screen: Popular,
             navigationOptions: {
                tabBarLabel: 'CREATED'
            }
        }
    }

);

export default HomeTabNav;
