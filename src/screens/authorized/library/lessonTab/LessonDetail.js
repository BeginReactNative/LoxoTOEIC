import React, { Component } from 'react';
import { View,StyleSheet,Text } from 'react-native';
import {Header, Left, Body,Button,Title, Icon} from 'native-base';

class LessonDetail extends Component {
constructor(props){
        super(props);

      

        this.state = {     
            isLoading: true,
            dataSource:[],
        };
    }

    render() {
        console.log('ID duoc chuyen sang',this.props)
        return (
            <View style={styles.container}>
                  <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                       <Title>Lesson 1</Title>
                    </Body>
                    <Body style={{width: 10}}>
                    </Body>
                    
                </Header>
                <View style={styles.descripView}>
                    <Text>Lesson Description</Text>
                </View>
                
                <View style={styles.bottomView}>
                    <Text>Lesson 2</Text>
                    <Text>Lesson 3</Text>
                    <Text>Lesson 4</Text>
                    <Text>Lesson 5</Text>
                    <Text>Lesson 6</Text>
                    <Text>Lesson 7</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aqua'
    },
    descripView: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomView: {
        flex:2,
        backgroundColor: 'red',
        borderTopWidth: 1,
        padding: 10,
        justifyContent: 'space-between'
    }
})
export default LessonDetail;


/**
 *     componentDidMount() {
        
    // fetch Course Data from API by ID
    return fetch(`http://api-dot-hola-edu.appspot.com/api?action=getTopics&ids=[${this.props.lesID}]`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
           
        }, function() {
          // do something with new state
          console.log('TOPIC',this.state.dataSource)
          
        });
      })
      
      .catch((error) => {
        console.error(error);
      });
      
  }
 */