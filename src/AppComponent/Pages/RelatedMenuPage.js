import React,{Component} from 'react';
import {View,TouchableOpacity,Image,ActivityIndicator} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
import Slider from '../Slide';
import Menuitems from '../MenuItems';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import AppHeader from '../HeaderApp';
import { CachedImage,ImageCacheProvider ,    ImageCacheManager
} from 'react-native-cached-image';



 export default class RelatedMenuPage extends Component {
constructor(props){
  super(props);
  this.state={
    show:false
  }
}
// componentDidMount(){
//   setInterval(()=>{
// this.setState({show:true})
//   },1000)
// }

  render() {
    return (
        <Container>
         <AppHeader left={<TouchableOpacity activeOpacity={0.7}  onPress={()=>{ this.props.navigation.goBack()
          }}>
        
        <CachedImage source={require('../../assets/images/back.png')} style={{width:40,height:40}}/>
                    </TouchableOpacity>} RightBar={    <Right >
<TouchableOpacity activeOpacity={0.7}
transparent
onPress={() => this.props.navigation.navigate('CardListPage')}
>
<CachedImage source={require('../../assets/images/cart.png')}  style={{width:30,height:30}}/>

</TouchableOpacity>
</Right>}>
            
      
    
 <View style={{flex:1}}>
 <Slider/>
 <Menuitems    OpenItemDetails={(itemindex)=>this.props.navigation.navigate('ItemDetailsPage',{ItemIndex:itemindex})}/>
</View>
 </AppHeader>)
      </Container>
    );
  }
}



