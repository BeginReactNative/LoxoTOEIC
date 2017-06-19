import React from 'react';
import { Image, View } from 'react-native';
import {
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon
} from 'native-base';
const routes = ['Home','MyLibrary', 'Member', 'Discustion'];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri: 'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/drawer-cover.png'
            }}
            style={{
              height: 120,
              alignSelf: 'stretch',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: 'https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png'
              }}
            />
          </Image>
          <List
            dataArray={routes}
            renderRow={data => (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='home' />
                <Text style={{ margin: 10 }}>{data}</Text>
                </View>
                  
                </ListItem>
              )}
          />
          <Text>KoolSoft inc 2017 </Text>
          <Text>Ver 1.0 Aug 21 </Text>
        </Content>
      </Container>
    );
  }
}
