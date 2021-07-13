import React, { Component } from 'react';
import { View,Text, StyleSheet,TouchableOpacity , TextInput, AsyncStorage} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';

class otpCode extends Component {
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
       <Text style={{marginLeft: 50,fontSize:18, color:'gray' }}>Enter Your Verification Code</Text>
        <TextInput placeholder="" placeholderTextColor={'black'} style={styles.textInput} multiline={true}></TextInput>
        <Text style={{marginLeft: 50,fontSize:18, color:'gray' }}>Resend Code in 00:30</Text>
       
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ForgetPassword')}} style={{width:55, height:55,alignSelf:'flex-end',margin:'10%',justifyContent:'center', alignItems:'center', backgroundColor:'black', borderRadius:90}}>
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

export default otpCode;
