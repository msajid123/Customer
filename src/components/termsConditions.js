import React, { Component } from 'react';
import { View,TouchableOpacity, Text  } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

class termsConditions extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1,}}>
   <View style={{width:'100%', flexDirection:'row', height:'8%',alignItems:'center',  }}>
      <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:13,}}  >
      {/* <Entypo name="menu" size={40} color="black" /> */}
      <Ionicons name="arrow-back-outline" size={35} color="black" />
      </TouchableOpacity>
      <Text style={{fontSize:20, color:'black', marginHorizontal:40}}>Terms & Conditions</Text>
      </View>
      <View style={{marginHorizontal:10, marginTop:20}}>
        <Text style={{ fontSize:17, marginVertical:10}}>Apps that are used for ecommerce have two main purposes: they either sell products from the app itself, or they connect users who are interested in buying, selling, and trading amongst themselves via the app’s platform.</Text>
       
      </View>
      </View>
   
    );
  }
}


export default termsConditions;
