import React , {Component} from 'react';
import {View, Text,ScrollView,TextInput} from 'react-native';
import {Icon} from 'native-base';
import DiscussionItem from '../../../../components/DiscussionItem';


class Discussion extends Component {
    constructor(props) {
    super(props);
    this.state = { text: 'Khen admin đẹp trai tặng 1 code nha!!!' };
  }
    render() {
        return(
            <View style={styles.container}>
             <ScrollView style={styles.container}>
                <DiscussionItem />
                <DiscussionItem />
                <DiscussionItem />
            </ScrollView>
            <View style={styles.textInput}>
                    <TextInput
                        style={{flex:6, borderColor: 'gray', borderWidth: 1,borderRadius: 5 }}
                        onChangeText={(text) => this.setState({ text })}
                        value={this.state.text}
                    />
                    <View style={styles.actionIcon}>
                        <Icon name='attach' />
                        <Icon name='camera' />
                        <Icon name='send' />
                    </View>
            </View>
            </View>
           
        )
    }
}
const styles={
    container: {
        flex: 1,
         backgroundColor: '#f4f7f9',
    },
    textInput: {
        flexDirection: 'row',
        height: 70,
        margin: 10,
        padding: 10,
        alignItems: 'center'
    },
    actionIcon: {
        flex: 4,
        flexDirection: 'row',
        justifyContent:  'space-between',
        paddingLeft: 10
    }
}
export default Discussion;
