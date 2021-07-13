import { StatusBar } from 'expo-status-bar';
import React ,{useEffect}from 'react';
import { Component } from 'react';
import { TextInput, StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native';

export default class splash extends Component{  
  componentDidMount() 
  {
    setTimeout(() => this.props.navigation.navigate('Login'), 5000)
  }
  
 render()
 {
  return (
    <View style={styles.container}>
        <Image source={require('./../assets/splash_logo.png')} style={{marginVertical:'10%', width:'45%', height:'18%'}}/>
      {/* <TouchableOpacity onPress={()=>navigation.navigate('SignUp', {
        id: 0,   })} style={{width:'75%', height:'8%',marginVertical:'10%', justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10 }}>
        <Text style={{fontSize:17, color:'black'}}>Technician</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('SignUp', {
        id: 1,   })} style={{width:'75%', height:'8%', justifyContent:'center', alignItems:'center', backgroundColor:'white', borderRadius:10 }}>
        <Text style={{fontSize:17, color:'black'}}>Storeman</Text>
      </TouchableOpacity> */}
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
