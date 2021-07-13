import React, { Component } from 'react';
import { View,Text, StyleSheet,TouchableOpacity , TextInput, AsyncStorage} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';

class singUp extends Component {
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
      <View>
        <TextInput placeholder="Email" placeholderTextColor={'black'} style={styles.textInput} multiline={true}></TextInput>
        <TextInput placeholder="User Name" placeholderTextColor={'black'} style={styles.textInput} multiline={true}></TextInput>
        <TextInput placeholder="Phone No" placeholderTextColor={'black'} style={styles.textInput} multiline={true}></TextInput>
        <TextInput placeholder="Password"  placeholderTextColor={'black'} style={styles.textInput} secureTextEntry></TextInput>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Login')}} style={{width:55, height:55,alignSelf:'flex-end',margin:'10%',justifyContent:'center', alignItems:'center', backgroundColor:'black', borderRadius:90}}>
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
export default singUp;
