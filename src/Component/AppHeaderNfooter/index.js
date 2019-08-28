// // import React,{Component} from 'react';
// // import {View,Text,StyleSheet,TouchableOpacity,Dimensions,Image} from 'react-native';
// // import { Container, Header, Content, Button, Icon } from 'native-base';



// // export default class AppHeader extends React.Component{
// //     render(){
// //         return(
// //             <View style={{flex:1}}><View style={styles.Container}>
            
// //                 <Button  IconLeft onPress={() => {this.props.drawerOpen() } }style={styles.IconStyle} >
// //             <Icon name='menu' />
// //             <Text style={styles.headerStyle}>{this.props.title}</Text>

// //         </Button>
// // </View>
// // <View  
// // style={{flex:1}}> 
// // <Image 
// // style={{  width: Dimensions.get('window').width,flex:1}}
// // source={require('../Slider/sliderimages/Slider1.png')}
// // resizeMode="contain"/>
// //     </View>     
// // </View>  )
// //     }
// // }



// // const styles=StyleSheet.create({
// //     Container:{
// //         flex:1
// //     },
// //     headerStyle:{
// //         textAlign:'center',
// //         backgroundColor:'#fff',
// //         padding:13,
// //         width:Dimensions.get('window').width,
// //         fontWeight:'bold',
// //         color:'#ff0000'
        
// //     },
// //     IconStyle:{
// //         backgroundColor:'#ff0000',
// //         borderRadius:6
// //     }
// // })



// import React, { Component } from "react";
// import {
//     View,
//     Text,
//     StyleSheet
// } from "react-native";

// import { Header, Body, Title, Content, Left, Icon, Right,Button ,Container} from 'native-base'

// class CustomHeader extends Component {
//     render() {
//         return (
//             <Container>
//             <Header>
//                 <Left >
//                 <Button small transparent  onPress={() => this.props.drawerOpen()}><Icon name="menu"  />
//                 </Button>
//                 </Left>
//                 <Body>

//                     <Title style={{textAlign:'center',margin:10}}>{this.props.title}</Title>
//                 </Body>
//                 <Right >

//                     </Right>
//             </Header>
//             </Container>
//         );
//     }
// }
// export default CustomHeader;


import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";
import {View} from 'react-native';
import Slider from '../Slider/Slid';
import FamousCategory from '../FamousCategory/FamCategory';
import TabNav from '../TabNavigator/Tabs';
import FooterTabs from '../FooterTabs/Tabs';


class AppHeaderNfooter extends Component {
  render() {
    return (
        <View style={{flex:1}}>
      <Container >
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.drawerOpen()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right />
        </Header>

        <View style={{flex:1}}>
     
             
              {this.props.children}
          
        </View>

     
<Footer >
   <FooterTabs style={{backgroundColor:'#fcfe32'}} />
    </Footer>
   
      </Container>
      </View>
    );
  }
}

export default AppHeaderNfooter;