import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/authorized/Home/Home';
import SideBar from '../screens/authorized/Menu/Menu';
import Member from '../screens/authorized/Menu/Member';
import Discustion from '../screens/authorized/Menu/Discustion';
import Library from '../screens/authorized/library/Library';


const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Member: { screen: Member },
    Discustion: { screen: Discustion },
    MyLibrary: {screen: Library}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
