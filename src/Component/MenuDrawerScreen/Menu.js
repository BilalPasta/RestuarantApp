import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
import AppheaderNfooter from '../AppHeaderNfooter/index';
import MenuItemList from '../Menu/Menuitems';
import HeadOnly from '../AppHeaderNfooter/OnlyHeader';

export default class Menu extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Menu",
    headerLeft: <Icon name="menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('Menu')} />,
    drawerLabel: 'Menu',
  })
  render() {
    return (
      <Container>
           <HeadOnly drawerOpen={() => this.props.navigation.openDrawer()} title="Menu">
           <View style={{flex:1}}>
<MenuItemList />
</View>
             </HeadOnly>

      </Container>
    );
  }
}