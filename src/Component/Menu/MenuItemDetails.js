// import React,{Component} from 'react';
// import {View,Text,Icon} from 'react-native';



// export default class ItemDetails extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={

//         }
//     }
//     render(){
//         return(
//             <View style={{flex:1,backgroundColor:'#fcfc34'}}>
//                 <Text style={{width:100,justifyContent:'center',alignItems:'center',fontSize:16,fontWeight:'bold'}}>HANIFIA</Text>
//                 </View>
//         )
//     }
// }


import React, { Component } from 'react';
import { Image ,Dimensions} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
// import {fb} from '../firebase/firebase';
export default class ItemDetails extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              {/* <Left>
                <Thumbnail source={{uri: 'https://i.cartoonnetwork.com/prismo/props/chars/ben17_180x180_0.png'}} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left> */}
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://i.cartoonnetwork.com/prismo/props/chars/ben17_180x180_0.png'}} 
              style={{height:220, width:  Dimensions.get('window').width, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
