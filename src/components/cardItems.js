import React, { Component } from 'react';
import {Image,Dimensions,View} from 'react-native';
import { 
    StyleProvider, Container, Content,
    Card, CardItem, Thumbnail,
     Button, Icon,Text,
    Left, Body } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
const {height} = Dimensions.get('window')
class cardItems extends Component {

    render() {
        return (
         
            <Container style={{height: height * 0.5, margin: 20}}>
             <StyleProvider style={getTheme(material)}>
                <Content scrollEnabled={false}>
                    <Card >
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://www.qualium-systems.com/wp-content/uploads/2016/06/react-native-preview.png' }} />
                                <Body>
                                    <Text>Kien Nguyen</Text>
                                    <Text note>Vip Member</Text>
                                </Body>
                                <Text style={{ color: '#999999' }}>11h ago</Text>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image />
                          </CardItem>
                          <CardItem>
                            <Body>
                                <Image style={{ resizeMode: 'cover' }} source={{ uri: 'https://www.qualium-systems.com/wp-content/uploads/2016/06/react-native-preview.png' }} />
                                <Text>
                                    With React Native, you don't build a “mobile web app”, an “HTML5 app”, or a “hybrid app”. You build a real mobile app that's indistinguishable from an app built using Objective-C or Java. React Native uses the same fundamental UI building blocks as regular iOS and Android apps. You just put those building blocks together using JavaScript and React.
                                </Text>
                            </Body>
                          </CardItem>
                          <CardItem>
                                <Button transparent>
                                
                                  <Text>12 Lessons</Text>
                              </Button>
                              <Button transparent>
                                  
                                  <Text>50 members</Text>
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