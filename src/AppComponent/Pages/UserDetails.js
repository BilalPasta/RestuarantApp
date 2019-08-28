import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,Button,
    TextInput,TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
import Modal from 'react-native-modalbox';
// import {Order} from '../../Store/Action/index';

// import Button from 'react-native-button';
// import flatListData from '../data/flatListData';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            ContactNumber: '',
        };
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    // generateKey = (numberOfCharacters) => {
    //     return require('random-string')({length: numberOfCharacters});        
    // }
    render() {
        return (
            // <View style={{flex:1}}>
            // <TouchableHighlight onPress={()=>this.showAddModal()}>
            //     <Text>open modal
            //         </Text>
            //     </TouchableHighlight>
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 10,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 250
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40,color:'#db0000'
                }}>User Information</Text>
                <TextInput
                    style={{
                        height: 40,
                        // borderBottomColor: 'gray',
                        // marginLeft: 30,
                        // marginRight: 30,
                        // marginTop: 20,
                        // marginBottom: 10,
                        // borderBottomWidth: 1,
                        margin:10,
                        marginBottom: 20,
                    }}           
                    onChangeText={(text) => this.setState({ email: text })}
                    placeholder="Enter Email"
                    value={this.state.email}                 
                />
                <TextInput
                    style={{
                        height: 40,
                        // borderBottomColor: 'gray',
                        // marginLeft: 30,
                        // marginRight: 30,
                        // marginTop: 10,
                        margin:10,
                        marginBottom: 20,
                        // borderBottomWidth: 1
                    }}
                    onChangeText={(text) => this.setState({ ContactNumber: text })}
                    placeholder="Enter Contact"
                    value={this.state.ContactNumber}
                />
                {/* <Button
                    style={{ fontSize: 18, color: 'white' }}
                  
                    title="save"
                    onPress={() => {
                         if (this.state.email.length == 0 || this.state.ContactNumber.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }       
                                                   
                                                                                            
                    }}/> */}
                    <TouchableOpacity disabled={!this.state.ContactNumber.trim()&&!this.state.email.trim()} style={{  
       
        alignItems: 'center',backgroundColor:'#fff',borderRadius:3}}      onPress={() => { 
            this.props.handlerFromParant(this.state.email,this.state.ContactNumber);
setTimeout(()=>{
    this.props.UserOrder(); 
    this.refs.myModal.close();   


},500)
            // console.log(this.props.OrderItems);
             }}
        

       >
    <Text style={{color:'#db0000',fontSize:15,fontWeight:'bold',textAlign:'center'}}>Confirm Order
        </Text>
        
    </TouchableOpacity>
                  
            </Modal>
        );
    }
}