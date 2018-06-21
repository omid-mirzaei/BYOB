import React from 'react';
import { FlatList, ActivityIndicator, View  } from 'react-native';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';


export default class FetchExample extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('http://miiran.com/MI%20SERVICE/php/app/guaranty.php?imei=865395033415801')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          datakol: responseJson    
 })                    
})
 
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
      <Header />
      <Content>
        <List>
          <ListItem>
            <Text>Simon Mignolet</Text>
          </ListItem>
          <ListItem>
            <Text>Nathaniel Clyne</Text>
          </ListItem>
          <ListItem>
            <Text>Dejan Lovren</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
    ); 
  }
}