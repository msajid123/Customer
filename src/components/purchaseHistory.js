import React, { Component } from 'react';
import { View,AsyncStorage,TouchableOpacity,Alert, Text, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
class purchaseHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [   
        {id:0, name:'Samsung Galaxy A20s ',details:'Samsung Galaxy A20s phone complete details you can see ', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
        {id:0, name:'Samsung Galaxy A20s ', details:'Samsung Galaxy A20s ', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
        {id:0, name:'Samsung Galaxy A20s ', details:'Samsung Galaxy A20s ', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
        {id:0, name:'Samsung Galaxy A20s ', details:'Samsung Galaxy A20s ', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
        {id:0, name:'Samsung Galaxy A20s ', details:'Samsung Galaxy A20s ', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
        {id:0, name:'Samsung Galaxy A20s ', details:'Samsung Galaxy A20s ', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
     ]
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
      <Text style={{fontSize:20, color:'black', marginHorizontal:50}}>Purchase History</Text>
      </View>

      <ScrollView>
       <View >
        {this.state.images.map((key, index)=>{
          return(
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ProductDetails')}} style={{width:'90%',justifyContent:'center',height:190,elevation:0.5,borderRadius:5,marginHorizontal:'5%', marginTop:15,  backgroundColor:'transparent'}}>
          <View style={{flexDirection:'row', marginHorizontal:15, marginVertical:5}}>
          <Text>Order id</Text>
          <View style={{width:190}}></View>
          <Text style={{alignSelf:'flex-end'}}>complete</Text>
        </View>
          <View style={{flexDirection:'row', marginHorizontal:15, marginVertical:5}}>
          <Image style={{alignSelf:'center',}} style={{width:70, height:90}} source={key.img}/>
       <View>
       <Text style={{color:'black', fontSize:13}}>{key.name}</Text>
          <Text style={{color:'red', fontSize:12}}>{key.rs}</Text>
          <Text style={{color:'gray', margin:1}}>X1</Text>
          <Text style={{color:'black', fontSize:13, width:180}}>{key.details}</Text>
       </View>
          </View>
            <View style={{alignItems:'flex-end'}}>
          <Text style={{marginBottom:1, marginHorizontal:10}}>1 Item Total: Rs 6000</Text>
            </View>
            <View style={{alignSelf:'center', marginVertical:5}}>
            <TouchableOpacity   onPress={()=>Alert.alert('Are You Sure You Want to Cancel')}
        style={{width:70,marginHorizontal:10,justifyContent:'center', alignItems:'center',borderRadius:5, height:19, backgroundColor:'black'}}>
         <Text style={{color:'white', fontSize:12}}>Cancel</Text>
       </TouchableOpacity>
            </View>
        </TouchableOpacity>
          )
        })}
       </View>
       </ScrollView>

   </View>

    );
  }
}


export default purchaseHistory;
