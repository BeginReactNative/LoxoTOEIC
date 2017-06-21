import React, { Component } from 'react';
import {View, Image,ActivityIndicator, ListView,Text,TouchableOpacity  } from 'react-native';
import CardItems from '../../../../components/cardItems';



 class Popular extends Component {
   constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  componentDidMount() {
    return fetch(`https://api-dot-hola-edu.appspot.com/api?action=getRandomCourses`)
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.data),
        }, function() {
          // do something with new state
        });
       
      })
      .catch((error) => {
        console.error(error);
      });
  }
 renderRow() {
    <Text>{rowData.name}, {rowData.ownerName}</Text>
 }
    render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View style={{backgroundColor: '#E8E8E8'}}>
     
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <CardItems name={rowData.name}
                                    ownerName={rowData.ownerName}
                                    avatar={rowData.avatar}
                                    shortDescription={rowData.shortDescription}
                                    lastUpdate={rowData.lastUpdate}
                                    memberCount={rowData.memberIds.length}
                                    lessonCount={rowData.lessonIds.length}
                                    navigation={this.props.navigation}
                                    courseID={rowData.id}
                                    
                                  /> }
        />
      </View>
    );
  }
}
export default Popular;


