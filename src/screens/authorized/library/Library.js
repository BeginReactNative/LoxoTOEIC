import React from 'react';
import { View } from 'react-native';
import {
    Button,
    Text,
    Container,
    Card,
    CardItem,
    Body,
    Content,
    Header,
    Title,
    Left,
    Icon,
    Right,
    Tab,
    Tabs
} from 'native-base';
import Description from './descriptionTab/Description';
import Lesson from './lessonTab/Lesson';
import Document from './documentTab/Document';
import Discussion from './discussionTab/Discussion';

export default class Library extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource:[]
    }
  }
  componentDidMount() {
    // fetch Course Data from API by ID
  
    return fetch(`https://api-dot-hola-edu.appspot.com/api?action=getCourses&ids=[${this.props.navigation.state.params.courseID}]`)
      .then((response) => response.json())
      .then((responseJson) => {
       
        this.setState({
          isLoading: false,
          dataSource: responseJson.data[0],
           
        }, function() {
          // do something with new state
       
        });
       
      })
      .catch((error) => {
        console.error(error);
      });
      
  }

    render() {

        return (
            <Container >
                <Header hasTabs>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.state.dataSource.name}</Title>
                    </Body>
                    
                </Header>
                <Tabs >
                    <Tab heading="Description" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }} >
                        <Description name={this.state.dataSource.name}
                                     shortDes={this.state.dataSource.shortDescription}
                                     user={this.state.dataSource.ownerName}
                                     Description={this.state.dataSource.description}
                                     
                        />
                    </Tab>
                    <Tab heading="Lesson" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }}>
                        <Lesson lessonsIds={this.state.dataSource.lessonIds}/>
                    </Tab>
                    <Tab heading="Document" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }}>
                        <Document />
                    </Tab>

                    <Tab heading='Discussion' textStyle={{ fontSize: 10}} activeTextStyle={{ fontSize: 12}}>
                        <Discussion />
                    </Tab>
                   

                </Tabs>
                    
                
            </Container>
        );
    }
}


/**
 * <Card>
                        <CardItem>
                            <Body>
                                <Text>Chat App to talk some awesome people!</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button
                        full
                        rounded
                        dark
                        style={{ marginTop: 10 }}
                        onPress={() => this.props.navigation.navigate("Chat")}>
                        <Text>Chat With People</Text>
                    </Button>
                    <Button
                        full
                        rounded
                        primary
                        style={{ marginTop: 10 }}
                        onPress={() => this.props.navigation.navigate("Profile")}>
                        <Text>Goto Profiles</Text>
                    </Button>
                    */
