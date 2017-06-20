import {StackNavigator} from 'react-navigator';
import Courses from '../screens/authorized/library/Library';
import CreatedTab from '../screens/authorized/Home/CreatedTab/Created';

const CreatedNav = StackNavigator({
  CreatedScreen: {screen: CreatedTab},
  CoursesDetail: {screen: Courses}
})
