import { StackNavigator } from 'react-navigation';
import Login from '../screens/unauthorized/Login';
import SignUp from '../screens/unauthorized/SignUp';

const Unauthorized = StackNavigator({
    LoginSC: {screen: Login},
    SignUpSC: { screen: SignUp }
});

export default Unauthorized;
