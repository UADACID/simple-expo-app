import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Dimensions,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';

var {height, width} = Dimensions.get('window');
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      message:''
    };
  }

  static route = {
    navigationBar: {
      title: 'Login Page',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Image
          style={{flex:1, height:height, width:width}}
          resizeMode={'cover'}
          source={require('../img/bg_login.png')}>
          <KeyboardAvoidingView behavior={'padding'} style={{flex:1}}>
            <View style={{flex:1, justifyContent:'flex-end', alignItems:'center'}}>
              <TextInput
                style={{height: 50, width:350, padding:10, backgroundColor:'rgba(119, 119, 119, 0.5)', color:'white', marginLeft:Platform.OS == 'ios' ? 30 : 0, borderColor: 'gray', borderWidth: 1, borderRadius:15}}
                onChangeText={(text) => this.setState({text})}
                placeholder=" Enter your name"
                value={this.state.text}/>
              <Text style={{fontSize:16, marginTop:16, color:'red'}}>{this.state.message}</Text>
            </View>
            <View style={{flex:1, justifyContent:'flex-start', alignItems:'center'}}>
              <TouchableOpacity
                style={{width:350, height:50, borderRadius:15, backgroundColor:'#1E90FF', justifyContent:'center', alignItems:'center'}}
                onPress={this._handlePress}>
                <Text style={{color:'#FFF', fontSize:17}}>go to home!</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </Image>

      </View>
    )
  }

  _handlePress = () => {
    if (this.state.text == '') {
      this.setState({
        message:'Kolom harus di isi'
      })

      setTimeout(()=>{
        this.setState({
          message:''
        })
      },1500)
    }else{
      Keyboard. dismiss();
      this.props.navigator.push('home',{
        name:this.state.text
      });
    }
  }
}
