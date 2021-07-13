import React, { Component } from 'react';
import { View,TouchableOpacity, Text  } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
class designation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{width:'100%', height:'8%',borderBottomColor:'gray', borderBottomWidth:1, justifyContent:'center', backgroundColor:'white'}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:7,}}  >
        {/* <Entypo name="menu" size={40} color="black" /> */}
        <Ionicons name="arrow-back-outline" size={35} color="black" />
        </TouchableOpacity>
        </View>
    );
  }
}

export default designation;
