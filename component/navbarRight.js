import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class NavbarRight extends Component {

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{alignItems: 'center', justifyContent: 'center', flex: 1, marginRight:20}}>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          {/*<Text style={{fontSize:16}}>{this.props.title}</Text>*/}
          <Ionicons name="md-checkmark-circle" size={25} color="green" />
        </View>
      </TouchableOpacity>
    )
  }

  // _handlePress = () => {
  //   this.props.navigator.push('home');
  // }
}
