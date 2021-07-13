import React, { Component } from 'react';
import { View,AsyncStorage,TouchableOpacity, Text, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
class promoCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1, alignItems:'center', backgroundColor:'white'}}>
      <View style={{width:'100%', flexDirection:'row', height:'8%',alignItems:'center',  backgroundColor:'white'}}>
   <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:7,}}  >
   {/* <Entypo name="menu" size={40} color="black" /> */}
   <Ionicons name="arrow-back-outline" size={30} color="black" />
   </TouchableOpacity>
   <Text style={{fontSize:20, color:'black', marginHorizontal:70}}>Promo Code</Text>
   </View>
   <Text style={{fontSize:20, fontWeight:'bold',alignSelf:'flex-start', marginHorizontal:10 }}>Your Promo Codes</Text>
   <View  style={{width:'90%',backgroundColor:'transparent',justifyContent:'center',height:'13%',borderRadius:1,elevation:2,marginHorizontal:'5%', marginTop:20,  }}>
          <View style={{flexDirection:'row', marginHorizontal:15, marginVertical:5}}>
          <FontAwesome5 name="money-check-alt" size={35} color="black" />
          <View style={{width:160}}></View>
         <View>
         <Text style={{fontSize:18, fontWeight:'bold'}}>Happy23</Text>
         <Text style={{alignSelf:'flex-end', fontSize:10}}>Expire in 2 days</Text>
         </View>
        </View>
          <View style={{flexDirection:'row', marginHorizontal:15, marginVertical:5}}>
          </View>
        </View>
        <View  style={{width:'90%',backgroundColor:'transparent',justifyContent:'center',height:'13%',borderRadius:1,elevation:2,marginHorizontal:'5%', marginTop:10,  }}>
         
        </View>
        <View  style={{width:'90%',backgroundColor:'transparent',justifyContent:'center',height:'13%',borderRadius:1,elevation:2,marginHorizontal:'5%', marginTop:10,  }}>
         
         </View>
         <View  style={{width:'90%',backgroundColor:'transparent',justifyContent:'center',height:'13%',borderRadius:1,elevation:2,marginHorizontal:'5%', marginTop:10,  }}>
         
         </View>
      </View>
    );
  }
}


export default promoCode;
