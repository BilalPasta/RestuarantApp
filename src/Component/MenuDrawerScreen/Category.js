import React,{Component} from 'react';
import {View,Text} from 'react-native';
import { Container, Header, Content, Item, Input, Icon ,} from 'native-base';
import AppheaderNfooter from '../AppHeaderNfooter/index';
import CategoryList from '../Category/category';
export default class Category extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Category",
    headerLeft: <Icon name="menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('')} />,
    drawerLabel: 'Category',
  })
  render() {
    return (
      <Container>
    
    <AppheaderNfooter drawerOpen={() => this.props.navigation.openDrawer()} title="Category">
        <View style={{flex:1}}>
            <CategoryContent />
            </View>
        </AppheaderNfooter>
  
    </Container>
    );
  }
}