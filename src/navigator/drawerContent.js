import React,{Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Switch,
  Image,
  Dimensions,
  Picker
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

  class DrawerContent extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        isEnabled:false,
      }
    }
     toggleSwitch ()
      {this.setState({isEnabled:!this.state.isEnabled})}


    render(){
  return (
   <View style={{flex:1}}>
      <View style={{height:'30%', width:'100%',justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
      <View style={{width:100, height:100, justifyContent:'center', alignItems:'center', backgroundColor:'transparent', borderColor:'white', borderWidth:2, borderRadius:60}}>
      <FontAwesome name="user-o" size={50} color="white" />
      </View>
    </View>
     {/* <Switch
     trackColor={{ false: 'black', true: 'green' }}
     thumbColor={this.state.isEnabled ? 'white' : '#f4f3f4'}
     ios_backgroundColor="#3e3e3e"
     onValueChange={()=>this.toggleSwitch()}
     value={this.state.isEnabled}
     style={{ transform: [{ scaleX: 1.1}, { scaleY: 1.1}], margin:15 }}
   /> */}
    <View style={{marginHorizontal:20, marginTop:20}}>
    <TouchableOpacity style={{flexDirection:'row',  alignItems:'center'}} onPress={()=>{this.props.navigation.navigate('Home')}}>
    <Ionicons name="md-home-outline" size={17} color="black" />
    <Text style={{fontSize:15, marginHorizontal:20, marginVertical:6}}>Home</Text></TouchableOpacity>
    <TouchableOpacity style={{flexDirection:'row',  alignItems:'center'}}  onPress={()=>{this.props.navigation.navigate('MyServices')}}>
    <Feather name="tool" size={19} color="black" />
    <Text style={{fontSize:15, marginHorizontal:20,  marginVertical:6}}>My Services</Text></TouchableOpacity>
    <TouchableOpacity style={{flexDirection:'row',  alignItems:'center'}}  onPress={()=>{this.props.navigation.navigate('PurchaseHistory')}}>
    <Ionicons name="cart" size={21} color="black" />
    <Text style={{fontSize:15, marginHorizontal:20,  marginVertical:6}}>Purchase History </Text></TouchableOpacity>
    {/* <TouchableOpacity style={{flexDirection:'row',  alignItems:'center'}}  onPress={()=>{this.props.navigation.navigate('PromoCode')}}>
    <Ionicons name="cart" size={21} color="black" />
    <Text style={{fontSize:15, marginHorizontal:20,  marginVertical:6}}>Promo Code </Text></TouchableOpacity> */}
    <TouchableOpacity style={{flexDirection:'row',  alignItems:'center'}}  onPress={()=>{this.props.navigation.navigate('HelpSupport')}}>
    <Ionicons name="ios-help-circle" size={22} color="black" />
    <Text style={{fontSize:15, marginHorizontal:20,  marginVertical:6}}>Help & Support</Text></TouchableOpacity>
    <TouchableOpacity style={{flexDirection:'row',  alignItems:'center'}}  onPress={()=>{this.props.navigation.navigate('Faq')}}>
    <AntDesign name="exclamationcircle" size={16} color="black" />
    <Text style={{fontSize:15, marginHorizontal:20,  marginVertical:6}}>FAQ</Text></TouchableOpacity>
    <TouchableOpacity style={{flexDirection:'row',  alignItems:'center'}}  onPress={()=>{this.props.navigation.navigate('Settings')}}>  
    <Ionicons name="ios-settings-outline" size={20} color="black" />
    <Text style={{fontSize:15, marginHorizontal:20,  marginVertical:6}}>Settings</Text></TouchableOpacity>

    </View>
    {/* <View style={{justifyContent:'flex-end', alignItems:'center', height:280}}>
    <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Splash')}} style={{backgroundColor:'black',alignItems:'center',borderRadius:40, justifyContent:'center', borderWidth:1, width:180, height:50}}>
      <Text style={{fontSize:22, fontWeight:'bold', color:'white'}}> Log Out</Text>
    </TouchableOpacity>
    </View>  */}
     </View>
  );}

};

export default DrawerContent;
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  logoCircleDesign: {
    backgroundColor: '#D1D1D1',
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: Dimensions.get('window').width * 0.2,
    height: Dimensions.get('window').width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%'
  },
  appNameView: {
    marginTop: '10%'
  },
  appNameText:{
    color: '#D1D1D1',
  },
  barView: {
    borderBottomColor: '#D1D1D1',
    borderBottomWidth: 1,
    marginRight: '5%',
    marginTop: '5%'
  },
  barView2: {
    borderBottomColor: '#D1D1D1',
    borderBottomWidth: 1,
    margin: '5%',
  },
  logoutView: {
    marginTop: '80%'
  }
});



// <View
//         style={ styles.drawerContent}>
//         <View style={styles.userInfoSection}>
//           <View style={styles.logoCircleDesign}>
//           <Image
//         source={require('../../assets/logo.png')}
//         style={{height: '100%', width: '100%',alignSelf:'center',}}
//          />
//           </View>
//           <View style={styles.appNameView}>
//             <Text style={styles.appNameText}>App Name</Text>
//           </View>
//           <View style={styles.barView}></View>
//         </View>
//         <View style={styles.drawerSection}>
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons
//                 name="ios-restaurant-outline"
//                 color={color}
//                 size={size}
//               />
//             )}
//             label="My Order"
//             onPress={() => this.props.navigation.navigate('Dishes')}
//           />
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons
//                 name="ios-settings-outline"
//                 color={color}
//                 size={size}
//               />
//             )}
//             label="Settings"
//             onPress={() => this.props.navigation.navigate('Settings')}
//           />
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons
//                 name="ios-help-outline"
//                 color={color}
//                 size={size}
//               />
//             )}
//             label="Help"
//             onPress={() => this.props.navigation.navigate('Help')}
//           />
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons
//                 name="ios-share-social-outline"
//                 color={color}
//                 size={size}
//               />
//             )}
//             label="Share"
//             onPress={() => this.props.navigation.navigate('Share')}
//           />
//            <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons
//                 name="ios-share-social-outline"
//                 color={color}
//                 size={size}
//               />
//             )}
//             label="Select Branch"
//             onPress={() => this.props.navigation.navigate('SelectBranch')}
//           />
//         </View>
//         <View style={styles.logoutView}>
//           <View style={styles.barView2}></View>
//           <DrawerItem
//             icon={({ color, size }) => (
//               <Ionicons
//                 name="ios-log-out-outline"
//                 color={color}
//                 size={size}
//               />
//             )}
//           />
//         </View>
//  </View>