import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text , Button , Icon , Title} from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>مدیریت</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem>
              
              <Body>
                <Text>امید</Text>
                <Text note>امروز روز جهانی فرار زندانیان ...</Text>
              </Body>
              <Thumbnail square size={80} source={require('./assets/img/sqsi.jpg')} />
            </ListItem>
          </List>
          <List>
            <ListItem>
              
              <Body>
                <Text>امید</Text>
                <Text note>امروز روز جهانی فرار زندانیان ...</Text>
              </Body>
              <Thumbnail square size={80} source={require('./assets/img/sqsi.jpg')} />
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}