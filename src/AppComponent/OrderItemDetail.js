import React,{Component} from 'react';
import {View,StyleSheet,ScrollView,TouchableOpacity,Image} from 'react-native';
import { Icon, Button } from 'react-native-elements'
import { Container, Header,FooterTab, Content, List, ListItem, Text,Card,CardItem,Footer, Item} from 'native-base';
import {connect} from 'react-redux';
import {cancelItem,Additem,ReduceItem,Order} from '../Store/Action/index';

import ClientDetailPopUp from './ClientDetailPopUp';
import AddModal from './Pages/UserDetails';
import { CachedImage,ImageCacheProvider ,    ImageCacheManager} from 'react-native-cached-image';

let OrderItems=[];
 class OrderItemDetails extends React.Component{
    constructor(props){
        super(props);

        this.handleData = this.handleData.bind(this);
        
        this.state={
          // dummydata:[[{name:'zinger',description:'dsfsdfdsfdsf',price:500,count:2},
          // {name:'zinger',description:'dsfsdfdsfdsf',price:700,count:6}],[{name:'zinger',description:'dsfsdfdsfdsf',price:500,count:2},
          // {name:'zinger',description:'dsfsdfdsfdsf',price:700,count:6}],[{name:'zinger',description:'dsfsdfdsfdsf',price:500,count:2},
          // {name:'zinger',description:'dsfsdfdsfdsf',price:700,count:6}],[{name:'zinger',description:'dsfsdfdsfdsf',price:500,count:2},
          // {name:'zinger',description:'dsfsdfdsfdsf',price:700,count:6}]],
            AppMenuData:this.props.Appmenudata.AppMenuData,
            TotalAmount:this.props.TotalAmount,
            EditableStatus:this.props.EditableStatus,
            email: '',
            contact:'',
            // OrderItems:[]
        }
                this._onPressAdd = this._onPressAdd.bind(this);        

    }
    handleData(email,contact) {
      this.setState({
        email: email,
        contact:contact

      });
      // console.log(email,contact);
    }
    _onPressAdd () {
      // alert("You add Item");
      this.refs.addModal.showAddModal();
  }

   componentWillReceiveProps(nextprops){
     this.setState({AppMenuData:nextprops.Appmenudata.AppMenuData,TotalAmount:nextprops.TotalAmount,EditableStatus:nextprops.EditableStatus});
   }
    render(){
      OrderItems=[];
        return(
            <Container>
              <View style={{flexDirection:'row',marginTop:10}}>

<Text style={{flex:1,fontSize:12,fontWeight:'bold',alignItems:'center',textAlign:'center',justifyContent:'center',margin:2.,borderWidth:2,borderColor:'red',borderRadius:2}}>      TOTAL COST    </Text>
<Text style={{flex:1,fontSize:12,fontWeight:'bold',textAlign:'center',justifyContent:'center',borderWidth:2,borderColor:'red',margin:2,borderRadius:2}}>      {this.state.TotalAmount}   </Text>

</View>
              <Text style={{fontSize:15,fontWeight:'bold',margin:5,paddingLeft:5}}>Items
                </Text>
                {/* <ClientDetailPopUp/> */}

            <Content contentContainerStyle={{margin:5}}>
            {/* <Card> */}

                {this.state.AppMenuData.map((menuArrays,i)=>{
                return  menuArrays.map((item,j)=>{

if(item.count>0){
  OrderItems.push(item);
  // this.setState=({OrderItems:OrderItems});
  





  
 
  return ( <Card key={j}>   
    <CardItem  style={{ borderBottomColor: 'rgba(0,0,0,0.1)'}}>

  <View style={{flex:1,flexDirection:'row'}}>
      <View style={{flex:2}}>
      <Text style={{fontSize:12}}>{item.name}</Text>
      <Text style={{fontSize:12,textAlign:'left',paddingLeft:10}}>Cost</Text>
    
          </View>


          <View style={{flex:3}}>           
<View style={{flex:1,alignItems:'flex-end'}}>
{(this.state.EditableStatus)?( <TouchableOpacity style={{backgroundColor:'#c1c1c1',borderRadius:5}}  onPress={() => this.props.cancelItem(i,j)}>
<CachedImage source={require('./close.png')} style={{width:25,height:25}} />
  </TouchableOpacity> ):null}

</View>
<View style={{flexDirection:'row'}}>
<Text style={{fontSize:12,textAlign:'center'}}>{item.price}  X </Text>
{(this.state.EditableStatus)?( <TouchableOpacity style={{borderRadius:5}} onPress={() => this.props.ReduceItem(i,j)}>

   <CachedImage source={require('./minus.png')}  style={{width:25,height:25}}/>
   </TouchableOpacity> )
  :null}

  <Text style={{fontSize:12,textAlign:'center'}}>
 {item.count} 
</Text>

{(this.state.EditableStatus)?(<TouchableOpacity style={{borderRadius:5}} onPress={() => this.props.Additem(i,j)} >
{/* <Icon name="plus" size={18} 
  color='#db0000'
iconStyle={{textAlign:'center',marginLeft:6,marginRight:6}}  type='font-awesome'/> */}
<CachedImage source={require('./plus.png')}  style={{width:25,height:25,}}/>
</TouchableOpacity>
 
   )
    :null}
  <Text style={{fontSize:12,textAlign:'center'}}>
 = {item.count*item.price} </Text>
</View>

              </View>

      </View>

    
    </CardItem> 
    </Card> )
}
})
                })}
                

                 {/* </Card> */}
       
            </Content>
         
            <Footer  >
                   <FooterTab  style={{backgroundColor:'#db0000'}}>

                   <TouchableOpacity
                    // onPress={()=>this.props.Order(OrderItems)}
                    onPress={()=>this._onPressAdd()}
                    style={{backgroundColor:'#db0000',flex:1}} >
                   <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                     <Text style={{textAlign:'center',color:'#fff'}}>
                    Place Order 
                       </Text>
                       </View>
                     </TouchableOpacity>
  {/* <View style={{flex:1,flexDirection:'row',marginBottom:15}}>

                             <Text style={{flex:1,fontSize:12,fontWeight:'bold',alignItems:'center',textAlign:'center'}}>      TOTAL COST    </Text>
                             <Text style={{flex:1,fontSize:12,fontWeight:'bold',textAlign:'center'}}>      {this.state.TotalAmount}   </Text>

                 </View>

                 <View style={{flex:1,flexDirection:'column'}}>
                   <TouchableOpacity onPress={()=>this.props.Order(OrderItems)}>
                     <Text>
                    Place Order 
                       </Text>
                     </TouchableOpacity>
                   </View> */}
                 </FooterTab>
                 {console.log(this.state.email,'lknn')}
    </Footer>
    <AddModal ref={'addModal'} 
    handlerFromParant={this.handleData}
    
     UserOrder={()=>this.props.Order({OrderItems:OrderItems,email:this.state.email,contact:this.state.contact})} 
    // UserOrder={()=>this.props.Order(this.state)}
    > 

</AddModal>
          </Container>
           

        )
    }
}

function mapStateToProps(state){
  return{
      Appmenudata:state.Appdata,
      TotalAmount:state.Appdata.TotalAmount,
      EditableStatus:state.Appdata.EditableStatus
  }
}
function mapDispatchToProps(dispatch){
return{
  cancelItem:(menuindex,itemindex)=>{
    dispatch(cancelItem(menuindex,itemindex));
  },
  Additem:(MenuIndex,itemindex)=>{
    dispatch(Additem(MenuIndex,itemindex))
  },
  ReduceItem:(MenuIndex,itemindex)=>{
    dispatch(ReduceItem(MenuIndex,itemindex))
  },
  Order:(obj)=>{
    dispatch(Order(obj))
  }

}
}

export default connect(mapStateToProps,mapDispatchToProps)(OrderItemDetails);


