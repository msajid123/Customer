import React, { Component } from 'react';
import { View,AsyncStorage,TextInput,TouchableOpacity, Text, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import {
  Picker,
} from 'native-base';
class filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language:''
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
       <View style={{width:'100%', flexDirection:'row', height:'8%',alignItems:'center',  backgroundColor:'white'}}>
      <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:13,}}  >
      {/* <Entypo name="menu" size={40} color="black" /> */}
      <Ionicons name="arrow-back-outline" size={35} color="black" />
      </TouchableOpacity>
      <Text style={{fontSize:20, color:'black', marginHorizontal:100}}>Filter</Text>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Search')}}>
      <FontAwesome5 name="search" size={20} style={{marginHorizontal:5}}color="black" />
      </TouchableOpacity>
    
      </View>
      <View style={{marginHorizontal:5, marginTop:20}}>
        <View style={{flexDirection: 'row', marginVertical:7, alignItems:'center'}}>
          <Text style={{fontSize:17}}>Brand</Text>
          <View style={{width:250}}></View>
         <TouchableOpacity>
         <Picker
        selectedValue={this.state.language}
        style={{  color: 'white',width:40, height: 40,}}
        
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
        <Picker.Item color="white" label="Status" value="Status" />
        <Picker.Item  label="Way" value="Way" />
        <Picker.Item label="One Hour" value="OneHour" />
        <Picker.Item label="Completed" value="Completed" />

      </Picker>
         </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginVertical:7, alignItems:'center'}}>
          <Text style={{fontSize:17}}>New</Text>
          <View style={{width:260}}></View>
         <TouchableOpacity>
         {/* <AntDesign name="down" size={20} color="black" /> */}
         <Picker
        selectedValue={this.state.language}
        style={{  color: 'white',width:40, height: 40,}}
        
        mode="dropdown"
        onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
        <Picker.Item color="white" label="Status" value="Status" />
        <Picker.Item  label="Way" value="Way" />
        <Picker.Item label="One Hour" value="OneHour" />
        <Picker.Item label="Completed" value="Completed" />

      </Picker>
         </TouchableOpacity>
        </View>
          <View style={{flexDirection:'row', marginHorizontal:10}}>
          <Text style={{fontSize:17, marginVertical:7,}}>Min Price</Text>
          <Text style={{fontSize:17, marginVertical:7,marginHorizontal:80}}>Max Prie</Text>
          </View>
          <View style={{flexDirection:'row', marginVertical:5}}> 
          <TextInput style={{width:100,borderRadius:3, borderColor:'black',fontSize:13, borderWidth:2, height:40, backgroundColor:'white', marginHorizontal:10, fontSize:21}} defaultValue={'1000'}></TextInput>
          <TextInput style={{width:100,borderRadius:3, borderColor:'black', borderWidth:2, height:40, backgroundColor:'white', marginHorizontal:30, fontSize:21}} defaultValue={'1000'}></TextInput>

          </View>
      </View>
    </View>
    );
  }
}

export default filter;
