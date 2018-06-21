import React, { Component } from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge,Form,Item,Label,Input,Left,Right,Body,Title } from 'native-base';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,username:''}
  }

  componentDidMount(){
    return fetch('http://miiran.com/MI%20SERVICE/php/app/guaranty.php?imei=865395033415801')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(

<Container>
<Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
<Content>
<Form>
            <Item>
              <Input placeholder="Username"  onChangeText={(username) => this.setState({username})} value={this.state.username}/>
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
            <Button block>
            <Text>ارسال</Text>
          </Button>
          <Text>{this.state.username}</Text>
        </Content>
<Footer>
  <FooterTab>
    <Button badge vertical>
      <Badge><Text>2</Text></Badge>
      <Icon name="apps" />
      <Text>Apps</Text>
    </Button>
    <Button vertical>
      <Icon name="camera" />
      <Text>Camera</Text>
    </Button>
    <Button active badge vertical>
      <Badge ><Text>51</Text></Badge>
      <Icon active name="navigate" />
      <Text>Navigate</Text>
    </Button>
    <Button vertical>
      <Icon name="person" />
      <Text>Contact</Text>
    </Button>
  </FooterTab>
</Footer>
</Container>
    );
  }
}