import React, { Component } from 'react';
import Alert from 'react-native';
import { Container, Header, Content, List, ListItem, Text , Left, Body, Right, Button, Icon, Title} from 'native-base';
import api from './untilities/api';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rovers:[],
      khales:[],
      sisi :'string'
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
      <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>OMID MIRZAEI</Title>
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
          <Text style={{textAlign:'center',fontSize:22,paddingBottom:10,color:'#e74c3c',paddingTop:5}}>NASA API</Text>
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