import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Login from './app/screens/Login';
import SignUp from './app/screens/SignUp';

export default function App() {
  return (
    <>
    {/* <ViewImageScreen/>
    <Login/> */}
    <SignUp/>
    </>
  );
}
