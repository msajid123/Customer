import React, { Component } from 'react';
import { View,AsyncStorage,TouchableOpacity, Text, StatusBar } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";
import { Ionicons } from '@expo/vector-icons'; 

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
         <View style={{width:'100%', height:'8%',borderBottomColor:'gray', borderBottomWidth:1, justifyContent:'center', backgroundColor:'white'}}>
      <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:7,}}  >
      {/* <Entypo name="menu" size={40} color="black" /> */}
      <Ionicons name="arrow-back-outline" size={35} color="black" />
      </TouchableOpacity>
      </View>
        <View >
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Products')}} style={{width:330, height:120,elevation:5,margin:10, marginTop:100, justifyContent:'flex-end', alignItems:'center', backgroundColor:'white'}}><Text style={{color:'black', alignSelf:'center',margin:10, fontSize:21}}>Product</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Maintenance')}} style={{width:330, height:120,elevation:5,margin:10, marginVertical:30, justifyContent:'flex-end', alignItems:'center', backgroundColor:'white'}}><Text style={{color:'black', fontSize:21,margin:10}}>Maintenance</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Repairing')}} style={{width:330, height:120,elevation:5,margin:10, justifyContent:'flex-end', alignItems:'center', backgroundColor:'white'}}><Text style={{color:'black', fontSize:21,margin:10}}>Repairing</Text></TouchableOpacity>
        </View>
        
      </View>
    );
  }
}

export default name;
