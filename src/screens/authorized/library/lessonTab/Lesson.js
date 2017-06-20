
import React , {Component} from 'react';
import {View, Text, StyleSheet,ScrollView} from 'react-native';
import Panel from '../../../../components/CollapsingElements';

class Lesson extends Component {
    constructor(props) {
    super(props);
  
    this.state = {
      isLoading: true,
      dataSource:[],
     
    }
  }
    componentDidMount() {
        
    // fetch Course Data from API by ID
    return fetch(`https://api-dot-hola-edu.appspot.com/api?action=getTopics&ids=[${this.props.lessonsIds}]`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
           
        }, function() {
          // do something with new state
          console.log('CCCCCCCCC',this.state.dataSource[0].childrentIds)
        });
      })
      
      .catch((error) => {
        console.error(error);
      });
      
  }


    render() {
     
        return(
            <ScrollView style={styles.container}>
            {
                    this.state.dataSource.length ? (
                        this.state.dataSource.map((lesson, i) => {
                            return <View key={i} >
                                <Panel title={lesson.name}
                                       topicID={lesson.childrentIds} >
                                </Panel>
                               
                            </View>
                        })
                    ) : null
                }
                
              
            </ScrollView>
        )
    }
}
var styles = StyleSheet.create({
  container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',
    paddingTop      : 30
  },
  
});
export default Lesson;
/**
 *   
 */
