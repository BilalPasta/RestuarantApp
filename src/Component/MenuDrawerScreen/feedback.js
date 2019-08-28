import React,{Component} from 'react';
import {View,Text} from 'react-native';

import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import AppheaderNfooter from '../AppHeaderNfooter/index';
import HeadOnly from '../AppHeaderNfooter/OnlyHeader';


export default class FeedBack extends Component {
  static navigationOptions = ({ navigation }) => ({
   
    headerLeft: <Icon name="back" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate.closeDrawer()} />,
    drawerLabel: 'FeedBack',
  })
  render() {
    return (
      <Container>
        <HeadOnly drawerOpen={() => this.props.navigation.openDrawer()} title="FeedBack"/>
        
      </Container>
    );
  }
}