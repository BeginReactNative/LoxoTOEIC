import React , {Component} from 'react';
import {View, Text,StyleSheet,
        Dimensions, Image,TouchableOpacity
} from 'react-native';
import {Icon} from 'native-base';

const {height,width} = Dimensions.get('window')
class Description extends Component {
    render() {
        return(
            <View>
                    <Image source={{uri: 'https://blog.jscrambler.com/content/images/2016/12/react_native_banner-min.png'}}
                           style={{width: width - 50, height: 150,margin:20}}
                       />
                <View style={styles.infoStyle}>
                    <Text style={[...styles.textStyle,{fontWeight: 'bold' }]}>TOEIC</Text>
                    <Text style={[...styles.textStyle,{color: '#696969' }]}>Short Description</Text>
                    <Text style={[...styles.textStyle,{fontWeight: 'bold' }]}>Create by Admin</Text>
                    <View style={styles.rateView}>
                        <Icon name='star' size={20}/>
                        <Icon name='star' />
                        <Icon name='star' />
                        <Icon name='star' />
                        <Icon name='star'/>
                        <View style={{width: 150}}/>
                        <TouchableOpacity>
                            <Text style={[...styles.textStyle,{backgroundColor: 'aqua'}]}>Rate</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    imageView: {
        flex: 3,
        marginLeft: 30,
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    textStyle : {
        fontSize: 15,
        margin:10
    },
    infoStyle: {
        flex: 7,
        padding: 15
    },
    rateView: {
        flexDirection: 'row',
        height: 30,
        alignItems: 'center'
    }

})


export default Description;

