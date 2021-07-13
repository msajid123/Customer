import React, { Component } from 'react';
import { View,Modal,TouchableOpacity,TouchableHighlight, Text, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

class myServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [   
        {id:0, name:'Samsung Galaxy A20s ', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
        {id:0, name:'Samsung Galaxy A20s ', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
        {id:0, name:'Samsung Galaxy A20s ', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
        {id:0, name:'Samsung Galaxy A20s ', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
        {id:0, name:'Samsung Galaxy A20s ', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
        {id:0, name:'Samsung Galaxy A20s ', rs:'Rs.56000', img:require('./../assets/mob5.jpeg')} ,
     ],
     modalVisible: false,
   };
  }
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
 }

  render() {
    return (
      <View style={{flex:1 ,alignItems: 'center',}}>


      <Modal
        animationType="slide"
        transparent={true}
        style={{width:'100%',height:'100%',backgroundColor:'red', justifyContent:'center', alignItems:'center'}}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{ width:'96%',justifyContent:'center',height:180,elevation:0.5,borderRadius:5,marginHorizontal:'2%', marginTop:200, borderColor:'black', borderWidth:2, elevation:5, backgroundColor:'white'}}>
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
       <TouchableOpacity  onPress = {() => { this.toggleModal(!this.state.modalVisible)}} 
        style={{width:200,justifyContent:'center', alignItems:'center',borderRadius:5, height:19, backgroundColor:'black'}}>
         <Text style={{color:'white', fontSize:12}}>Are You Sure you want to cancel</Text>
       </TouchableOpacity>
       <TouchableOpacity  onPress = {() => { this.toggleModal(!this.state.modalVisible)}} 
        style={{width:70,marginHorizontal:10,justifyContent:'center', alignItems:'center',borderRadius:5, height:19, backgroundColor:'black'}}>
         <Text style={{color:'white', fontSize:12}}>Cancel</Text>
       </TouchableOpacity>
          </View>
      {/* </TouchableOpacity> */}
        </View>
      </Modal>

   


      <View style={{width:'100%', flexDirection:'row', height:'8%',alignItems:'center',  }}>
    <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:13,}}  >
    {/* <Entypo name="menu" size={40} color="black" /> */}
    <Ionicons name="arrow-back-outline" size={30} color="black" />
    </TouchableOpacity>
    <Text style={{fontSize:20, color:'black', marginHorizontal:70}}>My Services </Text>
    </View>

    <ScrollView>
     <View >
      {this.state.images.map((key, index)=>{
        return(
          <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ProductDetails')}} style={{width:'90%',justifyContent:'center',height:180,elevation:0.5,borderRadius:5,marginHorizontal:'3%', marginTop:15,  backgroundColor:'transparent'}}>
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
        <Image style={{alignSelf:'center',}} style={{width:70, height:90}} source={key.img}/>
     <View>
     <View style={{flexDirection:'row'}}>
     <Text style={{color:'black', fontSize:13, width:185}}>{key.name}</Text>
     <Text style={{color:'black', alignSelf:'flex-end',fontWeight:'bold',fontSize:13}}>Repairing</Text>
      
     </View>
     <Text style={{color:'black', fontSize:13, width:220}}>All the product details will show here All the product details will show her All the product details will show her</Text>
     
     </View>
        </View>
          <View style={{alignItems:'center', marginBottom:10}}>
       <TouchableOpacity  onPress = {() => {this.toggleModal(true)}}  style={{width:70,justifyContent:'center', alignItems:'center',borderRadius:5, height:19, backgroundColor:'black'}}>
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


export default myServices;
