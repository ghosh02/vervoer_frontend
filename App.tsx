/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home.jsx';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword.jsx';
import NumberVerifysuccess from './pages/NumberVerifysuccess.jsx';
import EmailVerifySuccess from './pages/EmailVerifySuccess.jsx';
import SignUp from './pages/SignUp.jsx';
import Personalinfo from './pages/Personalinfo.jsx';
import ForgotPasswordEmail from './pages/ForgotPasswordEmail.jsx';
import EmailVerify from './pages/EmailVerify.jsx';
import NumberVerify from './pages/NumberVerify.jsx';
import FirstPage from './pages/FirstPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import Carousel from './utils/Carousel.jsx';
import {UserProfileContext} from './context/UserProfileContext.js';
import MyProfile from './profileFunction/Myprofile/MyProfile.jsx';
import EditProfile from './profileFunction/Myprofile/EditProfile.jsx';
import FareCard from './profileFunction/Farecard/FareCard.jsx';
import AddCard from './profileFunction/Farecard/AddCard.jsx';
import Scanner from './utils/Scanner.jsx';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <UserProfileContext>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="LandingPage" component={LandingPage} /> */}
          {/* <Stack.Screen name="MyProfile" component={MyProfile} /> */}
          {/* <Stack.Screen name="EditProfile" component={EditProfile} /> */}
          {/* <Stack.Screen name="Scanner" component={Scanner} /> */}
          {/* <Stack.Screen name="FareCard" component={FareCard} /> */}
          <Stack.Screen name="AddCard" component={AddCard} />
          {/* <Stack.Screen name="Home" component={Home} /> */}
          {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Personalinfo" component={Personalinfo} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen
          name="ForgotPasswordEmail"
          component={ForgotPasswordEmail}
        />
        <Stack.Screen name="NumberVerify" component={NumberVerify} />
        <Stack.Screen
          name="NumberVerifysuccess"
          component={NumberVerifysuccess}
        />
        <Stack.Screen name="EmailVerify" component={EmailVerify} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="EmailVerifySuccess"
          component={EmailVerifySuccess}
        />
        <Stack.Screen name="FirstPage" component={FirstPage} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </UserProfileContext>
  );
}

export default App;
