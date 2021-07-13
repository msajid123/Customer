import React, { Component } from 'react';
import { View,AsyncStorage,TouchableOpacity,TextInput, Text, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
class settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      <Text style={{fontSize:20, color:'black', marginHorizontal:100}}>Settings</Text>
      
      </View>
      <View style={{marginHorizontal:5, marginTop:20}}>
     <View style={{flexDirection:'row'}}>
     <Text style={{fontSize:20, color:'black',width:280}}>Profile</Text>
      <AntDesign name="edit" size={20} color="black" style={{alignSelf:'flex-end'}} />
     </View>
        <View style={{flexDirection: 'row', width:'90%', marginVertical:7, justifyContent:'center', alignItems:'center'}}>
        <AntDesign name="user" size={20} color="black" />
        <TextInput defaultValue={'Mr XYZ'}
           placeholderTextColor={'black'} style={{  alignSelf: 'stretch',
      
          marginLeft: 20,
          borderBottomColor:'#000',
          margin:5,
          marginRight:20,
          width:'80%',
         
          borderBottomColor: '#000', // Add this to specify bottom border color
          borderBottomWidth: 1 }} ></TextInput>  
          {/* <AntDesign name="edit" size={20} color="black" /> */}
        </View>
        <View style={{flexDirection: 'row', marginVertical:7, alignItems:'center'}}>
        <AntDesign name="phone" size={20} color="black" />
        <TextInput defaultValue={'03000000000'}
           placeholderTextColor={'black'} style={{  alignSelf: 'stretch',
  
          marginLeft: 20,
          borderBottomColor:'#000',
          margin:5,
          marginRight:20,
          width:'80%',
          
          borderBottomColor: '#000', // Add this to specify bottom border color
          borderBottomWidth: 1 }} ></TextInput>  
          {/* <AntDesign name="edit" size={20} color="black" /> */}
        </View>
        <View style={{flexDirection: 'row', marginVertical:7, alignItems:'center'}}>
        <AntDesign name="mail" size={20} color="black" />
        <TextInput defaultValue={'google@google.com'}
           placeholderTextColor={'black'} style={{  alignSelf: 'stretch',
  
          marginLeft: 20,
          borderBottomColor:'#000',
          margin:5,
          marginRight:20,
          width:'80%',
          
          borderBottomColor: '#000', // Add this to specify bottom border color
          borderBottomWidth: 1 }} ></TextInput>  
          {/* <AntDesign name="edit" size={20} color="black" /> */}
        </View>  
        <View style={{flexDirection: 'row', marginVertical:7, alignItems:'center'}}>
        <Feather name="users" size={20} color="black" />
        <TextInput defaultValue={'Male'}
           placeholderTextColor={'black'} style={{  alignSelf: 'stretch',
          marginLeft: 20,
          borderBottomColor:'#000',
          margin:5,
          marginRight:20,
          width:'80%',
          
          borderBottomColor: '#000', // Add this to specify bottom border color
          borderBottomWidth: 1 }} ></TextInput>  
          {/* <AntDesign name="edit" size={20} color="black" /> */}
        </View>
        <View style={{flexDirection: 'row', marginVertical:7, alignItems:'center'}}>
        <MaterialIcons name="location-city" size={20} color="black" />
        <TextInput defaultValue={'Lahore, Pakistan'}
           placeholderTextColor={'black'} style={{  alignSelf: 'stretch',
  
          marginLeft: 20,
          borderBottomColor:'#000',
          margin:5,
          marginRight:20,
          width:'80%',
          
          borderBottomColor: '#000', // Add this to specify bottom border color
          borderBottomWidth: 1 }} ></TextInput>  
          {/* <AntDesign name="edit" size={20} color="black" /> */}
        </View>
        <View style={{flexDirection: 'row', marginVertical:7, alignItems:'center'}}>
        <MaterialIcons name="lock" size={20} color="black" />
        <TextInput defaultValue={'password field  '}
        secureTextEntry
           placeholderTextColor={'black'} style={{  alignSelf: 'stretch',
          
          marginLeft: 20,
          borderBottomColor:'#000',
          margin:5,
          marginRight:20,
          width:'80%',
          
          borderBottomColor: '#000', // Add this to specify bottom border color
          borderBottomWidth: 1 }} ></TextInput>  
          {/* <AntDesign name="edit" size={20} color="black" /> */}
        </View>
      </View>
      <View style={{height:10, width:'100%', marginVertical:10, backgroundColor:'gray', alignSelf:'flex-end', relative:'end'}}></View>
     <View style={{width:'88%'}}>
     <TouchableOpacity onPress={()=>{this.props.navigation.navigate('TermsConditions')}} style={{marginVertical:7}}>
        <Text style={{fontSize:16}}>Terms & Condition</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginVertical:5}}>
        <Text style={{fontSize:16}}>Logout</Text>
      </TouchableOpacity>
     </View>
    </View>
    );
  }
}


export default settings;
