import React, { Component } from 'react';
import { View,Text, StyleSheet,Image,TouchableOpacity , TextInput, AsyncStorage} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

class orderSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
   componentDidMount()
  {
    console.log('umair')
    // console.log( JSON.stringify(AsyncStorage.getItem('@id'))) 
   
  }
 

  render() {
    const { navigation } = this.props;
    return (
      <View style={{flex:1, backgroundColor:'white', alignItems:'center'}}>
        <View style={{width:'100%', flexDirection:'row', height:'8%',alignItems:'center',  backgroundColor:'transparent'}}>
      <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:7,}}  >
      {/* <Entypo name="menu" size={40} color="black" /> */}
      <Ionicons name="arrow-back-outline" size={35} color="black" />
      </TouchableOpacity>
      <Text style={{fontSize:20, color:'black', marginHorizontal:40}}>Order Summary</Text>
      </View>
      <View style={{alignItems:'center'}}>
      <View  style={{ width: 320, borderColor:'black', borderWidth:1, alignSelf:'center', justifyContent: 'center', height: 300, elevation: 0, margin: 10, marginTop: 15, backgroundColor: 'white' }}>
      <Image style={{ alignSelf: 'center', }} style={{ width: 290, height: 290 }} source={require('./../assets/mob5.jpeg')} />
     
      </View>
      <View style={{ width: 320, borderRadius:5, height: 220, elevation: 5, margin: 10, marginTop: 15,justifyContent:'center', alignItems:'center', backgroundColor: 'white' }}>
       <View style={{flexDirection:'row', marginTop:10}}>
       <Text style={{ fontSize:17}}>Date: 02:01:2020</Text>
       <View style={{width:'26%'}}></View>
        <Text style={{ fontSize:17, alignItems:'center', alignSelf:'flex-end'}}>Time: 01:30</Text>
       </View>
       <View style={{flexDirection:'row', marginTop:10}}>
       <Text style={{ fontSize:20, fontWeight:'bold'}}>Product ID </Text>
       <View style={{width:'45%'}}></View>
       
        <Text style={{ fontSize:20, alignSelf:'flex-end', fontWeight:'bold' }}>12030</Text>
       </View>
       <View style={{flexDirection:'row', marginTop:5}}>
       <Text style={{ fontSize:20, fontWeight:'bold'}}>Total Products</Text>
       <View style={{width:'32%'}}></View>
       
        <Text style={{ fontSize:20, alignSelf:'flex-end', fontWeight:'bold' }}>Rs. 100</Text>
       </View>
       <View style={{flexDirection:'row', marginTop:5}}>
       <Text style={{ fontSize:20, fontWeight:'bold'}}>SubTotal</Text>
       <View style={{width:'46%'}}></View>
       
        <Text style={{ fontSize:20, alignSelf:'flex-end', fontWeight:'bold' }}>Rs. 100</Text>
       </View>
       <View style={{flexDirection:'row'}}>
       <Text style={{ fontSize:20, fontWeight:'bold'}}>Shipping Fee</Text>
       <View style={{width:'34%'}}></View>
        <Text style={{ fontSize:20, fontWeight:'bold'}}>Rs. 100</Text>
       </View>
       <Text style={{ fontSize:20,alignSelf:'flex-start', fontWeight:'bold',marginHorizontal:10, marginTop:15}}>Total: Rs</Text>

      </View>
      <TouchableOpacity onPress={() => { this.props.navigation.navigate('Confirmation') }} style={{width:250,marginVertical:20, height:50,borderRadius:30, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}><Text style={{color:'white', fontSize:22}}>Accept</Text></TouchableOpacity>

       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 

  textInput: {
    alignSelf: 'stretch',
    padding: 5,
    marginLeft: 10,
    borderBottomColor:'#000',
    margin:5,
    width:320,
    marginRight:10,
    borderBottomColor: 'gray', // Add this to specify bottom border color
    borderBottomWidth: 1
},
  btn:{
    alignSelf: 'stretch',
    backgroundColor: '#01c853',
    padding: 10,
    margin:10,
    marginLeft: 100,
    marginRight:100,
    alignItems: 'center',
}
});

export default orderSummary;
