import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { Container, Header, Content, Item, Input, Icon ,} from 'native-base';
import AppheaderNfooter from '../AppHeaderNfooter/index';
import HeadOnly from '../AppHeaderNfooter/OnlyHeader';
export default class ContactUs extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "CONTACTUS",
    headerLeft: <Icon name="menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('')} />,
    drawerLabel: 'ContactUs',
  })
  render() {
    return (
      <Container>
    
    <HeadOnly drawerOpen={() => this.props.navigation.openDrawer()} title="ContactUs "/>
  
    </Container>
    );
  }
}