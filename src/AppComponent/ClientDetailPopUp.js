import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';
import React,{Component} from 'react'; 
import {View,Text,Button} from 'react-native';

 export default class ClientDetailPopUp extends React.Component{

 render(){
     return(<View >

<Button 
title="open dailog"
onPress={()=>this.popupDialog.show(() => {
})}/>
        <PopupDialog
          dialogTitle={<DialogTitle title="Dialog Title" />}
          ref={(popupDialog) => { this.popupDialog = popupDialog; }}
          // containerStyle={{alignItems:'center',justifyContent:'center',position:'absolute'}}
        >
          <View>
            <Text>Hello</Text>
          </View>
        </PopupDialog>
      </View>

     )
 }


 }

