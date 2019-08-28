import React, { Component } from 'react';
import { Image,Dimensions,View ,TouchableOpacity,ActivityIndicator} from 'react-native';
import { Container, Header, Content, Card, CardItem,Title, Thumbnail,Footer,FooterTab, Text, Button, Left,Right, Body ,Spinner} from 'native-base';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';
import {Additem,ReduceItem} from '../../Store/Action/index';
import { CachedImage,ImageCacheProvider ,    ImageCacheManager
} from 'react-native-cached-image';
// const images = [
//   "https://firebasestorage.googleapis.com/v0/b/hanifiaapp.appspot.com/o/SliderImages%2FSlider1.png?alt=media&token=de5c726d-5665-42e0-bd45-197b9b31cfbc",
//   "https://firebasestorage.googleapis.com/v0/b/hanifiaapp.appspot.com/o/SliderImages%2FSlider2.png?alt=media&token=f47df3c5-68f7-4e19-bd14-35626f35b195",
//   "https://firebasestorage.googleapis.com/v0/b/hanifiaapp.appspot.com/o/SliderImages%2FSlider3.png?alt=media&token=03ccea18-da84-4877-91b3-941fb6090180",
//   // ...
// ];
// import imageCacheHoc from 'react-native-image-cache-hoc';

// const CacheableImage = imageCacheHoc(Image, {
//   fileHostWhitelist: ['i.redd.it']
// });

// const defaultImageCacheManager = ImageCacheManager();

// const defaultPlaceholderObject = {
//   component: ActivityIndicator,
//   props: {
//     style: {color:'red'}
//   }
// };
 class ItemsDetails extends Component {
//   static navigationOptions = {
//     header:null,
//     drawer: () => ({
//         label: 'Notifications',
//     })
// }
// require('./plus.png')
    constructor(props){
        super(props);
        this.state={
          loaded:false,
            // MenuName:this.props.navigation.state.params.MenuNam,
            // MenuIndex:this.props.navigation.state.params.MenuIndex,

            ItemIndex:this.props.navigation.state.params.ItemIndex,
            AppMenuData:this.props.Appmenudata.AppMenuData,
            MenuName:this.props.ActiveMenuDetails.ActiveMenuName,
            MenuIndex:this.props.ActiveMenuDetails.ActiveMenuIndex,
        }
        this.Load=this.Load.bind(this);
        // alert(this.state.MenuIndex)

    }
    Load(){
      this.setState({loaded:true})
    }
    componentWillReceiveProps(nextprops){
      this.setState({AppMenuData:nextprops.Appmenudata.AppMenuData});
    }
  render() {
    
    return (
      <Container>
<Content>
<Header transparent style={{backgroundColor:'#db0000'}} >
  <Left>
    <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
    <CachedImage  source={require('../../assets/images/back.png')} style={{width:40,height:40}}/>
      </TouchableOpacity>
  

  </Left>

  <Body>
<Text style={{color:'#fff',alignItems:'center',justifyContent:'center',fontWeight:'bold'}}>{this.state.MenuName.toUpperCase() }
  </Text>
  
  </Body>
  <Right >

<TouchableOpacity onPress={()=>this.props.navigation.navigate('CardListPage')} >
<CachedImage source={require('../../assets/images/cart.png')} style={{width:30,height:30}}/>


  </TouchableOpacity>
</Right>
 
</Header>
<View style={{flex:1}}>
{/* <Card> */}
   {/* <CardItem header> */}
   <Text style={{color:'#fff',backgroundColor:'#000',textAlign:'center',fontSize:13,fontWeight:'bold',padding:5,marginTop:5,marginBottom:5}}>{this.state.AppMenuData[this.state.MenuIndex][this.state.ItemIndex].name.toUpperCase() }</Text>
     {/* </CardItem> */}
    {/* <CardItem style={{backgroundColor:"black"}}> */}
        {/* <View style={{flex:1}}> */}
        {/* {alert(this.state.AppMenuData[this.state.MenuIndex][this.state.ItemIndex].imageurl)} */}
           <CachedImage   source={ {uri:this.state.AppMenuData[this.state.MenuIndex][this.state.ItemIndex].imageurl}}   
          
           style={{height:300,
width: Dimensions.get('window').width}}
resizeMode={"stretch"}

      /> 
      {/* </View> */}
    {/* <CardItem footer> */}
    <View style={{flex:1,flexDirection:'row',margin:10,marginBottom:30,borderColor:'#000',borderRightWidth:4,padding:10,borderLeftWidth:4}}>
      <View style={{flex:1,flexDirection:'row'}}>
      <CachedImage style={{flex:1,width:20,height:20,alignItems:'center',justifyContent:'center'}}
       source={require('../silverware-fork-knife.png')}/>
<Text style={{flex:1,marginLeft:3,textAlign:'center',fontWeight:'bold'}}>{this.state.AppMenuData[this.state.MenuIndex][this.state.ItemIndex].quantity.toUpperCase()}</Text>
        </View>

        <View style={{flex:1,flexDirection:'row'}}>
        <CachedImage  style={{flex:
          1,width:20,height:20,alignItems:'center',justifyContent:'center'}}  source={require('../cash.png')}/>
        <Text style={{flex:1,textAlign:'center',fontWeight:'bold'}}>
       {this.state.AppMenuData[this.state.MenuIndex][this.state.ItemIndex].price} </Text>
        </View>
  
       </View>
    {/* </CardItem> */}
 {/* </Card> */}
 </View>
 <View style={{margin:2,marginTop:10}}>
   <View>
     
     </View>
     <View style={{flex:1,flexDirection:'row',marginBottom:5}}>



<View style={{flex:1,flexDirection:'row'}}>

{/* <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>

<TouchableOpacity style={{borderRadius:5}} onPress={()=>this.props.ReduceItem(this.state.MenuIndex,this.state.ItemIndex)} >

 <CachedImage source={require('../minus.png')}  style={{width:25,height:25}}/>
</TouchableOpacity>
</View> */}

<TouchableOpacity style={{flex:1,backgroundColor:'#000',borderRadius:5}} onPress={()=>this.props.ReduceItem(this.state.MenuIndex,this.state.ItemIndex)} >
<View  style={{flex:1,alignItems:'center',justifyContent:'center'}} >
<Text style={{color:'#fff',fontSize:14}}> - </Text>

</View>
</TouchableOpacity>

<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
{(!this.state.AppMenuData[this.state.MenuIndex][this.state.ItemIndex].count)?(<Text>0</Text>):(<Text>{this.state.AppMenuData[this.state.MenuIndex][this.state.ItemIndex].count}</Text>)}

</View>


<TouchableOpacity style={{flex:1,backgroundColor:'#000',borderRadius:5}} onPress={() => this.props.Additem(this.state.MenuIndex,this.state.ItemIndex)} >
<View  style={{flex:1,alignItems:'center',justifyContent:'center'}} >
<Text style={{color:'#fff',fontSize:14}}> + </Text>

</View>
</TouchableOpacity>


</View>
<View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#000',margin:3,borderRadius:5}}>
<TouchableOpacity  style={{flex:1}} onPress={()=>this.props.navigation.navigate('CardListPage')} >
    <Text style={{fontSize:15,fontWeight:'bold',padding:5,color:'#fff'}}>VIEW CARD </Text>
  </TouchableOpacity>
</View>
              </View>
   </View>
 
    </Content>



     {/* <Footer >
        <FooterTab style={{backgroundColor:'#fff'}}>
          
            </FooterTab>
        </Footer>   */}
</Container> 
      
  // <CachedImage source={{uri: images[0]}} style={{width:Dimensions.get('window').width,height:200}} resizeMode={"contain"}/>

  );
  }
}

 

function mapstatetoprops (state){
  return{
    Appmenudata:state.Appdata,
    ActiveMenuDetails:state.Appdata,


  }
}

function mapdispatchtoprops (dispatch){
  return{
    Additem:(Menuindex,itemindex)=>{
      dispatch(Additem(Menuindex,itemindex))
    },
    ReduceItem:(Menuindex,itemindex)=>{
      dispatch(ReduceItem(Menuindex,itemindex))
    }

  }
}


export default connect(mapstatetoprops,mapdispatchtoprops)(ItemsDetails);
{/* export default ItemsDetails; */}


