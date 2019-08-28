import React, {Component} from 'react'
import {
    Text,
    View,
    Image,
    Dimensions,ActivityIndicator
} from 'react-native'
import fb from 'firebase';
import Swiper from 'react-native-swiper'

let {width} = Dimensions.get('window');


const Slider = ({load,uri}) => {
 
    
   return( <View style={styles.container}>
        <Image style={styles.image} source={uri} onLoadEnd resizeMode="stretch"/>
    </View>
)}

{/* <Image style={{width:newWidth,height:newHeight}} source={uri}/> */}

const styles = {
    container: {
        flex: 2
    },
    image: {
        
        flex:1,
        width:width
    },
}


export default class extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            // imagesSlider: [
            //     require('./sliderimages/Slider1.png'),
            //    ,   require('./sliderimages/Slider2.png'),
            //    require('./sliderimages/Slider3.png'),
            //    require('./sliderimages/Sliders4.png'),
            // ]
            loading:true
        }
    }


    render(){
        return ( <Swiper
                    autoplay
                
                >
                {
                    this.state.imagesSlider.map((item, i) => {
                       < View style={styles.container}>
                        <Image style={styles.image}
                         source={{uri:item}} 
                         onLoadEnd={ ()=>{ this.setState({ loading: false }) } }resizeMode="stretch">
                                 <ActivityIndicatorIOS animating={ this.state.loading }/>
                         </Image>
                    </View>
                    // <Slider 
                    //     uri={item}
                    //     key={i}
                    //   load={this.state.loading}
                    // />
                    })
                }

                </Swiper> )
    }
}


 