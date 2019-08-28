import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

export default class MenuItems extends Component {
    constructor(props)
    {super(props);
        this.state={
            CategoryRelatedMenu:[
                {uri: 'https://i.cartoonnetwork.com/prismo/props/chars/ben17_180x180_0.png',
                name:'Burger'

                }
                ,{uri: 'http://bk-ca-prd.s3.amazonaws.com/sites/burgerking.ca/files/02280-9-BaconandCheeseWhopper_300x270_CR.jpg',
                name:'Burger'

                },
                {
                    uri: 'https://i.cartoonnetwork.com/prismo/props/chars/ben17_180x180_0.png',
                    name:'Burger'   
                }
            ]
        }

    }
  render() {
    return (
      <Container>
        <Content>
        <List>
            {
                this.state.CategoryRelatedMenu.map((item,i)=>{
                    return(
                        <ListItem key={i} thumbnail>
              <Left>
                <Thumbnail square source={{ uri: item.uri }} />
              </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note numberOfLines={1}>Its time to build a difference kjkjhkjlkjlkjlkjlkj. .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
                    )
                })
            }
        
        
          </List>
        </Content>
      </Container>
    );
  }
}



