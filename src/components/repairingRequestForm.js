import React, { Component } from 'react';
import { View,TextInput,TouchableOpacity, Text, Image, Alert } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome} from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

class repairingRequestForm extends Component {
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
   <Text style={{fontSize:20, color:'black', marginHorizontal:70}}>Request Form</Text>
   </View>
   <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' , marginHorizontal:5}}>
   <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Select1')}} style={{flexDirection:'row', marginVertical:10, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16, color:'gray'}}>Full Name</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Select1')}} style={{flexDirection:'row', marginVertical:10, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16, color:'gray'}}>Phone No</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Select1')}} style={{flexDirection:'row', marginVertical:10, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16, color:'gray'}}>City</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Select1')}} style={{flexDirection:'row', marginVertical:10, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16, color:'gray'}}>Adress</Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Select1')}} style={{flexDirection:'row', marginVertical:10, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16, color:'gray'}}> </Text>
   </TouchableOpacity>
   <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Select1')}} style={{flexDirection:'row', marginVertical:10, borderBottomColor:'gray', borderBottomWidth:0.5 ,  alignItems:'center'}}>
     <Text style={{width:'90%' , fontSize:16, color:'gray'}}> </Text>
   </TouchableOpacity>
   <TextInput
            style={{fontSize: 17,
              borderColor:'gray',
              borderWidth:0.5,
              margin:10,
              width:'90%',}}
            multiline={true}
            numberOfLines={8}
            placeholder="Write On the Wall"
            underlineColorAndroid='transparent'
            require={true}
/>
<View style={{ width:'96%',justifyContent:'center',height:180,elevation:0.5,borderRadius:5,marginHorizontal:'1%', marginTop:10,  elevation:5, backgroundColor:'white'}}>
          {/* <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ProductDetails')}} style={{width:'90%',justifyContent:'center',height:180,elevation:0.5,borderRadius:5,marginHorizontal:'3%', marginTop:15,  backgroundColor:'transparent'}}> */}
        <View style={{flexDirection:'row', marginHorizontal:15, marginVertical:1}}>
        <Text>09-02-2020</Text>
        <View style={{width:185}}></View>
        <Text style={{alignSelf:'flex-end', marginRight:10}}>Category</Text>
      </View>
        <View style={{flexDirection:'row', marginHorizontal:15, marginVertical:1}}>
        <Text>Request id</Text>
        <View style={{width:190}}></View>
        <Text style={{alignSelf:'flex-end', marginRight:10}}>complete</Text>
      </View>
        <View style={{flexDirection:'row', marginHorizontal:15, marginVertical:5}}>
        <Image style={{alignSelf:'center',}} style={{width:70, height:90}} source={require('./../assets/mob5.jpeg')}/>
     <View>
     <View style={{flexDirection:'row'}}>
     <Text style={{color:'black', fontSize:13, width:185}}>mahsgdjmashd kash</Text>
     <Text style={{color:'black', alignSelf:'flex-end',fontWeight:'bold',fontSize:13}}>Repairing</Text>
      
     </View>
     <Text style={{color:'black', fontSize:13, width:220}}>All the product details will show here All the product details will show her All the product details will show her</Text>
     
     </View>
        </View>
          <View style={{alignItems:'center', justifyContent:'center', flexDirection:'row', marginBottom:10}}>

          </View>
      {/* </TouchableOpacity> */}
        </View>
        <Text style={{margin:15}}>Images</Text>
       <View style={{flexDirection:'row', alignSelf:'center'}}>
        <Image style={{alignSelf:'center',}} style={{width:'40%', height:150, marginVertical:10}} source={require('./../assets/mob5.jpeg')}/>
        <Image style={{alignSelf:'center',}} style={{width:'40%', height:150, marginVertical:10}} source={require('./../assets/mob5.jpeg')}/>

       </View>
              
<TouchableOpacity onPress={()=>{Alert.alert('Your Request is Submitted Successfuly'), this.props.navigation.goBack()}} style={{width:'90%',marginVertical:50, height:50,borderRadius:30, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}><Text style={{color:'white', fontSize:22}}>SUBMIT</Text></TouchableOpacity>
              </ScrollView>
      </View>
    );
  }
}
export default repairingRequestForm;
