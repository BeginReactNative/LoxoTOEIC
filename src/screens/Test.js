import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class Test extends Component {
  componentDidMount() {
      this.props.fetchData();
  }
   
        getCourse() {
             const { dataCourses } = this.props;
            return dataCourse = dataCourses.data.map((course, i) => {
                <Text key={i}>course.name</Text>
            })
        }

    render() {
        console.log(this.props);
        return (
          <View style={{flex:1, padding :20}}>
          <TouchableOpacity onPress={this.props.fetchData()}>
          <Text>AAA</Text>
          </TouchableOpacity>
            {this.props.dataCourses.isFetching && <Text>Loading...</Text>}
            {
                this.props.dataCourses.data.length ?
                this.getCourse()
                :null
            }
          </View>
        );
    }
}
 function mapStateToProp(state) {
     console.log(`AAAAAa${  state}`);
     return {  
        dataCourses: state.Data
     };
 }

export default connect(mapStateToProp )(Test);
