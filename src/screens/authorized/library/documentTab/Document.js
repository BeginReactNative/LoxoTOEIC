import React , {Component} from 'react';
import {View, Text,ScrollView, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

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
            <View style={styles.titleHead}>
                      <Text>File name</Text>
                      <Text>Size</Text>
                      <Text>Type</Text>
                      <Text>Dowloaded</Text>
                      <TouchableOpacity>
                        <Icon name='document' />
                      </TouchableOpacity>
                    </View>
            {
                    this.state.dataSource.length ? (
                        this.state.dataSource.map((documents, i) => {
                  return <View key={i} style={styles.container}>
                    
                    <View style={styles.titleHead} >
                      <Text style={{width: 50}}>{documents.title}</Text>
                      <Text style={{width: 30}}>{((documents.size) / 1000000).toFixed(2)} Mb</Text>
                      <Text>docx</Text>
                      <Text>{documents.download}</Text>
                      
                      <TouchableOpacity>
                        <Icon name='download' />
                      </TouchableOpacity>

                    </View>


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
   
  },
  titleHead: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

    borderWidth: 1,
    alignItems: 'center',
    padding: 5 
  },
 
  
};
export default Document;

