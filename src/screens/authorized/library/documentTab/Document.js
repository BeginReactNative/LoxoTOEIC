import React , {Component} from 'react';
import {View, Text,ScrollView} from 'react-native';

class Document extends Component {
    constructor(props) {
    super(props);
  
    this.state = {
      isLoading: true,
      dataSource:[],
     
    }
  }
    componentDidMount() {
        console.log('DocumentssIDDDDD',this.props.documentsID)
    // fetch Course Data from API by ID
    return fetch(`http://api-dot-hola-edu.appspot.com/api?action=getDocuments&ids=[${this.props.documentsID}]`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.data,
           
        }, function() {
          // do something with new state
         console.log('1212121212',this.state.dataSource)
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
                        this.state.dataSource.map((documents, i) => {
                            return <View key={i} >
                                    <Text>{documents.title}</Text>
                               
                            </View>
                        })
                    ) : null
                }
                
              
            </ScrollView>
        )
    }
}
var styles = {
  container: {
    flex            : 1,
    backgroundColor : '#f4f7f9',
    paddingTop      : 30
  },
  
};
export default Document;

