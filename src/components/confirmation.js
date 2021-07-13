import React, { Component } from 'react';
import { View,AsyncStorage,TouchableOpacity, Text, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
// const value =  AsyncStorage.getItem(id);

class confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

 
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
         <View style={{width:'100%', flexDirection:'row',justifyContent:'center', height:'8%',alignItems:'center',  backgroundColor:'black'}}>
        <Text style={{fontSize:20, color:'white',}}>Confirmation</Text>
        </View>
      <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
      <Ionicons name="ios-checkmark-circle-sharp" size={220} color="black" />
      <Text style={{fontSize:30, fontWeight:'bold'}}>Order Placed</Text>
      <Text style={{fontSize:30, fontWeight:'bold'}}>Successfully!</Text>
      <Text style={{fontSize:18,alignSelf:'flex-start', padding:20}}>Your Order ID: 0234554</Text>

      </View>
      <View style={{width:'100%', flexDirection:'row',height:'8%',alignItems:'center',  backgroundColor:'gray'}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('PurchaseHistory')}} style={{marginHorizontal:10, justifyContent:'flex-start', alignItems:'flex-start'}}>
        <Text style={{fontSize:18, color:'black',fontWeight:'bold'}}>Track</Text>
        <Text style={{fontSize:26, color:'black', fontWeight:'bold'}}>Order</Text>

        </TouchableOpacity>
        <View style={{width:'38%'}}></View>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Products')}} style={{marginHorizontal:10, justifyContent:'flex-end', alignItems:'flex-end'}}>
        <Text style={{fontSize:18, color:'black', fontWeight:'bold'}}>Continue </Text>
        <Text style={{fontSize:26, color:'black',fontWeight:'bold'}}> Shopping</Text>

        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default confirmation;
