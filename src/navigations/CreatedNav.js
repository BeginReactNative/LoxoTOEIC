import {StackNavigator} from 'react-navigation';
import Courses from '../screens/authorized/library/Library';
import CreatedTab from '../screens/authorized/Home/CreatedTab/Created';

import LessonsDetail from '../screens/authorized/library/lessonTab/LessonDetail';

const CreatedNav = StackNavigator({
  CreatedScreen: {
    screen: CreatedTab,
      navigationOptions: ({navigation}) => ({
      mode: card,
       headerMode: 'screen',
    })
  },
 CourseDetail: {
    screen: Courses,
      navigationOptions: ({navigation}) => ({
      mode: card,
         headerMode: 'screen',
    })
  },

  LessonsDetail: {
        screen: LessonsDetail
    }
})
export default CreatedNav;

