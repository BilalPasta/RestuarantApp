import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { Container, Header, Content, Item, Input, Icon,Body } from 'native-base';
import AppheaderNfooter from '../AppHeaderNfooter/index';
import Slider from '../Slider/Slid';
import FamCategory from '../FamousCategory/FamCategory';
export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
   
    headerLeft: <Icon name="menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate.closeDrawer()} />,
    drawerLabel: 'Home',
  })
  render() {
    return (
      <Container>
              
        <AppheaderNfooter drawerOpen={() => this.props.navigation.openDrawer()} title="Home">
          <View style={{flex:1}}>
<Slider/>
<FamCategory/>
</View>
          </AppheaderNfooter>
           
           
         
       
      </Container>
    );
  }
}