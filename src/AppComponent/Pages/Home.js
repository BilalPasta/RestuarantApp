import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import { Container, Header, Content, Item, Input,Body ,Right,Button} from 'native-base';
import AppHeader from '../HeaderApp';
import Slidr from '../Slide';
import HomeMenu from '../HomeMenu';
import {DrawerActions} from 'react-navigation';
import {Icon} from 'react-native-elements';
import IconBadge from 'react-native-icon-badge';
import { CachedImage,ImageCacheProvider ,    ImageCacheManager
} from 'react-native-cached-image';
export default class Home extends Component {


static navigationOptions = {
  // drawerLabelStyle:{{}},
   drawerLabel:'Home',
   Component:{TouchableOpacity},
    drawerIcon:(tintColor)=>{
      return( <Icon 
        name="home"
      type='material-community'
 size={24}
style={{color:tintColor}}
  />

    )}  }
   
  render() {
    return (
      <Container>
              
        <AppHeader  left={   <TouchableOpacity activeOpacity={0.7}
        onPress={()=>{
      this.props.navigation.dispatch(DrawerActions.openDrawer())
          }} >
                           <CachedImage source={require('../../assets/images/menu.png')}  style={{width:30,height:30}}/>

               
               
          </TouchableOpacity>} title="MENU" RightBar={<Right >
          <TouchableOpacity activeOpacity={0.7}
              transparent
              onPress={() => this.props.navigation.navigate('CardListPage')}
            >
          
                 <CachedImage source={require('../../assets/images/cart.png')}  style={{width:30,height:30}}/>

            </TouchableOpacity>
            </Right>}>
            
            <View style={{flex:1}}>
            
 <Slidr />
 <HomeMenu 
OpenMenu={(menuindex,menuname)=>{ this.props.navigation.navigate('RelatedMenuPage',{MenuIndex:menuindex,MenuName:menuname})}}/>

</View>
          </AppHeader>
           
           
         
       
      </Container>
    );
  }
}