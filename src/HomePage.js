import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Spinner,
  Button,
  Text,
  Body,
  Right,
  Switch,
} from 'native-base';
const listData = [
  {
    listText: 'Iphone 11',
    bluetoothStatus: false,
  },
  {
    listText: 'Note 10',
    bluetoothStatus: false,
  },
  {
    listText: 'Huawi 146',
    bluetoothStatus: false,
  },
  {
    listText: 'Samsung A44',
    bluetoothStatus: false,
  },
];

export default class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scan: false,
      listData: []
    };
  }

  scanPressed = () => {
    this.setState({ scan: true, listData: listData });
    setTimeout(() => {
      this.setState({ scan: false });
    }, 2000);
  };

  switchHandler = (val, index) => {
    let oldState = this.state.listData;
    oldState[index].bluetoothStatus = val;
    this.setState({
      listData: oldState
    });
  };

  render() {
    return (
      <Container>
      <Header style={styles.headCon}>
        <Text style={styles.headText}>Available Devices</Text>
      </Header>
      <View>
        <List>
          {this.state.listData.map((data, index) => {
            return (
              <ListItem key={"list" + index} icon>
                <Body>
                  <Text>{data.listText}</Text>
                </Body>
                <Right>
                  <Switch
                    value={data.bluetoothStatus}
                    thumbColor="blue"
                    onValueChange={val => {
                      this.switchHandler(val, index);
                    }}
                  />
                </Right>
              </ListItem>
            );
          })}
        </List>
      </View>
      <View style={styles.ButtonCon}>
        {this.state.scan === false && (
          <Button onPress={this.scanPressed} style={styles.Button}>
            <Text>Sacan</Text>
          </Button>
        )}
        {this.state.scan === true && <Spinner color="blue" />}
      </View>
    </Container>
    );
  }
}


const styles = StyleSheet.create({
  Button: {
    width: "50%",
    justifyContent: "center",
    backgroundColor: "#3F51B5"
  },
  ButtonCon: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    padding: 10
  },
  headText: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 18
  },
  headCon: {
    alignItems: "center"
  }
});