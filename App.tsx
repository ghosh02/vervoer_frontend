/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UserProfileContext} from './context/UserProfileContext.js';
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
import LandingPage from './pages/LandingPage.jsx';
import MyProfile from './Menu/Myprofile/MyProfile.jsx';
import EditProfile from './Menu/Myprofile/EditProfile.jsx';
import FareCard from './Menu/Farecard/FareCard.jsx';
import AddFareCard from './Menu/Farecard/AddFairCard.jsx';
import ContactUs from './Menu/ContatcUS/ContactUs.jsx';
import ResetPassword from './Menu/ResetPassword/ResetPassword.jsx';
import NotificationPage from './Menu/Notification/NotificationPage.jsx';
import SearchPage from './Menu/Search/Search.jsx';
import Wallet from './Menu/Wallet/Wallet.jsx';
import Withdraw from './Menu/Wallet/Withdraw.jsx';
import HistoryDetail from './Menu/Wallet/HistoryDetail.jsx';
import Deposit from './Menu/Wallet/Deposit.jsx';
import DepositPayment from './Menu/Wallet/DepositPayment.jsx';
import AddBank from './Menu/Wallet/AddBank.jsx';
import SelectMethod from './Menu/Wallet/SelectMethod.jsx';
import AddCard from './Menu/Wallet/AddCard.jsx';
import DepositMoney from './Menu/Wallet/DepositMoney.jsx';
import ChangeCard from './Menu/Wallet/ChangeCard.jsx';
import DepositSummary from './Menu/Wallet/DepositSummary.jsx';
import DepositSuccess from './Menu/Wallet/DepositSuccess.jsx';
import WithdrawMoney from './Menu/Wallet/WithdrawMoney.jsx';
import WithdrawSummary from './Menu/Wallet/WithdrawSummary.jsx';
import WithdrawSuccess from './Menu/Wallet/WithdrawSuccess.jsx';
import UserHome from './HomeSection/UserHome.jsx';
import MarchantHome from './HomeSection/MarchantHome.jsx';
import DriverHome from './HomeSection/DriverHome.jsx';
import RideShare from './userHome/RideShare/RideShare.jsx';
import DateTimePick from './components/DateTimePick.jsx';
import RideType from './userHome/RideShare/RideType.jsx';
import BookRide from './userHome/RideShare/BookRide.jsx';
import RideShareHome from './userHome/RideShare/RideShareHome.jsx';
import RideDetails from './userHome/RideShare/RideDetails.jsx';
import CancelRide from './userHome/RideShare/CancelRide.jsx';
import CancelBookingUser from './userHome/RideShare/CancelBookingUser.jsx';
import CancelBookingDriver from './userHome/RideShare/CancelBookingDriver.jsx';
import RideHistory from './userHome/History/RideHistory.jsx';
import LiveSession from './userHome/LiveSession/LiveSession.jsx';
import SessionSummary from './userHome/LiveSession/SessionSummary.jsx';
import EndSession from './userHome/LiveSession/EndSession.jsx';
import LocateDryCleaning from './DriverHome/LocateDryCleaning.jsx';
import RideShareVideo from './userHome/RideShare/RideShareVideo.jsx';
import ParkingHome from './userHome/Parking/ParkingHome.jsx';
import BookParking from './userHome/Parking/BookParking.jsx';
import AddParkingLocation from './userHome/Parking/AddParkingLocation.jsx';
import PickParking from './userHome/Parking/PickParking.jsx';
import ParkingDetail from './userHome/Parking/ParkingDetail.jsx';
import ParkingSlot from './userHome/Parking/ParkingSlot.jsx';

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
          <Stack.Screen name="AddFareCard" component={AddFareCard} />
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
