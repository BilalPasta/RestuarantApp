// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  * @flow
// //  */
// // import fb from 'firebase';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Button,
  ScrollView,StatusBar,TouchableOpacity,
} from 'react-native';
 

// // import AppHomePage from './src/AppComponent/Pages/Home';
// // import AppHeadr from '/src/AppComponent/HeaderApp';
// // import HomeMenu from './src/AppComponent/HomeMenu';
// // import Sample from "./Sample";
import CardList from './src/AppComponent/Pages/CardList';

import Slider from './src/AppComponent/Slide';
// import AppHeader from './src/AppComponent/HeaderApp';
import RelatedMenuPage from './src/AppComponent/Pages/RelatedMenuPage'
// import ButtonThemeExample from './src/Component/Drawer';
// import Imageslider from './src/Component/Slider/Slid';
// import FamousCategory from './src/Component/FamousCategory/FamCategory';
// import Category from './src/Component/Category/category';
// import MenuItems from './src/Component/Menu/Menuitems';
// import ItemDetails from './src/Component/Menu/MenuItemDetails';
// import Headr from './src/Component/AppHeaderNfooter/OnlyHeader';
// import TabNav from './src/Component/TabNavigator/Tabs';
// import About from './src/Component/MenuDrawerScreen/About';
// import Contact from './src/Component/MenuDrawerScreen/Contactus';
// import Menu from './src/Component/MenuDrawerScreen/Menu';
// import Drawernav from './src/Component/MenuDrawer/Drawer';
// import Cate from './src/Component/MenuDrawerScreen/Category';
// import FooterTabs from './src/Component/FooterTabs/Tabs';
// import Menuitems from './src/AppComponent/Pages/RelatedMenuPage';
// import OrderItemDetails from './src/AppComponent/OrderItemDetail';
// import CardListPage from './src/AppComponent/Pages/CardList';
// import MenuDrawer from './src/AppComponent/DrawerNavigator';
import Imageslider from './src/AppComponent/Slide';
import AppStackNavigator from './src/AppComponent/StackNavigator';
import ClientDetailPopUp from './src/AppComponent/ClientDetailPopUp';
import ToastDuration from './src/AppComponent/Toast'
// import Home from './src/AppComponent/Pages/Home';
// import Feedback from './src/AppComponent/Pages/Feedback';
import ItemsDetails from './src/AppComponent/Pages/ItemDetails'
import {Provider} from 'react-redux';
import Store from './src/Store/index';
import ModalExample from './src/AppComponent/Pages/UserDetails';
// import DrawerNav from './src/AppComponent/DrawerNavigator';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//   'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//   'Shake or press menu button for dev menu',
// });
export default class App extends Component {

  // myView =  <View style={{flex:1}}><Imageslider />
  // <View style={{flex:2}}></View><FamousCategory />
  // </View>
// myView=<Category/>
// myView=<MenuItems/>
// myView=<ItemDetails/>

// myView=<ItemDetails/>
// myView=<Category/>
// myView=<TabNav/>
// myView=<Cate/>
// myView=<Drawernav/>
// myView=<FooterTabs/>
 myView= <Provider store={Store}>   
 {/* <View>  
   <StatusBar translucent={true} barStyle={"dark-content"} backgroundColor={"transparent"} />
<ClientDetailPopUp/>
</View>  */}
             {/* <View> */}
   
 <AppStackNavigator />
 
 {/* <DrawerNav/> */}

 </Provider>;
  render() {
    return this.myView;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
}); 

//




// import React, { Component } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Image
// } from "react-native";

// //library imports 
// import { Container, Content, Icon, Header, Body } from 'native-base'
// import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'

// //custom files 
// import AppStackNavigator from './AppStackNavigator'

// import SettingsScreen from './SettingsScreen'
// import HomeScreen from "./HomeScreen";


// export default class App extends Component {

//   render() {
//     return (
//       <Provider store={Store}>
//       <MyApp />
//       </Provider>
//     )
//   }
// }

// const CustomDrawerContentComponent = (props) => (

//   <Container>
//     <Header style={styles.drawerHeader}>
//       <Body>
    //  <Image
    //       style={styles.drawerImage}
    //       source={require('./assets/DrawerIcons/Unsure-Programmer-Logo.png')} />

          
//       </Body>
//     </Header>
//     <Content>
//       <DrawerItems {...props} />
//     </Content>

//   </Container>

// );

// const MyApp = DrawerNavigator({

//   // For each screen that you can navigate to, create a new entry like this:
//   Home: {
//     screen: HomeScreen,
//   },
//   Settings: {
//     screen: SettingsScreen
//   }
// },
//   {
//     initialRouteName: 'Home',
//     drawerPosition: 'left',
//     contentComponent: CustomDrawerContentComponent,
//     drawerOpenRoute: 'DrawerOpen',
//     drawerCloseRoute: 'DrawerClose',
//     drawerToggleRoute: 'DrawerToggle'
//   });


// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   drawerHeader: {
//     height: 200,
//     backgroundColor: 'white'
//   },
//   drawerImage: {
//     height: 150,
//     width: 150,
//     borderRadius: 75
//   }

// })



import DrawerNav from './src/AppComponent/DrawerNavigator';
// import React, {Component} from 'react';
// import {Text, View,StatusBar,TouchableOpacity} from 'react-native';
// import {createDrawerNavigator,DrawerActions,createStackNavigator} from 'react-navigation';
// import { Button } from 'react-native-elements';
// import StackNavigationStack from './src/AppComponent/StackNavigator';
// class DrawerComponent extends Component{
//     render(){
//         return (
//             <View style={{flex:1,backgroundColor:"#2a7a3d",justifyContent: "center",alignItems: "center"}}>
//                 {/* <Text style={{fontSize: 20,color:"#fff",textAlign: "center"}}>This is Drawer</Text> */}
//                 <Button
//                 title="open"
//                 onPress={()=>{
//                   this.props.navigation.navigate("Openpage");
//                 }}
//                 />
//             </View>
//         )
//     }
// }

// class Myclass extends React.Component{
//   render(){
//     return(<View>
//       <TouchableOpacity onPress={()=>this.props.navigation.navigate('Drawer')}><Text>Open DrawerPage
//         </Text>
//         </TouchableOpacity>
//       </View>)
//   }
// }
// class Home extends Component<Props>{
//   render(){
//       return <TouchableOpacity onPress={()=>{
//         this.props.navigation.dispatch(DrawerActions.openDrawer())
//       }} style={{flex:1,paddingTop: 20,backgroundColor:"#fff",justifyContent: "center",alignItems: "center"}}><Text style={{fontSize:20,textAlign: "center"}}>Click anywhere to To Open</Text></TouchableOpacity>
//   }
// }
// class Open  extends Component<Props>{
//   render(){
//       return <TouchableOpacity onPress={()=>{
//         // this.props.navigation.dispatch(DrawerActions.closeDrawer())
//         // this.props.navigation.navigate("Openpage")
//         // alert()
//         this.props.navigation.openDrawer()
//       }} style={{flex:1,paddingTop: 20,backgroundColor:"#fff",justifyContent: "center",alignItems: "center"}}><Text style={{fontSize:20,textAlign: "center"}}>Click anywhere to To Open</Text></TouchableOpacity>
//   }
// }


// const DrawerNav = createDrawerNavigator({
//     Home:{screen:Home},
//     Openpage:{screen:Open}

// },{
//     contentComponent:({nav})=>{
//         return (
//             <DrawerComponent />
//         )
//     }
// });


// const Stacknav=createStackNavigator({
//   // MyPage:{screen:Myclass},
//   Drawer:{
//     screen:DrawerNav
//       }  ,
//       Openpage:{
//         screen:Open}
 
// });
// export default class App extends Component<Props> {
//   render() {
//     return (
//         <View style={{flex:1,backgroundColor: "#fff"}}>
//             <StatusBar translucent={true} barStyle={"dark-content"} backgroundColor={"transparent"} />
//             <Stacknav />
//         </View>
//     )
//   }
// }