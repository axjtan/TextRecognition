import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';
import {
  Button,
  Content,
  Container,
  Text,
  List,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Header,
  Icon,
  Title,
} from 'native-base';

class MemoView extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { memoStore } = this.props.store;
    const index = this.props.navigation.getParam('otherParam', 1);
    return (
      <Container style={styles.container}>
        <Content>
          <Header style={{ backgroundColor: '#e94153' }} androidStatusBarColor="#e11145">
            <Left>
              <Button transparent onPress={() => this.props.navigation.goBack()}>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Header</Title>
            </Body>
            <Right>
              <Button
                transparent
                onPress={() =>
                  this.props.navigation.navigate('EditView', {
                    otherParam: index,
                  })
                }
              >
                <Icon type="AntDesign" name="edit" />
              </Button>
            </Right>
          </Header>
          {/* <Text>{memoStore.memoArray.content}</Text> */}
          <List dataArray={memoStore.memoArray[index].content.slice()} renderRow={this.renderItem} />
        </Content>
      </Container>
    );
  }
  renderItem = memo => {
    console.log('In render', memo);
    return (
      <Content>
        <Text>{memo}</Text>
      </Content>
    );
  };
}
export default inject('store')(observer(MemoView));

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
