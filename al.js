import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container, Header, Content, List, ListItem, Text , Left, Body, Right, Button, Icon, Title} from 'native-base';
import api from './untilities/api';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rovers:[],
      khales:[]
    };
  }
  
  sqsq(){
    alert({khales});  
  }
  componentWillMount(){
    api.getRovers().then((res) => {
      this.setState({
        rovers:res.rovers
        
      })
    })
  }
  
  render() {
    let names=[];
    for(let counter =0 ; counter < this.state.rovers.length ; counter++ ){
      khales = this.state.rovers[1].name;
        for(let counterles =0 ; counterles < this.state.rovers[counter].cameras.length ; counterles++){
      names.push(<Text style={{color:'#34495e'}}>{this.state.rovers[counter].cameras[counterles].full_name}</Text>);
    }
    }
    console.log("Rovers: ",this.state.rovers);

    return (
     
      <Container>
     
      <Header style={{backgroundColor:'#e74c3c'}}>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>NASA API</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='heart' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header> 
        <StatusBar
      backgroundColor="#c0392b"
      barStyle="light-content" 
      showHideTransition='fade'          
    />    
          <Content>
          <List dataArray={names}
            renderRow={(names) =>
              <ListItem>
                {names}
              </ListItem>
            }>
          </List>
        </Content>
    </Container>
    );
  }
}