import React,{Component} from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';


export default class FooterTabs extends Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
    render() {
      return (
  
         
            <FooterTab >
              <Button vertical>
                <Icon name="home" />
                <Text>HOME</Text>
              </Button>
              <Button vertical>
                <Icon name="apps" />
                <Text>CATEGORY</Text>
              </Button>
              <Button vertical active>
                <Icon active name="cart" />
                <Text>ORDER</Text>
              </Button>
              
            </FooterTab>
        
      );
    }
  }