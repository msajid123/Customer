import React, { Component } from 'react';
import { View,AsyncStorage,TouchableOpacity, Text, Image } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons'; 
import { SliderBox } from "react-native-image-slider-box";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import InputSpinner from "react-native-input-spinner";

// const value =  AsyncStorage.getItem(id);

class productDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
  }
}

 
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, backgroundColor: 'black', alignItems: 'center' }}>
        <View style={{ width: '100%', height: '8%',  justifyContent: 'center', backgroundColor: 'black' }}>
          <TouchableOpacity onPress={() => { this.props.navigation.goBack() }} style={{ marginHorizontal: 7, }}  >
            {/* <Entypo name="menu" size={40} color="black" /> */}
            <Ionicons name="arrow-back-outline" size={35} color="white" />
          </TouchableOpacity>
        </View>
       <ScrollView >
       <View style={{alignItems:'center'}}>
       <View  style={{ width: 300, borderRadius:8, alignSelf:'center', justifyContent: 'center', height: 330, elevation: 0, margin: 10, marginTop: 15, backgroundColor: 'white' }}>
          <Image style={{ alignSelf: 'center', }} style={{ width: 290, height: 290 }} source={require('./../assets/mob5.jpeg')} />
        </View>
       <View style={{flexDirection:'row'}}>
       <InputSpinner
	max={10}
	min={2}
	step={2}
	colorMax={"white"}
  colorMin={"white"}
  initialValue={0}
  buttonStyle={{backgroundColor:'gray'}}
  style={{width:150, height:50, marginHorizontal:15 }}
  rounded={false}
  textColor={'black'}
  background={'white'}
  inputStyle={{color:'black'}}
	value={this.state.number}
	onChange={(num) => {
		console.log(num);
	}}
/>
<TextInput style={{width:100,borderRadius:3, height:50, backgroundColor:'white', marginHorizontal:20, fontSize:21}} defaultValue={'1000'}></TextInput>
       </View>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('AddShippingDetails') }} style={{width:250,marginVertical:15, height:50,borderRadius:30, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}><Text style={{color:'black', fontSize:22}}>Add to Cart</Text></TouchableOpacity>
        <View style={{ width: 300, borderRadius:5, height: 330, elevation: 0, margin: 10, marginTop: 15, backgroundColor: 'white' }}>
        <Text style={{margin:10, fontSize:20}}>Details</Text>
        </View>
       </View>
       </ScrollView>

      </View>
    );
  }
}

export default productDetails;
