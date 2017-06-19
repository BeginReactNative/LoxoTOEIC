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
   

    render() {
        return (
            <Container >
                <Header hasTabs>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        >
                            <Icon name="left-arrow" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>TOEIC</Title>
                    </Body>
                    
                </Header>
                <Tabs >
                    <Tab heading="Description" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }} >
                        <Discussion />
                    </Tab>
                    <Tab heading="Lesson" textStyle={{ fontSize: 10 }} activeTextStyle={{ fontSize: 12 }}>
                        <Lesson />
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
