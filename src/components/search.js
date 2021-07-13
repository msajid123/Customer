import React, { Component } from 'react';
import { View,AsyncStorage,TouchableOpacity, Text, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 

class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'gray', alignItems: 'center' }}>
       <View style={{width:'100%', flexDirection:'row', height:'8%',alignItems:'center',  backgroundColor:'white'}}>
      <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:13,}}  >
      {/* <Entypo name="menu" size={40} color="black" /> */}
      <Ionicons name="arrow-back-outline" size={35} color="black" />
      </TouchableOpacity>
      <Text style={{fontSize:20, color:'black', marginHorizontal:100}}>Search</Text>
      <TouchableOpacity >
      <FontAwesome5 name="search" size={20} style={{marginHorizontal:5}}color="black" />
      </TouchableOpacity>
    
      </View>
      <View style={{width:'92%', flexDirection:'row', borderColor:'black', borderWidth:1, marginHorizontal:5, height:'7%',alignItems:'center', borderRadius:10, backgroundColor:'white'}}>
      <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:13,}}  >
      <FontAwesome5 name="search" size={20} style={{marginHorizontal:5}}color="black" />
      </TouchableOpacity>
      <View style={{width:230}}></View>
      <TouchableOpacity>
      <EvilIcons name="close" size={28} color="black" />
      </TouchableOpacity>
    
      </View>
    </View>
    );
  }
}

export default search;
