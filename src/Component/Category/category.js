import PhotoGrid from 'react-native-image-grid';
import {Image, TouchableOpacity, Text} from 'react-native';
import React,{Component} from 'react';

class CategoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentWillMount() {
    // Build an array of 60 photos
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: 'https://i.cartoonnetwork.com/prismo/props/chars/ben17_180x180_0.png' }
    });
    this.setState({ items });
  }

  render() {
    return(
      <PhotoGrid
        data = { this.state.items }
        itemsPerRow = { 2 }
        itemMargin = { 0 }
        itemPaddingHorizontal={1}
        renderHeader = { this.renderHeader }
        renderItem = { this.renderItem }
      />
    );
  }

  renderHeader() {
    return(
      <Text >I'm on top!</Text>
    );
  }

  renderItem(item, itemSize, itemPaddingHorizontal) {
    return(
      <TouchableOpacity
        key = { item.id }
        style = {{ width: itemSize, height: itemSize, paddingHorizontal: itemPaddingHorizontal }}
        onPress = { () => {
        }}>
        <Image
          resizeMode = "cover"
          style = {{ flex: 1 }}
          source = {{ uri: item.src }}
        />
      </TouchableOpacity>
    )
  }

}

export default CategoryList;




// constructor(props) {
//   super(props);
//   this.state = {  
//     items:[
//     {
//       id:1,
//       src:'https://i.cartoonnetwork.com/prismo/props/chars/ben17_180x180_0.png'
//     }
//   ] };
// }

// componentWillMount() {
 
//   // Build an array of 60 photos
//   let items = this.state.items.map((item, i) => {
//     return { id: i, src: item.src }
//   });
//   this.setState({ items });
// }