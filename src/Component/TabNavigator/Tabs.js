import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text,View } from 'native-base';
import Category from '../MenuDrawerScreen/Category';
 class TabNav extends Component {
  render() {
    return (
      <View style={{flex:1}}>
     
          <View style={{flex:1}}>
        
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading><Icon name="home" /><Text>Home</Text></TabHeading>}>

          </Tab>

          <Tab heading={ <TabHeading><Icon name="apps" /><Text>CATEGORY</Text></TabHeading>}>
     <View style={{flex:1}}>
       <Text>kha ho bhai</Text>
       </View>
          </Tab>
          <Tab heading={ <TabHeading><Icon name="cart"/></TabHeading>}>
    
          </Tab>
        
        </Tabs>
      </Container>
      </View>
      </View>
    );
  }
}
export default TabNav;