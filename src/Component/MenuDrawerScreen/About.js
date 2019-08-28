import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import AppheaderNfooter from '../AppHeaderNfooter/index';
export default class Aboutus extends Component {
  static navigationOptions = ({ navigation }) => ({
   
    headerLeft: <Icon name="Menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate.closeDrawer()} />,
    drawerLabel: 'AboutUs',
  })
  render() {
    return (
      <Container>
        <AppheaderNfooter drawerOpen={() => this.props.navigation.openDrawer()} title="About ">
          <Text>
            bilal
            </Text>
          </AppheaderNfooter>
        
      </Container>
    );
  }
}