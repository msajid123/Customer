import React, { Component } from 'react';
import { View,AsyncStorage,TouchableOpacity, Text, StatusBar } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";

// const value =  AsyncStorage.getItem(id);

class name extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

 
  render() {
    const { navigation } = this.props;

    return (
      <View style={{flex:1, backgroundColor:'black', alignItems:'center'}}>
       
        <View >
        <TouchableOpacity style={{width:330, height:130,elevation:5,margin:10, marginTop:50, justifyContent:'flex-end', alignItems:'center', backgroundColor:'white'}}><Text style={{color:'black', alignSelf:'center',margin:10, fontSize:21}}>Product</Text></TouchableOpacity>
        <TouchableOpacity style={{width:330, height:130,elevation:5,margin:10, justifyContent:'flex-end', alignItems:'center', backgroundColor:'white'}}><Text style={{color:'black', fontSize:21,margin:10}}>Maintenance</Text></TouchableOpacity>
        <TouchableOpacity style={{width:330, height:130,elevation:5,margin:10, justifyContent:'flex-end', alignItems:'center', backgroundColor:'white'}}><Text style={{color:'black', fontSize:21,margin:10}}>Repairing</Text></TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

export default name;
