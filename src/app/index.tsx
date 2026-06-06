import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
const image = require("./assets/image.png");

export default function MainScreen() {
  const router = useRouter();
  return (
    <View style={style.container}>
      <Image source={image} style={style.image}></Image>
      <TouchableOpacity
        style={style.buttonStyle}
        onPress={() => router.push("/auth")}
      >
        <Text style={style.textButtonStyle}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F3",
    alignItems: "center",
    paddingHorizontal: 23,
    paddingBottom: 30,
  },
  image: {
    flex: 1,
    width: "100%",
    maxWidth: 254,
    resizeMode: "contain",
  },
  buttonStyle: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#50C2C9",
    borderRadius: 8,
    paddingVertical: 16,
    width: "100%",
    maxHeight: 60,
  },
  textButtonStyle: {
    fontFamily: "Poppins",
    fontWeight: "600",
    fontSize: 18,
    textAlign: "center",
    color: "#FFFFFF",
  },
});
