import React, { Component } from 'react';
import { Text } from 'react-native';
import api from './untilities/api';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rovers:[]
    };
  }
  componentWillMount(){
    api.getRovers().then((res) => {
      this.setState({
        rovers:res.rovers
        
      })
    })
  }
  render() {
    let pushak=[];
    console.log("Rovers: ",this.state.rovers);
    for(let omid =0 ;omid < this.state.rovers.length ; omid++ ){
      pushak.push(this.state.rovers[omid].name);
    }
    return (
      
      <Text>{pushak}</Text>
    );
  }
}


  