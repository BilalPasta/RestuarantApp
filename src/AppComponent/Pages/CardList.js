import React,{Component} from 'react';
import {View,TouchableOpacity,Image} from 'react-native';
import { Container, Header, Content, Item, Input,Body,Right,Button,Text } from 'native-base';
import OrderItemDetails from '../OrderItemDetail';
import AppHeader from '../HeaderApp';
import {Icon} from 'react-native-elements';
import {EditStatus} from '../../Store/Action/index';
import {connect} from 'react-redux';
import {DrawerActions} from 'react-navigation';

import { CachedImage,ImageCacheProvider ,    ImageCacheManager
} from 'react-native-cached-image';
 class CardListPage extends Component{
    constructor(props){
        super(props)
       this.state={
        EditableStatus:this.props.EditableStatus
    }
    }
    componentWillReceiveProps(nextprops){
        this.setState({EditableStatus:nextprops.EditableStatus});
    }
    static navigationOptions = ({ navigation }) => ({
   drawerLabel:'Cart',
        drawerIcon:(tintColor)=>{
          return( <Icon 
            name="cart-outline"
          type='material-community'
     size={24} />
    
        )}  })
           
    render(){
        return(
            <Container>
             
        <AppHeader left={   <TouchableOpacity activeOpacity={0.7} 
         onPress={()=>{
      this.props.navigation.goBack()
          }} >
               
            <CachedImage source={require('../../assets/images/back.png')} style={{width:40,height:40}}/>
          </TouchableOpacity>}   title="Cart" RightBar={<Right >
          <TouchableOpacity activeOpacity={0.7}
              transparent
              onPress={() => this.props.EditStatus()}
            >
            {(this.state.EditableStatus)?(            <CachedImage source={require('../pencil-off.png')} style={{width:30,height:30}}/>
):(            <CachedImage source={require('../pencil.png')}   style={{width:30,height:30}}  />
)}
             
            </TouchableOpacity>
            </Right>}>
            
<OrderItemDetails/>



          </AppHeader>
           
           
     
       
      </Container>
        )
    }
}

function MapStateToProps(state){
    return{
        EditableStatus:state.Appdata.EditableStatus

    }
}
function MapDispatchToProps(dispatch){
    return{
        EditStatus:()=>{
            dispatch(EditStatus())
        }
    }
}


export default connect(MapStateToProps,MapDispatchToProps)(CardListPage);