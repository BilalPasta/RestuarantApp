import React, {Component} from 'react';
import {Button, Dimensions, Text, View,Image,StatusBar,ActivityIndicator,ImageBackground} from 'react-native';
import {Getdata} from '../../Store/Action/index';
import {connect} from 'react-redux';
import { CachedImage,ImageCacheProvider ,    ImageCacheManager
} from 'react-native-cached-image';

let {width} = Dimensions.get('window');
class Splash extends Component {

    // static navigationOptions = {
    //     title: "Splash",
    //     header:null
    // };
constructor(props){
super(props);
this.state={
    // store:null,
    // loading:true
}
this.props.Getdata();

}

// componentWillMount(){
// }
    componentDidMount(){
        setTimeout(()=>{
            // if(this.state.store!==null){    
    this.props.navigation.navigate("HomePage")
// }

            } ,4000);

           
    }

    render() {
        const {navigate} = this.props.navigation;
        

    return (
         <View style={{flex:1}}> 
      
   <CachedImage style={{flex:1,width:width}}   source={require('../../assets/images/SplashScreen.png')}  resizeMode="contain">
    <ActivityIndicator animating={ this.state.loading }  size="large" style={{flex:1,alignItems:'center',justifyContent:'center'}}  color="#db0000"/>

</CachedImage> 
    {/* <Image style={{flex:1,width:width}} source={require('./SplashImages/SplashScreen.png')} resizeMode="contain"/>  */}
     </View>
  
     ) 
    
}}

function mapstatetoprops(state){
    return{
Appdata:state.Appdata.AppMenuData
    }
}

function mapdispatchtoprops(dispatch){
return{
    Getdata:()=>{
        dispatch(Getdata());
    }
}
}
export default connect(mapstatetoprops,mapdispatchtoprops)(Splash);