import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

class wantToCancel extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{flex:1}}>
          <View style={{height:'10%'}}></View>
       <View style={{width:'100%', height:'6%', backgroundColor:'black'}}></View>
       <View style={{height:'25%',width:'100%', borderWidth:1, borderColor:'black',  alignItems:'center'}}>
       <Text style={{marginVertical:50, fontSize:15}}>Are You Sure You Want To Cancel Order</Text>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('WantToCancel')}} style={{width:'30%',alignSelf:'center',marginVertical:10, justifyContent:'center', alignItems:'center', height:'13%', backgroundColor:'black'}}>
              <Text style={{color:'white', fontSize:14}}>Cancel</Text>
            </TouchableOpacity>
       </View>
      </View>
    );
  }
}

export default wantToCancel;
