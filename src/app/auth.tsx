import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <ScrollView
      style={{
        backgroundColor: "#F0F4F3",
        paddingHorizontal: 23,
        paddingTop: 205,
        paddingBottom: 30,
      }}
    >
      <Text style={style.title}> Welcome to Onboard! </Text>
      <Text style={style.simpleText}>
        Let’s help to meet up your <br /> tasks.
      </Text>
      <View style={{ width: "100%", alignSelf: "center" }}>
        <TextInput
          placeholder="Enter your full name"
          style={style.inputStyle}
        ></TextInput>
        <TextInput
          placeholder="Enter your Email"
          style={style.inputStyle}
        ></TextInput>
        <TextInput
          placeholder="Enter Password"
          style={style.inputStyle}
        ></TextInput>
        <TextInput
          placeholder="Confirm password"
          style={style.inputStyle}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={style.buttonStyle}
        onPress={() => router.push("/")}
      >
        <Text style={style.textButtonStyle}>Register</Text>
      </TouchableOpacity>
      <Text style={style.signTextStyle}>
        Already have an account ?{" "}
        <Text
          style={{ color: "#50C2C9" }}
          onPress={() => router.push("/login")}
        >
          Sign In
        </Text>
      </Text>
    </ScrollView>
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
  simpleText: {
    alignSelf: "center",
    textAlign: "center",
    marginTop: 31,
    fontFamily: "Poppins",
    fontWeight: 400,
    fontSize: 13,
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
