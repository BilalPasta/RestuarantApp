import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {Button} from 'native-base';

class AppMenu extends Component {
    constructor(props) {
        super(props);

      this.state={

      }
    }
    render() {
        return (
            <View style={styles.Container}>
<Text>bilal
     </Text>
                {/* <View style={[styles.boxContainer, styles.boxOne]}>
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
                </View> */}
{/* Row1 */}
{/* <View style={styles.boxContainer} >
<Button small primary>
            <Text>Default Small</Text>
          </Button>
          <Button small primary>
            <Text>Default Small</Text>
          </Button>
    </View> */}

{/* Row2 */}
    {/* <View style={styles.boxContainer}>
    <Button small primary>
            <Text>Default Small</Text>
          </Button>
          <Button small primary>
            <Text>Default Small</Text>
          </Button>
    </View> */}
    {/* Row3

    <View style={styles.boxContainer} >
    <Button small primary>
            <Text>Default Small</Text>
          </Button>
          <Button small primary>
            <Text>Default Small</Text>
          </Button>
    </View> */}


{/* Row4 */}

    {/* <View style={styles.boxContainer}>
    <Button small primary>
            <Text>Default Small</Text>
          </Button>
          <Button small primary>
            <Text>Default Small</Text>
          </Button>
</View> */}
{/* Row5 */}

    {/* <View style={styles.boxContainer}>
    <Button small primary>
            <Text>Default Small</Text>
          </Button>
          <Button small primary>
            <Text>Default Small</Text>
          </Button>
    </View>

*/}
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
        justifyContent: 'center',
flexDirection:'row'
    }
    // boxOne: {
    //     backgroundColor: '#FFEEE4',
    //     flexDirection: 'row',

    // },
    // boxTwo: {
    //     backgroundColor: '#F17F4C',
    //     flexDirection: 'row',
    // }
})


export default AppMenu;