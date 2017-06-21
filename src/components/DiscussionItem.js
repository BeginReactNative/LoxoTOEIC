import React , {Component} from 'react';
import {View, Text,StyleSheet,Dimensions,Image,TouchableOpacity} from 'react-native';



class DiscussionItem extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.containerComment}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatarImg}></View>
                    <View style={styles.avatarInfo}>
                        <Text>User Name </Text>
                        <Text> 18m ago </Text>
                    </View>
                </View>
                <View style={styles.desComment}>
                <Text>ADMIN Co Dep Trai khong????????????????????????????????????????????????????????????????????</Text>
                </View>
                <View style={styles.like}>
                <TouchableOpacity>
                    <Text>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Comment</Text>
                </TouchableOpacity>
                 <TouchableOpacity>
                    <Text>Share</Text>
                </TouchableOpacity>
                </View>
                </View>
                <Text>Discussion Screen</Text>
            </View>
        )
    }
}
const {height, width} = Dimensions.get('window')
const styles=StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#f4f7f9',
},
containerComment: {
margin: 10,
height: height * 0.35,
backgroundColor: 'aqua',
borderWidth: 1,

},
avatarContainer: {
    flex:3,
    borderWidth: 1,
    flexDirection:'row',
    padding: 10
},
desComment: {
    flex:5,
    borderWidth: 1,
    padding: 10
},
like: {
    flex: 2,
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
     flexDirection: 'row',
     padding: 10
},
avatarImg: {
flex: 4,
borderLeftWidth: 1,
backgroundColor: 'red',
justifyContent: 'center',
alignItems: 'center'
},
avatarInfo: {
    flex: 6,
   
    justifyContent: 'space-between',
    padding: 10
}
})
export default DiscussionItem;
