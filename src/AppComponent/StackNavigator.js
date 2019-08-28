import  ItemDetailsPage from './Pages/ItemDetails';
import RelatedMenuPage from './Pages/RelatedMenuPage';
import {createStackNavigator} from 'react-navigation';
import Homepage from './Pages/Home';
import { fromLeft,fromTop,zoomOut,zoomIn,flipX,flipY } from 'react-navigation-transitions';

// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

import AboutUs from './Pages/About';
import SplashScreen from './Pages/SplasScreen';
import MenuDrawer from './DrawerNavigator';
import React,{Component} from 'react';
// import AboutUs from './Pages/About';

let MyTransition = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: [.8, 1, 1],
    });

    const scaleY = position.interpolate({
        inputRange,
        outputRange: ([0.1, 0.5, 1]),
    });

    return {
        opacity,
        transform: [
            {scaleY}
        ]
    };
};

let TransitionConfiguration = () => {
    return {
        // Define scene interpolation, eq. custom transition
        screenInterpolator: (sceneProps) => {

            const {position, scene} = sceneProps;
            const {index} = scene;

            return MyTransition(index, position);
        }
    }
};

const StackNavigationStack=createStackNavigator({
    SplashScreen:{
screen:SplashScreen,
navigationOptions : { header: null }
    },
   
    RelatedMenuPage:{
        screen:RelatedMenuPage,
        navigationOptions: () => ({
            header: null
          })
    } ,ItemDetailsPage:{
        screen: ItemDetailsPage,
        navigationOptions: () => ({
            header: null
          })
    }
    ,
    Drawer:{screen:MenuDrawer,
        navigationOptions: () => ({
            header: null
          })}
   ,
  //  AboutUs:{
  //    screen:AboutUs
  
  // }
},

{
  headerMode:"none",
// navigationOptions: params => ({
//     gesturesEnabled: true,
//     gesturesDirection: 'inverted',
//   }),
// mode:"card",
// transitionConfig: () => ({
//     screenInterpolator: sceneProps => {
//       const { layout, position, scene } = sceneProps;
//       const { index } = scene;
//       const width = layout.initWidth;

//       return {
//         opacity: position.interpolate({
//           inputRange: [index - 1, index, index + 1],
//           outputRange: [ 0, 1, 0],
//         }),
//         transform: [{
//           translateX: position.interpolate({
//             inputRange: [index - 1, index, index + 1],
//             outputRange: [-width,0, width],
//           }),
//         }]
//       };
//     },
//     headerTitleInterpolator: sceneProps => {
//       const { layout, position, scene } = sceneProps;
//       const { index } = scene;

//       return {
//         opacity: position.interpolate({
//           inputRange: [index - 1, index, index + 1],
//           outputRange: [ 0, 1, 0],
//         }),
//         transform: [{
//           translateX: position.interpolate({
//             inputRange: [index - 1, index, index + 1],
//             outputRange: [-50, 0, 50],
//           }),
//         }]
//       };
//     },
//   })
transitionConfig: () => fromLeft(400),

  }
 )
export default StackNavigationStack;



