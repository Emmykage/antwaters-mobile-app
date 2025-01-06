import { Text, View } from "react-native";
import Login from "./app/screens/Login";
import SignUp from "./app/screens/SignUp";
import Welcome from "./app/screens/Welcome";
import RootStack from "./app/navigators/RootStack";
import Dashboard from "./app/screens/Dashboard";


export default function App() {
  return (
      <>

    {/* <RootStack/> */}
    <Dashboard/>
    </>
  );
}
