import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import NavbarRight from '../component/navbarRight';

export default class HomeScreen extends Component {
  static route = {
    navigationBar: {
      title: 'Home',
      renderRight: () => (
        <NavbarRight title="Right Menu" onPress={()=>alert("clicked")}/>
      ),
    }
  }

  renderRight(){
    return (
      <TouchableOpacity>
        <Text>Menu</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>
          Hello {this.props.name}
        </Text>
        <Text
          onPress={this._handlePress}
          style={{color:'blue'}}
          >Back to Login!</Text>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigator.pop();
  }

  handleAlertMenu(){
    alert("clicked");
  }
}
