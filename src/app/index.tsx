import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
const background = require("../../src/assets/background.png");
import Facebook from "../assets/components/facebook";
import Google from "../assets/components/google";

export default function MainScreen() {
  const router = useRouter();
  return (
    <>
      <ImageBackground
        source={background}
        style={{ width: "100%", height: "100%", alignItems: "center" }}
      >
        <View
          style={{
            paddingHorizontal: 33,
            paddingBottom: 96,
            paddingVertical: 33,
            width: 316,
            marginTop: 180,
            backgroundColor: "#FFFFFF",
            borderRadius: 17,
            borderStyle: "solid",
            borderWidth: 1,
            borderColor: "#766F6FCC",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
              gap: 33,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#BE0127",
                paddingHorizontal: 28,
                paddingVertical: 4,
                borderRadius: 17,
              }}
            >
              <Text style={{ fontFamily: "roboto-bold", color: "#FFFFFF" }}>
                Log In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#F8E0A0",
                paddingHorizontal: 28,
                paddingVertical: 4,
                borderRadius: 17,
                borderStyle: "solid",
                borderWidth: 1,
                borderColor: "#BE0127",
              }}
            >
              <Text style={{ fontFamily: "roboto-bold", color: "#BE0127" }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Enter  email or username"
            style={style.border}
          ></TextInput>
          <TextInput placeholder="Password" style={style.border}></TextInput>
          <Text
            style={{
              textAlign: "right",
              marginTop: 13,
              fontFamily: "roboto-regular",
              color: "#766F6F",
            }}
          >
            Forgot Password?
          </Text>
          <TouchableOpacity
            style={{
              alignSelf: "center",
              backgroundColor: "#BE0127",
              paddingHorizontal: 44,
              paddingVertical: 6,
              borderRadius: 17,
              borderStyle: "solid",
              borderWidth: 1,
              borderColor: "#BE0127",
              maxWidth: 140,
              marginTop: 29,
            }}
          >
            <Text
              style={{ fontFamily: "roboto-bold", color: "white" }}
              onPress={() => {
                router.push("./menu");
              }}
            >
              Log In
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: "center",
              marginTop: 17,
              fontFamily: "roboto-regular",
              color: "#766F6F",
            }}
          >
            OR
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              gap: 15,
              marginTop: 15,
            }}
          >
            <Facebook />
            <Google />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const style = StyleSheet.create({
  border: {
    borderBottomColor: "#918B8B",
    borderBottomWidth: 1,
    paddingVertical: 14,
    marginTop: 26,
    color: "#766F6F",
    fontFamily: "roboto-regular",
  },
});
