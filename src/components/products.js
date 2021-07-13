import React, { Component } from 'react';
import { View,AsyncStorage,TouchableOpacity, Text, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
// const value =  AsyncStorage.getItem(id);

class products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [   
         {id:0, name:'Samsung Galaxy A20s Mobile 3GB RAM 32GB Storage', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
         {id:0, name:'Samsung Galaxy A20s Mobile 3GB RAM 32GB Storage', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
         {id:0, name:'Samsung Galaxy A20s Mobile 3GB RAM 32GB Storage', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
         {id:0, name:'Samsung Galaxy A20s Mobile 3GB RAM 32GB Storage', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
         {id:0, name:'Samsung Galaxy A20s Mobile 3GB RAM 32GB Storage', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
         {id:0, name:'Samsung Galaxy A20s Mobile 3GB RAM 32GB Storage', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
      ]
    };
  }

 
  render() {
    const { navigation } = this.props;

    return (
      <View style={{flex:1, alignItems:'center', backgroundColor:'white'}}>
         <View style={{width:'100%', flexDirection:'row', height:'8%',alignItems:'center',  backgroundColor:'white'}}>
      <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:7,}}  >
      {/* <Entypo name="menu" size={40} color="black" /> */}
      <Ionicons name="arrow-back-outline" size={35} color="black" />
      </TouchableOpacity>
      <Text style={{fontSize:20, color:'black', marginHorizontal:80}}>Discover</Text>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Filter')}}>
      <FontAwesome5 name="search" size={20} style={{marginHorizontal:5}}color="black" />
      </TouchableOpacity>
     <TouchableOpacity>
     <FontAwesome5 name="filter" size={20} color="black" />
     </TouchableOpacity>
      </View>
       <ScrollView>
       <View style={{ flexWrap:'wrap', flexDirection:'row-reverse'}}>
        {this.state.images.map((key, index)=>{
          return(
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ProductDetails')}} style={{width:150,justifyContent:'center',height:255,elevation:0,margin:10, marginTop:15,  backgroundColor:'transparent'}}>
          <Image style={{alignSelf:'center',}} style={{width:145, height:200}} source={key.img}/>
        <Text style={{color:'black', fontSize:11}}>{key.name}</Text>
          <Text style={{color:'red', margin:1}}>{key.rs}</Text>
        </TouchableOpacity>
          )
        })}
       </View>
       </ScrollView>
        
      </View>
    );
  }
}

export default products;
