/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserProfileContext} from './src/context/UserProfileContext.js';
import RideShare from './src/userHome/RideShare/RideShare.jsx';
import RideType from './src/userHome/RideShare/RideType.jsx';
import BookRide from './src/userHome/RideShare/BookRide.jsx';
import RideShareHome from './src/userHome/RideShare/RideShareHome.jsx';
import RideDetails from './src/userHome/RideShare/RideDetails.jsx';
import CancelRide from './src/userHome/RideShare/CancelRide.jsx';
import CancelBookingUser from './src/userHome/RideShare/CancelBookingUser.jsx';
import CancelBookingDriver from './src/userHome/RideShare/CancelBookingDriver.jsx';
import RideShareVideo from './src/userHome/RideShare/RideShareVideo.jsx';
import ParkingHome from './src/userHome/Parking/ParkingHome.jsx';
import BookParking from './src/userHome/Parking/BookParking.jsx';
import AddParkingLocation from './src/userHome/Parking/AddParkingLocation.jsx';
import PickParking from './src/userHome/Parking/PickParking.jsx';
import ParkingDetail from './src/userHome/Parking/ParkingDetail.jsx';
import ParkingSlot from './src/userHome/Parking/ParkingSlot.jsx';
import RideHistory from './src/userHome/History/RideHistory.jsx';
import LiveSession from './src/userHome/LiveSession/LiveSession.jsx';
import SessionSummary from './src/userHome/LiveSession/SessionSummary.jsx';
import EndSession from './src/userHome/LiveSession/EndSession.jsx';
import LocateDryCleaning from './src/DriverHome/LocateDryCleaning.jsx';
import LandingPage from './src/auth/LandingPage.jsx';
import ForgotPassword from './src/auth/ForgotPassword.jsx';
import EmailVerifySuccess from './src/auth/EmailVerifySuccess.jsx';
import EmailVerify from './src/auth/EmailVerify.jsx';
import ForgotPasswordEmail from './src/auth/ForgotPasswordEmail.jsx';
import Personalinfo from './src/auth/Personalinfo.jsx';
import NumberVerifysuccess from './src/auth/NumberVerifysuccess.jsx';
import NumberVerify from './src/auth/NumberVerify.jsx';
import SignUp from './src/auth/SignUp.jsx';
import Login from './src/auth/Login.jsx';
import Home from './src/auth/Home.jsx';
import MarchantHome from './src/HomeSection/MarchantHome.jsx';
import DriverHome from './src/HomeSection/DriverHome.jsx';
import UserHome from './src/HomeSection/UserHome.jsx';
import MyProfile from './src/menu/Myprofile/MyProfile.jsx';
import EditProfile from './src/menu/Myprofile/EditProfile.jsx';
import FareCard from './src/menu/Farecard/FareCard.jsx';
import ContactUs from './src/menu/ContatcUS/ContactUs.jsx';
import ResetPassword from './src/menu/ResetPassword/ResetPassword.jsx';
import SearchPage from './src/menu/Search/Search.jsx';
import Wallet from './src/menu/Wallet/Wallet.jsx';
import NotificationPage from './src/menu/Notification/NotificationPage.jsx';
import HistoryDetail from './src/menu/Wallet/HistoryDetail.jsx';
import Deposit from './src/menu/Wallet/Deposit.jsx';
import SelectMethod from './src/menu/Wallet/SelectMethod.jsx';
import Withdraw from './src/menu/Wallet/Withdraw.jsx';
import DepositPayment from './src/menu/Wallet/DepositPayment.jsx';
import AddBank from './src/menu/Wallet/AddBank.jsx';
import DepositMoney from './src/menu/Wallet/DepositMoney.jsx';
import DepositSummary from './src/menu/Wallet/DepositSummary.jsx';
import ChangeCard from './src/menu/Wallet/ChangeCard.jsx';
import DepositSuccess from './src/menu/Wallet/DepositSuccess.jsx';
import WithdrawMoney from './src/menu/Wallet/WithdrawMoney.jsx';
import WithdrawSummary from './src/menu/Wallet/WithdrawSummary.jsx';
import WithdrawSuccess from './src/menu/Wallet/WithdrawSuccess.jsx';
import AddFairCard from './src/menu/Farecard/AddFairCard.jsx';
import AddCard from './src/menu/Wallet/AddCard.jsx';

const Stack = createNativeStackNavigator();
function App(): React.JSX.Element {
  return (
    <UserProfileContext>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {/* <Stack.Screen
            name="CancelBookingDriver"
            component={CancelBookingDriver}
          /> */}
          {/* <Stack.Screen name="DateTimePick" component={DateTimePick} /> */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="NumberVerify" component={NumberVerify} />
          <Stack.Screen
            name="NumberVerifysuccess"
            component={NumberVerifysuccess}
          />
          <Stack.Screen name="Personalinfo" component={Personalinfo} />

          <Stack.Screen
            name="ForgotPasswordEmail"
            component={ForgotPasswordEmail}
          />
          <Stack.Screen name="EmailVerify" component={EmailVerify} />
          <Stack.Screen
            name="EmailVerifySuccess"
            component={EmailVerifySuccess}
          />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="LandingPage" component={LandingPage} />
          <Stack.Screen name="MyProfile" component={MyProfile} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="FareCard" component={FareCard} />
          <Stack.Screen name="AddFareCard" component={AddFairCard} />
          <Stack.Screen name="ContactUs" component={ContactUs} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="SearchPage" component={SearchPage} />
          <Stack.Screen name="Wallet" component={Wallet} />
          <Stack.Screen name="NotificationPage" component={NotificationPage} />
          <Stack.Screen name="HistoryDetail" component={HistoryDetail} />
          <Stack.Screen name="Deposit" component={Deposit} />
          <Stack.Screen name="SelectMethod" component={SelectMethod} />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="Withdraw" component={Withdraw} />
          <Stack.Screen name="DepositPayment" component={DepositPayment} />
          <Stack.Screen name="AddBank" component={AddBank} />
          <Stack.Screen name="DepositMoney" component={DepositMoney} />
          <Stack.Screen name="DepositSummary" component={DepositSummary} />
          <Stack.Screen name="ChangeCard" component={ChangeCard} />
          <Stack.Screen name="DepositSuccess" component={DepositSuccess} />
          <Stack.Screen name="WithdrawMoney" component={WithdrawMoney} />
          <Stack.Screen name="WithdrawSummary" component={WithdrawSummary} />
          <Stack.Screen name="WithdrawSuccess" component={WithdrawSuccess} />
          <Stack.Screen name="UserHome" component={UserHome} />
          <Stack.Screen name="RideShareHome" component={RideShareHome} />
          <Stack.Screen name="RideShare" component={RideShare} />
          <Stack.Screen name="RideType" component={RideType} />
          <Stack.Screen name="BookRide" component={BookRide} />
          <Stack.Screen name="RideDetails" component={RideDetails} />
          <Stack.Screen name="CancelRide" component={CancelRide} />
          <Stack.Screen
            name="CancelBookingUser"
            component={CancelBookingUser}
          />
          <Stack.Screen name="RideHistory" component={RideHistory} />
          <Stack.Screen name="LiveSession" component={LiveSession} />
          <Stack.Screen name="SessionSummary" component={SessionSummary} />
          <Stack.Screen name="EndSession" component={EndSession} />
          <Stack.Screen name="RideShareVideo" component={RideShareVideo} />
          <Stack.Screen name="ParkingHome" component={ParkingHome} />
          <Stack.Screen name="BookParking" component={BookParking} />
          <Stack.Screen name="ParkingSlot" component={ParkingSlot} />
          <Stack.Screen
            name="AddParkingLocation"
            component={AddParkingLocation}
          />
          <Stack.Screen name="PickParking" component={PickParking} />
          <Stack.Screen name="ParkingDetail" component={ParkingDetail} />

          <Stack.Screen name="MarchantHome" component={MarchantHome} />
          <Stack.Screen name="DriverHome" component={DriverHome} />
          <Stack.Screen
            name="LocateDryCleaning"
            component={LocateDryCleaning}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProfileContext>
  );
}

export default App;

// ./gradlew assembleRelease
// ./gradlew clean
