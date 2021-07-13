
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer,DrawerActions } from '@react-navigation/native';
// import { createDrawerNavigator } from "@react-navigation/drawer";

// import { createStackNavigator } from 'react-navigation/stack';
import Splash from './src/components/splash.js';
import SignUp from './src/components/singUp.js';
import Home from './src/components/home.js';
import History from './src/components/history.js';
import ForgetPassword from './src/components/forgetPassword.js';
import HelpSupport from './src/components/helpSupport.js';
import Policies from './src/components/policies.js';
import Faq from './src/components/faq.js';
import Designation from './src/components/designation.js';
import OrdersDetails from './src/components/OrdersDetails'
import Drawer_Stack from './src/navigator/drawerStack'
// import DrawerNavigator from './src/navigator/drawerStack'
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons'; 
import Login from './src/components/login'
import OtpCode from './src/components/otpCode'
import Name from './src/components/name'
import Menu from './src/components/menu'
import Products from './src/components/products'
import Repairing from './src/components/repairingRequestForm'
import Maintenance from './src/components/maintenanceRequestForm'
import ProductDetails from './src/components/productDetails'
import AddShippingDetails from './src/components/addShippingDetails'
import OrderSummary from './src/components/orderSummary'
import Confirmation from './src/components/confirmation'
import Filter from './src/components/filter'
import Search from './src/components/search'
import Select1 from './src/components/select1'
import MyServices  from "./src/components/myServices";
import PurchaseHistory  from "./src/components/purchaseHistory";
import WantToCancel from './src/components/wantToCancel';
import Select2 from './src/components/select2'
import PromoCode from './src/components/promoCode'
import RepairingComplaint from './src/components/repairingComplaint'
import TermsConditions from './src/components/termsConditions'







enableScreens();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}}  name="Splash" component={Splash} />
        <Stack.Screen options={{headerShown: false}}  name="Login" component={Login} />
        <Stack.Screen options={{ title: '', headerTintColor:'black' }}  options={{headerShown: false}}  name="OtpCode" component={OtpCode} />
        <Stack.Screen options={{ title: '', headerTintColor:'black' }} name="SignUp" component={SignUp} />
        <Stack.Screen options={{ title: '', headerTintColor:'black' }} name="ForgetPassword" component={ForgetPassword} />

        <Stack.Screen options={{headerShown:false}} name="Drawer" component={Drawer_Stack} />
        <Stack.Screen options={{ title: '', headerTintColor:'black' }} name="Name" component={Name} />
        <Stack.Screen options={{headerShown: false}} name="Menu" component={Menu} />
        <Stack.Screen options={{headerShoown:false}} name="History" component={History} />
        <Stack.Screen options={{headerShown:false}} name="HelpSupport" component={HelpSupport} />
        <Stack.Screen options={{headerShown:false}} name="Policies" component={Policies} />
        <Stack.Screen options={{headerShown:false}} name="Faq" component={Faq} />
        <Stack.Screen options={{headerShown:false}} name="OrdersDetails" component={OrdersDetails} />
        <Stack.Screen options={{headerShown:false}} name="Designation" component={Designation} />
        <Stack.Screen options={{headerShown:false}} name="Products" component={Products} />
        <Stack.Screen options={{headerShown:false}} name="Maintenance" component={Maintenance} />
        <Stack.Screen options={{headerShown:false}} name="Repairing" component={Repairing} />
        <Stack.Screen options={{headerShown:false}} name="ProductDetails" component={ProductDetails} />
        <Stack.Screen options={{headerShown:false}} name="AddShippingDetails" component={AddShippingDetails} />
        <Stack.Screen options={{headerShown:false}} name="OrderSummary" component={OrderSummary} />  
        <Stack.Screen options={{headerShown:false}} name="Confirmation" component={Confirmation} />      
        <Stack.Screen options={{headerShown:false}} name="Filter" component={Filter} /> 
        <Stack.Screen options={{headerShown:false}} name="Search" component={Search} />        
        <Stack.Screen options={{headerShown:false}} name="Select1" component={Select1} />  
        <Stack.Screen options={{headerShown:false}} name="Select2" component={Select2} />   
        <Stack.Screen options={{headerShown:false}} name="MyServices" component={MyServices} />    
        <Stack.Screen options={{headerShown:false}} name="PurchaseHistory" component={PurchaseHistory} />    
        <Stack.Screen options={{headerShown:false}} name="WantToCancel" component={WantToCancel} />    
        <Stack.Screen options={{headerShown:false}} name="PromoCode" component={PromoCode} />   
        <Stack.Screen options={{headerShown:false}} name="RepairingComplaint" component={RepairingComplaint} />    
        <Stack.Screen options={{headerShown:false}} name="TermsConditions" component={TermsConditions} />    
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;