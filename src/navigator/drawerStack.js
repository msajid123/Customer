import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './../components/home'
import { NavigationContainer } from '@react-navigation/native';
import History from './../components/history.js';
import HelpSupport from './../components/helpSupport.js';
import Policies from './../components/policies.js';
import Designation from './../components/designation.js';
import Name from './../components/name.js';
import Faq from './../components/faq.js';
import { Entypo } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerContent from './drawerContent'
import MyServices  from "./../components/myServices";
import PurchaseHistory  from "./../components/purchaseHistory";
import Settings from './../components/settings';
import  PromoCode from './../components/promoCode'


const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={(props) => (
      <DrawerContent {...props} />
    )}>
    <Drawer.Screen  name="Home" component={Home} />
    <Drawer.Screen  name="MyServices" component={MyServices} />
    <Drawer.Screen name="PurchaseHistory" component={PurchaseHistory} />
    <Drawer.Screen name="HelpSupport" component={HelpSupport} />
    <Drawer.Screen name="History" component={History} />
    <Drawer.Screen name="Faq" component={Faq} />
    <Drawer.Screen name="Settings" component={Settings} />
    {/* <Drawer.Screen name="PromoCode" component={PromoCode} /> */}


    
  </Drawer.Navigator>
  );
}

export default MyDrawer;


// options={{  headerLeft: () => (
//   <TouchableOpacity  onPress={() => this.props.navigation.navigate('DrawerOpen')}>
// <Entypo name="menu" size={30} color="black" />
//   </TouchableOpacity>
// ), headerTintColor:'black' }} 