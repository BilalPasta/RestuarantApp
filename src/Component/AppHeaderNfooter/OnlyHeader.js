import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";
import {View} from 'react-native';


class OnlyHeader extends Component {
  render() {
    return (
      <Container >
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.drawerOpen()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right >
          <Button
              transparent
              onPress={() => this.props.drawerOpen()}
            >
              <Icon name="cart" />
            </Button>
            </Right>
        </Header>

        <View style={{flex:1}}>
     
            
              {this.props.children}
          
        </View>


   
      </Container>
    );
  }
}

export default OnlyHeader;