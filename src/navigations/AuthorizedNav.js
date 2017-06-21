import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from '../screens/authorized/Home/Home';
import SideBar from '../screens/authorized/Menu/Menu';
import Member from '../screens/authorized/Menu/Member';
import Discustion from '../screens/authorized/Menu/Discustion';
import Library from '../screens/authorized/library/Library';
import HomeTab from './HomeTabNav';
import LessonsDetail from '../screens/authorized/library/lessonTab/LessonDetail';
import Lessons from '../screens/authorized/library/lessonTab/Lesson';


const HomeScreenRouter = DrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Member: { screen: Member },
    Discustion: { screen: Discustion },
    MyLibrary: {screen: Library},
    LessonsList: {screen: Lessons },
    LessonsDetail: {screen: LessonsDetail}
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default HomeScreenRouter;
