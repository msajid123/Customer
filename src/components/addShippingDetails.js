import React, { Component } from 'react';
import { View,Text, StyleSheet,TouchableOpacity , TextInput, AsyncStorage} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

class addShippingDetails extends Component {
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
      <View style={{flex:1, alignItems:'center'}}>
        <View style={{width:'100%', flexDirection:'row', height:'8%',alignItems:'center',  backgroundColor:'transparent'}}>
      <TouchableOpacity onPress={()=>{this.props.navigation.goBack()}} style={{marginHorizontal:7,}}  >
      {/* <Entypo name="menu" size={40} color="black" /> */}
      <Ionicons name="arrow-back-outline" size={35} color="black" />
      </TouchableOpacity>
      <Text style={{fontSize:20, color:'black', marginHorizontal:40}}>Add Shipping Details</Text>
     
      </View>
       <View style={{marginTop:50, alignItems:'center'}}>
       <TextInput placeholder="Full Name" placeholderTextColor={'black'} style={styles.textInput} multiline={true}></TextInput>
        <TextInput placeholder="Phone No" placeholderTextColor={'black'} style={styles.textInput} multiline={true}></TextInput>
        <TextInput placeholder="City" placeholderTextColor={'black'} style={styles.textInput} multiline={true}></TextInput>
        <TextInput placeholder="Address" placeholderTextColor={'black'} style={styles.textInput} multiline={true}></TextInput>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('OrderSummary') }} style={{width:250,marginVertical:30, height:50,borderRadius:30, justifyContent:'center', alignItems:'center', backgroundColor:'black'}}><Text style={{color:'white', fontSize:22}}>Submit</Text></TouchableOpacity>
       
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

export default addShippingDetails;
