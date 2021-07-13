import React, { Component } from 'react';
import { View,TouchableOpacity, Text, Image  } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import {
  Picker,
} from 'native-base';
import { AntDesign } from '@expo/vector-icons'; 

class OrdersDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language:''
    };
  }

  render() {
    const { navigation } = this.props;

    return (
        <View style={{flex:1, backgroundColor:'white', alignItems:'center'}}>
         <View style={{width:'100%', flexDirection:'row', height:'8%',alignItems:'center',  backgroundColor:'white'}}>
   <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:7,}}  >
   {/* <Entypo name="menu" size={40} color="black" /> */}
   <Ionicons name="arrow-back-outline" size={30} color="black" />
   </TouchableOpacity>
   <Text style={{fontSize:20, color:'black', marginHorizontal:70}}>Order Details</Text>
   </View>
       <View style={{width:'90%',height:'23%', }}>
         <Text style={{marginVertical:20}}>Shipping Details</Text>
         <Text style={{fontSize:17}}>Name</Text>
         <Text style={{fontSize:17}}>Phone No</Text>
         <Text style={{fontSize:17}}>Adress</Text>
       </View>
       <View style={{width:'100%', height:'2%', backgroundColor:'gray'}}></View>
       <View  style={{width:'90%',justifyContent:'center',height:160,marginHorizontal:'5%', marginTop:30,  backgroundColor:'transparent'}}>
          <View style={{flexDirection:'row', marginHorizontal:15, marginVertical:5}}>
          <Text>Order id</Text>
          <View style={{width:190}}></View>
          <Text style={{alignSelf:'flex-end'}}>Processing</Text>
        </View>
          <View style={{flexDirection:'row', marginHorizontal:15, marginVertical:5}}>
          <Image style={{alignSelf:'center',}} style={{width:70, height:90}} source={require('./../assets/mob5.jpeg')}/>
       <View>
       <Text style={{color:'black', fontSize:13}}>Samsung S9</Text>
          <Text style={{color:'red', fontSize:12}}>RS 56000</Text>
          <Text style={{color:'gray', margin:1}}>X1</Text>
       </View>
          </View>
            <View style={{alignItems:'flex-end'}}>
          <Text style={{marginBottom:10, marginHorizontal:10}}>1 Item Total: Rs 6000</Text>
            </View>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('WantToCancel')}} style={{width:'25%',alignSelf:'center',marginVertical:10, justifyContent:'center', alignItems:'center', height:'15%', backgroundColor:'black'}}>
              <Text style={{color:'white', fontSize:14}}>Cancel</Text>
            </TouchableOpacity>
        </View>
       <View style={{width:'100%', height:'2%', backgroundColor:'gray', marginVertical:20}}></View>
      <View style={{flexDirection:'row', marginVertical:10, marginHorizontal:'5%'}}>
      <Text>Date: 02:01:2020</Text>
      <View style={{width:'35%'}}></View>
      <Text>Time: 01:30</Text>

      </View>
      <View style={{flexDirection:'row', marginHorizontal:'5%'}}>
      <Text style={{fontSize:22}}>Subtotal</Text>
      <View style={{width:'43%'}}></View>
      <Text style={{fontSize:22}}>Rs. 100</Text>
      </View>
      <View style={{flexDirection:'row', marginHorizontal:'5%'}}>
      <Text style={{fontSize:22}}>Shipping Fee</Text>
      <View style={{width:'30%'}}></View>
      <Text style={{fontSize:22}}>Rs. 100</Text>
      </View>
      <View style={{flexDirection:'row', marginVertical:10, width:'82%', marginHorizontal:'10%'}}>
      <Text style={{fontSize:22}}>Total: Rs</Text>
      </View>
      </View>
    );
  }
}

export default OrdersDetails;
