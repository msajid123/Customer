import React, { Component } from 'react';
import { View,AsyncStorage,TouchableOpacity, Text, StatusBar } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";

// const value =  AsyncStorage.getItem(id);

class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        // "https://source.unsplash.com/1024x768/?nature",
        // "https://source.unsplash.com/1024x768/?water",
        // "https://source.unsplash.com/1024x768/?girl",
        // "https://source.unsplash.com/1024x768/?tree", // Network image
         require('./../assets/image1.jpeg'), 
         require('./../assets/image2.jpeg'), 
         require('./../assets/image4.jpeg'), 
         require('./../assets/image3.jpeg'), 

                  // Local image
      ]
    };
  }

 
  render() {
    const { navigation } = this.props;

    return (
      <View style={{flex:1, backgroundColor:'black', alignItems:'center'}}>
        <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        // barStyle={statusBarStyle}
        // showHideTransition={statusBarTransition}
         />
        <View style={{width:'100%', height:'8%',justifyContent:'center',  backgroundColor:'white'}}>
        <TouchableOpacity style={{marginHorizontal:7, width:'15%', }}  onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
        <Entypo name="menu" size={40} color="black" />
        </TouchableOpacity>
        </View>
        <TouchableOpacity  style={{width:'90%', height:'20%',elevation:5,marginTop:'15%', marginBottom:'7%', justifyContent:'flex-end', alignItems:'center', backgroundColor:'white'}}>
        <SliderBox
        images={this.state.images}
        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        // currentImageEmitter={index => console.warn(`current pos is: ${index}`)}
        sliderBoxHeight={400}
        parentWidth={320}
        autoplay
        circleLoop
        resizeMethod={'resize'}
        resizeMode={'cover'}
        dotColor="white"
        paginationBoxStyle={{
          position: "absolute",
          bottom: 0,
          padding: 0,
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
          paddingVertical: 30
        }}
        imageLoadingColor="gray"
        inactiveDotColor="black"
        dotStyle={{
          width: 7,
          height: 7,
          borderRadius: 15,
          marginHorizontal:0,
          padding: 0,
          margin: 0
        }}
        
       />

        </TouchableOpacity>
        <View style={{flexDirection:'row', marginTop:40}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Menu')}} style={{width:150, height:150,elevation:5,margin:10, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}><Text style={{color:'black', alignSelf:'center',margin:10, fontSize:21}}>Mobile Solution</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Menu')}} style={{width:150, height:150,elevation:5,margin:10, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}><Text style={{color:'black', fontSize:21,margin:10}}>Computer Solution</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Menu')}} style={{width:150, height:150,elevation:5,margin:9, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}><Text style={{color:'black', alignSelf:'center',margin:10, fontSize:21}}>Electrical Solution</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Menu')}} style={{width:150, height:150,elevation:5,margin:9, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}><Text style={{color:'black', fontSize:21,margin:10}}>Mechanical Solution</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default home;
