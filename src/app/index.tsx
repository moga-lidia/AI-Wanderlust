import React from "react";
import { View } from "react-native";
import App from "./App";
import {auth} from './../../configs/FirebaseConfig';
import { Redirect } from "expo-router";
import Login from "../components/Login";

export default function Index() {
  const user = auth.currentUser;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {user? <Redirect href={'/(tabs)/MyTrip'}/>: <Login />}
    </View>
  );
}
