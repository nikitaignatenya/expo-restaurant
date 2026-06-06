import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useState } from "react";
import PlusSVG from "./assets/components/Plus";
import SvgComponent from "./assets/components/ProfileImage";

export default function profile() {
  const [active, setActive] = useState(false);
  const scrollArr = [
    { title: "Learning Programming by 12PM", isActive: true },
    { title: "Learn how to cook by 1PM", isActive: false },
    { title: "Learn how to play at 2PM", isActive: false },
    { title: "Have lunch at 4PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
    { title: "Going to travel 6PM", isActive: false },
  ];
  return (
    <View>
      <View
        style={{
          backgroundColor: "#50C2C9",
          alignItems: "center",
          paddingTop: 133,
          paddingBottom: 16,
          gap: 16,
        }}
      >
        <SvgComponent />
        <Text style={style.title}>Welcome Jeegar goyani</Text>
      </View>
      <View style={{ paddingHorizontal: 25, marginTop: 32 }}>
        <View
          style={{
            alignSelf: "center",
            width: "100%",
            padding: 20,
            boxShadow: " 0px 4px 10px 0px #00000040",
          }}
        >
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <Text style={style.defaultText}>Daily Task</Text>
            <PlusSVG />
          </View>
          <ScrollView style={{ marginTop: 50, height: 309 }}>
            {scrollArr.map((el, i) => (
              <View
                key={i}
                style={{
                  flexDirection: "row",
                  marginTop: 14,
                }}
              >
                <TouchableOpacity>
                  <View
                    style={
                      el.isActive == true
                        ? {
                            width: 17,
                            height: 17,
                            backgroundColor: "#50C2C9",
                            borderWidth: 2,
                            marginRight: 9,
                          }
                        : {
                            width: 17,
                            height: 17,
                            backgroundColor: "#FFFFFF",
                            borderWidth: 2,
                            marginRight: 9,
                          }
                    }
                  ></View>
                </TouchableOpacity>
                <Text style={style.defaultText}>{el.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontFamily: "Poppins",
    fontWeight: 700,
    fontSize: 18,
    color: "#FFFFFF",
  },
  defaultText: {
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: 12,
    color: "#000000B2",
  },
});
