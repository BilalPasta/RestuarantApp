// import React, { Component } from "react";
// import {
//   Container,
//   Header,
//   Title,
//   Content,
//   Text,
//   Button,
//   Footer,
//   FooterTab,
//   Left,
//   Right,
//   Body
// } from "native-base";
// import {Icon} from 'react-native-elements';
// import {View,TouchableNativeFeedback} from 'react-native';


// class HeaderApp extends Component {
//   render() {
//     return (
//       <Container >
//         <Header>
        
//           <Left >
//              {/* <Button transparent> */}
//             <Icon 

// name='menu'
// type='material-community'
// color='red'
// size={24}
// onPress={()=> this.props.drawerOpen()} />       
// {/* </Button>   */}
//           </Left>
//           <Body>
//             <Title>{this.props.title}</Title>
//           </Body>
//           {this.props.RightBar}
       
//         </Header>

//         <View style={{flex:1}}>
     
            
//               {this.props.children}
          
//         </View>


   
//       </Container>
 
//     );
//   }
// }

// export default HeaderApp;



import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
    Image
} from "react-native";

import { Header, Body, Title, Content, Left, Right,Container } from 'native-base';
import {Icon} from 'react-native-elements';
import { CachedImage,ImageCacheProvider ,    ImageCacheManager
} from 'react-native-cached-image';

class HeaderApp extends Component {
    render() {

        return (
            <Container>
               
            <Header style={{backgroundColor:'#db0000'}}>
                <Left>
                 
                  {this.props.left}
                    </Left>
                <Body style={{backgroundColor:"transparent"}}>
                  
                    <CachedImage style={{ width:'100%',height:50,alignItems:'center',justifyContent:'center'}} resizeMode="contain"   source={require('./headerimage.png')}/>
                </Body>
                {this.props.RightBar}    
                     
                   </Header>
                   <View style={{flex:1}}>
     
            
               {this.props.children}
          
        </View>
                   </Container>

        );
    }
}
export default HeaderApp;



// class Home extends Component<Props>{
//       render(){
//           return 
//       }
//     }