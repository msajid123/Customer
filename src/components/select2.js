import React, { Component } from 'react';
import { View,AsyncStorage,TouchableOpacity, Alert, Text, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
class select2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  render() {
    return (
   <View style={{flex:1 ,alignItems: 'center',}}>
        <View style={{width:'100%', flexDirection:'row', height:'8%',alignItems:'center',  }}>
      <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:13,}}  >
      {/* <Entypo name="menu" size={40} color="black" /> */}
      <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>
      <Text style={{fontSize:20, color:'black', marginHorizontal:90}}>Category</Text>
      </View>

          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('PurchaseHistory')}} style={{width:'90%',alignItems:'center', height:'20%', backgroundColor:'gray', marginVertical:10}}>
          <MaterialIcons name="error-outline" style={{marginVertical:10}} size={45} color="black" />
          </TouchableOpacity>
        <Text style={{color:'gray', fontSize:19}}>Category</Text>
        <Text style={{color:'black', fontSize:19}}>Products & Complaints</Text>
        <View  style={{width:'90%', height:'50%', elevation:2,borderRadius:5,  marginVertical:10}}>
        <Text style={{fontSize:11, margin:10}}> Tell us more about your issue</Text>
          </View>
      <TouchableOpacity onPress={()=>{Alert.alert('Your Order is Submit Successfuly'); {this.props.navigation.navigate('HelpSupport')}}}  style={{width:'90%',marginVertical:10, height:40,borderRadius:30, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}><Text style={{color:'white', fontSize:22}}>SUBMIT</Text></TouchableOpacity>
            
   </View>

    );
  }
}


export default select2;
