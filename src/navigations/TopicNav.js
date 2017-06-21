import {StackNavigator} from 'react-navigation';
import Lessons from '../screens/authorized/library/lessonTab/Lesson';
import LessonsDetail from '../screens/authorized/library/lessonTab/LessonDetail';

 const TopicNav = StackNavigator({
    LessonsList: {
        screen: Lessons
    },
    LessonsDetail: {
        screen: LessonsDetail
    }
})
export default TopicNav;
