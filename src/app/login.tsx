import { router } from "expo-router";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";

import SvgComponent from "./assets/components/LoginImg";

export default function loginUser() {
  return (
    <View style={{ alignItems: "center", flex: 1, paddingHorizontal: 23 }}>
      <Text style={{ ...style.title, marginTop: 205 }}>
        Welcome to Onboard!
      </Text>
      <SvgComponent style={{ marginTop: 53 }} />
      <TextInput
        placeholder="Enter your Email"
        style={{ ...style.inputStyle, marginTop: 87 }}
      ></TextInput>
      <TextInput
        placeholder="Enter Password"
        style={{ ...style.inputStyle, marginTop: 30 }}
      ></TextInput>
      <Text style={{ ...style.forgotPwd, marginTop: 48 }}>
        Forget password ?
      </Text>
      <TouchableOpacity
        style={{ ...style.buttonStyle, marginTop: 48, width: "100%" }}
        onPress={() => router.push("/")}
      >
        <Text
          style={style.textButtonStyle}
          onPress={() => router.push("/profile")}
        >
          Login
        </Text>
      </TouchableOpacity>
      <Text style={style.signTextStyle}>
        Don’t have an account ?{" "}
        <Text style={{ color: "#50C2C9" }} onPress={() => router.push("/auth")}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: 18,
    color: "#000000",
  },
  inputStyle: {
    width: "100%",
    alignSelf: "center",
    marginTop: 30,
    padding: 15,
    borderRadius: 100,
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 13,
    color: "#000000",
    backgroundColor: "#FFFFFF",
  },
  forgotPwd: {
    fontWeight: 400,
    fontSize: 13,
    color: "#50C2C9",
  },
  buttonStyle: {
    marginTop: 89,
    backgroundColor: "#50C2C9",
    borderRadius: 8,
    paddingVertical: 16,
    // paddingHorizontal: 150,
  },
  textButtonStyle: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 18,
    alignSelf: "center",
    textAlign: "center",
    color: "#FFFFFF",
  },
  signTextStyle: {
    marginTop: 19,
    textAlign: "center",
    alignSelf: "center",
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 16,
    color: "#000000",
  },
});
