import React, { Component } from 'react';
import { View,TouchableOpacity, Text  } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

class faq extends Component {
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
      <Text style={{fontSize:20, color:'black', marginHorizontal:100}}>FAQ</Text>
      </View>
      <View style={{marginHorizontal:20, marginTop:20}}>
        <Text style={{ fontSize:17, marginVertical:10}}>About the Application ?</Text>
        <Text style={{ fontSize:17, marginVertical:10}}>What is Benifits to use this application ?</Text>
        <Text style={{ fontSize:17, marginVertical:10}}>How do i make purchase with the credit card ?</Text>


      </View>
      </View>
   
    );
  }
}

export default faq;
