import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity,SafeAreaView,Dimensions} from 'react-native';
import {createDrawerNavigator,createStackNavigator,DrawerItems} from 'react-navigation';
import Home from './Pages/Home';
import CardPage from './Pages/CardList';
import ContactUs from './Pages/Contact';
import Feedback from './Pages/Feedback';
import AboutUs from './Pages/About';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
// import StackNav from './StackNavigator';
// import { SocialIcon } from 'react-native-elements'
// import { CachedImage,ImageCacheProvider ,ImageCacheManager} from 'react-native-cached-image';


const {width}=Dimensions.get('window');
 class DrawerItemList extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }
    render() {
      return (  
        <View style={{flex:1,backgroundColor:'#808080'}}>

        <View style={{flex:1,backgroundColor:"#808080",marginTop:20}}>
<Image  source={require('./headerimage.png')}
 style={{flex:1,width:200,alignItems:'center',justifyContent:'center'}} resizeMode="contain" />


          </View>
          
            <View style={{flex:4}}>
              <DrawerItems {...this.props}/>
              </View>
            
          </View>
  
      );
    }
  }
  DrawerItemList.propTypes = {
    navigation: PropTypes.object
  };





     const MenuDrawer=createDrawerNavigator(
    {          
            HomePage:{
            screen:Home,    
        }, 
        CardListPage:{
            screen:CardPage,
            // navigationOptions: { header: null }
        },
        Feedback:{
            screen:Feedback,
            // navigationOptions: { header: null }
        },
        ContactUs:{
            screen:ContactUs
        },
      
       AboutUs:{
           screen:AboutUs
       },   
       
    },
    {
      
        drawerPosition:'left',
        // drawerWidth:250,
        draweOpenRoute:'DrawerOpen',
        draweCloseRoute:'DrawerClose',
        drawerToggleRoute:'DrawerToggle',
        contentComponent:DrawerItemList,
        contentOptions:{
            activeTintColor:'red'
        }
        // contentComponent:({nav})=>{
        //           return (
        //               <View >
        //                 <TouchableOpacity onPress={()=>this.props.navigation.navigate('Feedback')}>
        //                 <Text>feedback
        //                   </Text>
        //                   </TouchableOpacity>
        //                 </View>
        //           )
              // },

    }
)



export default MenuDrawer