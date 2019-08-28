import React, { Component } from "react";
import { Container, Header, Content, Text, Button, Toast,Root } from "native-base";

export default class ToastDuration extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   showToast: false
    // };
  }
  componentWillUnmount() {
    // Toast.toastInstance = null;
}
  render() {
    return (
      <Container>
          <Root>
        <Header />
        <Content padder>
          <Button
            onPress={() =>
              Toast.show({
                text: "Item Added to Cart",
              textStyle:{textAlign:'center'},
                duration: 200,
                position:"bottom"
              })
            }
          >
            <Text>Item Added to Cart</Text>
          </Button>
        </Content>
        </Root>
      </Container>
    );
  }
}