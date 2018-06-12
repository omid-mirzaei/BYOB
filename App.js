import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
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
    console.log("Rovers: ",this.state.rovers);
    for(let counter =0 ; counter < this.state.rovers.length ; counter++ ){
      khales = this.state.rovers[1].name;
      
      names.push(
        <Button rounded light title={this.state.rovers[counter].name} style={{
          justifyContent:'space-around',
        }} onPress={ this.sqsq} ><Text>{this.state.rovers[counter].name}</Text></Button>
      );
    }
    return (
      <Container>
      <Header />
      <Content>
          {names}
      </Content>
    </Container>
    );
  }
}