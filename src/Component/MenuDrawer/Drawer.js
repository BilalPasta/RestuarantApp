// import React, { Component } from 'react';
// import { Drawer } from 'native-base';
// import SideBar from './SideBar';
// import {DrawerNavigator} from 'react-navigation'
// export default class DrawerExample extends Component {
//   render() {
//     closeDrawer = () => {
//       this.drawer._root.close()
//     };
//     openDrawer = () => {
//       this.drawer._root.open()
//     };
//     return (
//       <Drawer
//         ref={(ref) => { this.drawer = ref; }}
//         content={<SideBar navigator={this.navigator} />}
//         onClose={() => this.closeDrawer()} >
//       // Main View
//       </Drawer>
//     );
//   }
// }




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
//       <MyApp />
//     )
//   }
// }

// const CustomDrawerContentComponent = (props) => (

//   <Container>
//     <Header style={styles.drawerHeader}>
//       <Body>
//         <Image
//           style={styles.drawerImage}
//           source={require('./assets/DrawerIcons/Unsure-Programmer-Logo.png')} />
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







import React,{Component} from 'react';
import {DrawerNavigator} from 'react-navigation';
import About from '../MenuDrawerScreen/About';
import Contact from '../MenuDrawerScreen/Contactus';
import Menu from '../MenuDrawerScreen/Menu';
import Home from '../MenuDrawerScreen/home';
import FeedBack from '../MenuDrawerScreen/feedback';
import MyOrder from '../MenuDrawerScreen/myOrder';
import {View,Image} from 'react-native';
import { Container, Header,Button, Content, List, ListItem, Text, Left, Right, Icon ,Body,Thumbnail} from 'native-base';

// import Category from '../MenuDrawerScreen/Category';
// const =()=>{
//   return (
//     <View style={{flex:1}}>
//        <View style={{flex:1,backgroundColor:'#fcfb33'}}>
//        <Text>
//          bilal
//          </Text>
//        </View>
//        <View style={{flex:1,backgroundColor:'#fcfb83'}}>
//        <Text>
//          bilal
//          </Text>
//        </View>
//       </View>
//   )
// }



 class DrawerItemList extends Component {
  render() {
    return (
      <Container>
        <View style={{flex:1}}>
          <View style={{flex:1}}>
          <Image
            source={{
              uri: "https://www.atyourservice.pk/wp-content/uploads/2018/01/Hanifia-Hunter-Beef-Jama-Masjid-New-Town-Karachi.jpg"
            }}
            style={{
              height: 120,
              resizeMode: "stretch",
              justifyContent: "center",
              alignItems: "center"
            }}/>
            {/* <Image
              square
              style={{ height: 80, width: 70 }}
              source={{
                uri: "https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/react-navigation/img/logo.png"
              }}
            />
          </Image>            */}
           </View>
            <View style={{flex:4}}>
           
          <List>
            <ListItem button noIndent style={{ backgroundColor: "#cde1f9" }} onPress={()=>this.props.navigation.navigate("HOME")}>
            <Left>
                <Icon name="arrow-forward" />
              </Left>
              <Body>
                <Text>Home</Text>
                {/* </Button> */}
              </Body>
              {/* <Right>
                <Icon name="arrow-forward" />
              </Right> */}
            </ListItem>
            <ListItem noIndent button onPress={()=>this.props.navigation.navigate("MENU")}   >
            <Left>
                <Icon name="arrow-forward" />
              </Left>
             <Body>
                <Text>Menu</Text>
              </Body>
              {/* <Right>
                <Icon name="arrow-forward" />
              </Right> */}
            </ListItem>
            <ListItem noIndent button onPress={()=>this.props.navigation.navigate("MYORDER")}>
               <Left>
                <Icon name="arrow-forward" />
              </Left>
              <Body>
                <Text>MyOrder</Text>
              </Body>
              {/* <Right>
                <Icon name="arrow-forward" />
              </Right> */}
            </ListItem>
            <ListItem onPress={()=>this.props.navigation.navigate("CONTACT")}>
            <Left>
                <Icon name="arrow-forward" />
              </Left>
              <Body>
                <Text>ContactUs</Text>
              </Body>
              {/* <Right>
                <Icon name="arrow-forward" />
              </Right> */}
            </ListItem>
            <ListItem onPress={()=>this.props.navigation.navigate("ABOUT")}>
            <Left>
                <Icon name="arrow-forward" />
              </Left>
              <Body>
                <Text>AboutUs</Text>
              </Body>
              {/* <Right>
                <Icon name="arrow-forward" />
              </Right> */}
            </ListItem>
          </List>
        </View>
        </View>
      </Container>
    );
  }
}

const DrawerNav=DrawerNavigator({
  HOME:{
    screen:Home
  },
  FEEDBACK:{
    screen:FeedBack
      },
      
      MYORDER:{
        
            screen:MyOrder
        },
  ABOUT:{
    
        screen:About
    },
  MENU:{
    screen:Menu
},
  
  
    CONTACT:{
      screen:Contact
    }
},{
  drawerWidth:250,
  drawerPosition:'left',
  contentComponent:DrawerItemList
}
)


export default DrawerNav;




