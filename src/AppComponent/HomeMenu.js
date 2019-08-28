import React, { Component } from 'react';
import { View, Text, StyleSheet, Image ,TouchableOpacity,Dimensions,TouchableNativeFeedback,Button,TouchableHighlight} from 'react-native';
import { Right,Body,List,ListItem } from 'native-base';
import {connect} from 'react-redux'

import {Icon} from 'react-native-elements';
import {ActiveMenu} from '../Store/Action/index';
import { CachedImage,ImageCacheProvider ,    ImageCacheManager
} from 'react-native-cached-image';
let {width} = Dimensions.get('window');
const defaultImageCacheManager = ImageCacheManager();

class HomeMenu extends Component {
    static navigationOptions = {
        drawer: () => ({
            label: 'Notifications',
        })
    }
    constructor(props) {
        super(props)

        this.state = {
            AppMenuData:this.props.Appmenudata

        }
        this.ActiveMenuDetails=this.ActiveMenuDetails.bind(this)
     
    }

    ActiveMenuDetails(Menuindex,MenuName){
        this.props.ActiveMenu(Menuindex,MenuName);
this.props.OpenMenu(Menuindex,MenuName);    }

componentWillReceiveProps(nextprops){
    this.setState({AppMenuData:nextprops.Appmenudata})
}

// clearCache() {
//     defaultImageCacheManager.clearCache()
//         .then((data) => {
//             console.log('Cache cleared'+data);
//         }).catch((error)=>{

//         });}

//         componentWillMount(){
//             this.clearCache();
//           }
    render() {
        return (
           
            <View style={styles.Container}>
{/* <View style={{flex:1,flexDirection:'column'}}> */}
<View style={{flex:1, flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    paddingTop:20,backgroundColor:'#f4f4f4'}}>

       
       
           <Text style={{flex:1,fontSize:14,fontWeight:'bold'}}>Buy Your Mood & Preference</Text>
         
            
    </View>
    {/* </View> */}

                <View style={styles.boxContainer}>

                <View style={{flex:1,margin:5}}>
     
<TouchableOpacity style={{  flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',backgroundColor:'#db0000',borderRadius:3,width:'100%',height:'100%'}}   onPress={()=>{
            // this.clearCache();
            this.ActiveMenuDetails(2,"Frozen Meet");
        
        }}
        activeOpacity={0.7}
        >
    <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Frozen Meet
        </Text>
        
    </TouchableOpacity>
                    </View>

                    

                    <View style={{flex:1,margin:5}}>
                    <TouchableOpacity 
                       activeOpacity={0.7} style={{  flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',backgroundColor:'#db0000',borderRadius:3,width:'100%',height:'100%'}}    onPress={()=>{
            // this.clearCache();
        this.ActiveMenuDetails(6,"Variety Of Burgers")}}>
    <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Variety Of Burgers
        </Text>
        
    </TouchableOpacity>


                    </View>

                    
            

                </View>




                <View style={styles.boxContainer} >

               
                <View style={{flex:1,margin:5}}>
                <TouchableOpacity 
                   activeOpacity={0.7}
                   style={{  flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',backgroundColor:'#db0000',borderRadius:3,width:'100%',height:'100%'}}   onPress={()=>{
            // this.clearCache();
            this.ActiveMenuDetails(9,"Zinger");
        
        }}>
    <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Zinger
        </Text>
        
    </TouchableOpacity>
      
                    </View>


            
<View style={{flex:1,margin:5}}>
       
   <TouchableOpacity    activeOpacity={0.7}
    style={{  flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',backgroundColor:'#db0000',borderRadius:3,width:'100%',height:'100%'}}   onPress={()=>{
            // this.clearCache();
            this.ActiveMenuDetails(3,"Gyro");
        
        }}>
    <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Gyro
        </Text>
        
    </TouchableOpacity>
                    </View>

                </View>




                <View style={styles.boxContainer}>

                
                <View style={{flex:1,margin:5}}>
          
<TouchableOpacity    activeOpacity={0.7}
 style={{  flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',backgroundColor:'#db0000',borderRadius:3,width:'100%',height:'100%'}}   onPress={()=>{
            // this.clearCache();
            this.ActiveMenuDetails(1,"Fried Variety");
        
        }}>
    <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Fried Variety
        </Text>
        
    </TouchableOpacity>
                    </View>
                    <View style={{flex:1,margin:5}}>
          
<TouchableOpacity    activeOpacity={0.7}
 style={{  flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',backgroundColor:'#db0000',borderRadius:3,width:'100%',height:'100%'}}   onPress={()=>{
            // this.clearCache();
            this.ActiveMenuDetails(5,"Variety Of Broast");
        
        }}>
    <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Variety Of Broast
        </Text>
        
    </TouchableOpacity>
                    </View>

           
 
            
                </View>


                <View style={styles.boxContainer}>

                               <View style={{flex:1,margin:5}}>
          
<TouchableOpacity 
   activeOpacity={0.7} style={{  flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',backgroundColor:'#db0000',borderRadius:3,width:'100%',height:'100%'}}   onPress={()=>{
            // this.clearCache();
            this.ActiveMenuDetails(8,"Variety Of Sandwiches");
        
        }}>
    <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Variety Of Sandwiches
        </Text>
        
    </TouchableOpacity>
                    </View>

                    

           
            <View style={{flex:1,margin:5}}>
           
<TouchableOpacity    activeOpacity={0.7} style={{  flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',backgroundColor:'#db0000',borderRadius:3,width:'100%',height:'100%'}}   onPress={()=>{
            // this.clearCache();
            this.ActiveMenuDetails(4,"Variety Of Mandi");
        
        }}>
    <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Variety Of Mandi
        </Text>
        
    </TouchableOpacity>
                    </View>

                </View>

                <View style={styles.boxContainer}>

               
                 <View style={{flex:1,margin:5}}>
         
<TouchableOpacity    activeOpacity={0.7} style={{  flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',backgroundColor:'#db0000',borderRadius:3,width:'100%',height:'100%'}}   onPress={()=>{
            // this.clearCache();
            this.ActiveMenuDetails(0,"BAR B.Q Variety");
        
        }}>
    <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>BAR B.Q Variety
        </Text>
        
    </TouchableOpacity>
                    </View>

            <View style={{flex:1,margin:5}}>

         
<TouchableOpacity    activeOpacity={0.7} style={{  flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',backgroundColor:'#db0000',borderRadius:3,width:'100%',height:'100%'}}   onPress={()=>{
            // this.clearCache();
            this.ActiveMenuDetails(7,"Variety of Rolls");
        
        }}>
    <Text style={{color:'#fff',fontSize:15,fontWeight:'bold'}}>Variety of Rolls
        </Text>
        
    </TouchableOpacity>
                    </View>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection: 'column',
        

    },
    boxContainer: {
        flex: 1,
       
        flexDirection: 'row',
    //   marginTop:40
     
    },
    MenuButtonStyle:{
        // flex: 1 ,backgroundColor:'#7ab8a2',paddingLeft:10,paddingRight:10,marginRight:10,marginLeft:10,
        // backgroundColor:''
    }
})


function mapstatetoprops(state){
    return{
Appmenudata:state.Appdata.AppMenuData,
data:state.Appdata
    }
}
function mapdispatchtoprops(dispatch){
    return{
        ActiveMenu:(data,MenuName)=>{
            dispatch(ActiveMenu(data,MenuName))
        }

    }
}
export default connect(mapstatetoprops,mapdispatchtoprops)(HomeMenu);