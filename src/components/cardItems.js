import React, { Component } from 'react';
import {Image,Dimensions,View,TouchableOpacity} from 'react-native';
import { 
    StyleProvider, Container, Content,
    Card, CardItem, Thumbnail,
     Button, Icon,Text,
    Left, Body } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
const {height} = Dimensions.get('window')
class cardItems extends Component {
    constructor(props) {
        super(props);
        this.state = props;
    }
    
    render() {
       
        
        const time = new Date(this.props.lastUpdate).toLocaleDateString();
        return (
            <Container style={{ height: height * 0.2, margin: 20 }}>
                <StyleProvider style={getTheme(material)}>
                    <Content >
                        <Card >
                            <CardItem>
                                <Left>
                                    <Thumbnail source={{uri: `${this.props.avatar}` }} />
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MyLibrary', { courseID: this.props.courseID })}>
                                        <Body>
                                            <Text>{this.props.name}</Text>
                                            <Text note>{this.props.ownerName}</Text>
                                        </Body>
                                    </TouchableOpacity>
                                    <Text style={{ color: '#999999' }}>{time}</Text>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>{this.props.shortDescription}</Text>
                                </Body>
                            </CardItem>
                            <CardItem>
                                <Button transparent>

                                    <Text>{this.props.lessonCount} Lessons</Text>
                                </Button>
                                <Button transparent>

                                    <Text>{this.props.memberCount} Members</Text>
                                </Button>


                            </CardItem>

                        </Card>
                    </Content>
                </StyleProvider>
            </Container>

        );
    }
}

export default cardItems;
