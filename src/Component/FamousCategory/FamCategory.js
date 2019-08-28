import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class FamousCategory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Categoryimages: [
                require('./images/burger.jpg'),
                require('./images/burger.jpg'),
                require('./images/burger.jpg'),
                require('./images/burger.jpg'),
                require('./images/burger.jpg'),
                require('./images/burger.jpg'),
            ]
        }
    }
    render() {
        return (
            <View style={styles.Container}>

                <View style={[styles.boxContainer, styles.boxOne]}>
                    
                    <Image source={this.state.Categoryimages[0]} 
                        style={{ flex: 1 }} 
                        resizeMode="stretch"/>
                    <Image source={this.state.Categoryimages[1]} 
                        style={{ flex: 1 }}
                        resizeMode="stretch" />
                    <Image source={this.state.Categoryimages[2]} 
                        style={{ flex: 1 }} 
                        resizeMode="stretch"/>



                </View>
                <View style={[styles.boxContainer, styles.boxTwo]}>
                    <Image source={this.state.Categoryimages[3]}
                     style={{ flex: 1 }} 
                 resizeMode="stretch" />
                    <Image   style={{ flex: 1 }}    source={this.state.Categoryimages[4]} resizeMode="stretch"/>
                    <Image   style={{ flex: 1 }}  source={this.state.Categoryimages[5]} resizeMode="stretch" />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 2,
        flexDirection: 'column'

    },
    boxContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    boxOne: {
        backgroundColor: '#FFEEE4',
        flexDirection: 'row',

    },
    boxTwo: {
        backgroundColor: '#F17F4C',
        flexDirection: 'row',
    }
})


export default FamousCategory;