import React, { Component } from 'react';
import { View,Text, StyleSheet,TouchableOpacity , TextInput, AsyncStorage} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
   componentDidMount()
  {
    console.log('umair')
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={{marginTop:'30%'}}>
       <Text style={{marginLeft: 150, fontWeight:'bold',fontSize:18, }}>Sign In</Text>
        {/* <TextInput placeholder="+920000000000" placeholderTextColor={'black'} style={styles.textInput} multiline={true}></TextInput> */}
       
        <TextInput placeholder="User Name" placeholderTextColor={'black'} style={{  alignSelf: 'stretch',
    padding: 10,
    marginLeft: 50,
    borderBottomColor:'#000',
    margin:5,
    marginRight:50,
    marginTop:30,
    borderBottomColor: '#000', // Add this to specify bottom border color
    borderBottomWidth: 2 }} multiline={true}></TextInput>
        <TextInput placeholder="Password" placeholderTextColor={'black'} style={{  alignSelf: 'stretch',
    padding: 10,
    marginLeft: 50,
    borderBottomColor:'#000',
    margin:5,
    marginRight:50,
    borderBottomColor: '#000', // Add this to specify bottom border color
    borderBottomWidth: 2 }} secureTextEntry></TextInput>  
   <View style={{flexDirection:'row'}}>
   <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignUp')}} style={{marginLeft: 50,marginTop:10}}><Text style={{fontSize:14}}>create new account</Text></TouchableOpacity> 
    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('OtpCode')}} style={{marginLeft: 40,marginTop:10}}><Text style={{fontSize:14}}>Forget Password?</Text></TouchableOpacity>  
   </View>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Drawer')}} style={{width:55, height:55,alignSelf:'flex-end',margin:'10%',justifyContent:'center', alignItems:'center', backgroundColor:'black', borderRadius:90}}>
        <AntDesign name="arrowright" size={24} color="white" />
        </TouchableOpacity>
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
    padding: 10,
    marginLeft: 50,
    borderBottomColor:'#000',
    margin:5,
    marginRight:50,
    borderBottomColor: '#000', // Add this to specify bottom border color
    borderBottomWidth: 2 
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

export default login;
