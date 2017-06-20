
import React , {Component} from 'react';
import {View, Text} from 'react-native';

class Lesson extends Component {
       constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource:[]
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
          console.log('CCCCCCCCC',this.state.dataSource)
       
        });
       
      })
      .catch((error) => {
        console.error(error);
      });
      
  }
    render() {
       
        return(
            <View>
              {
                    this.state.dataSource.length ? (
                        this.state.dataSource.map((lesson, i) => {
                            return <View key={i} >
                                <Text> {lesson.name}</Text>
                               
                            </View>
                        })
                    ) : null
                }
            </View>
        )
    }
}

export default Lesson;
/**
 *   
 */
