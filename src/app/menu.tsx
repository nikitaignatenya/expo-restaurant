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
import { useEffect, useState } from "react";
const background = require("../../src/assets/background.png");
import BurgerSVG from "../assets/components/burger";
import DrinkSVG from "../assets/components/drink";
import PizzaSVG from "../assets/components/pizza";
import ChickenBurger from "../assets/components/chickenBurger";
import DoubleCheesyBurger from "../assets/components/doubleCheesyBurger";
import ArrowLeft from "../assets/components/arrowLeft";
import ArrowRight from "../assets/components/arrowRight";

export default function MainScreen() {
  const [categories, setCategories] = useState([
    {
      title: "Burgers",
      img: BurgerSVG,
    },
    {
      title: "Pizza",
      img: PizzaSVG,
    },
    {
      title: "Drinks",
      img: DrinkSVG,
    },
  ]);
  const [burgers, setBurgers] = useState([
    {
      title: "Chicken Burger",
      img: ChickenBurger,
      price: "$3.5",
    },
    {
      title: "Double Cheesy Burger",
      img: DoubleCheesyBurger,
      price: "$3",
    },
    {
      title: "1",
      img: DoubleCheesyBurger,
      price: "$3",
    },
    {
      title: "2",
      img: DoubleCheesyBurger,
      price: "$3",
    },
    {
      title: "3",
      img: DoubleCheesyBurger,
      price: "$3",
    },
  ]);
  const [counterStart, setCounterStart] = useState(0);
  const [counterEnd, setCounterEnd] = useState(1);
  const [currentBurgers, setCurrentBurgers] = useState([
    burgers[counterStart],
    burgers[counterEnd],
  ]);
  useEffect(() => {
    setCurrentBurgers([burgers[counterStart], burgers[counterEnd]]);
  }, [counterStart, counterEnd]);

  return (
    <>
      <ImageBackground
        source={background}
        style={{ width: "100%", height: "100%", alignItems: "center" }}
      >
        <View
          style={{
            marginTop: 30,
            alignItems: "flex-start",
            width: "100%",
            paddingHorizontal: 17,
          }}
        >
          <Text
            style={{
              maxWidth: 187,
              fontFamily: "roboto-bold",
              color: "white",
              fontSize: 24,
            }}
          >
            Choose the FOOD you LOVE
          </Text>
          <TextInput
            placeholder="Search for a food item"
            style={style.exploreForm}
          />
          <Text
            style={{
              marginTop: 131,
              color: "#000000",
              fontFamily: "roboto-regular",
              fontSize: 18,
            }}
          >
            Categories
          </Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            {categories.map((el, i) => (
              <View
                key={i}
                style={{
                  paddingHorizontal: 38,
                  paddingVertical: 19,
                  boxShadow: "0px 4px 6px -1px #F13A21",
                  borderRadius: 10,
                }}
              >
                <TouchableOpacity>{<el.img />}</TouchableOpacity>
                <Text style={{ marginTop: 8 }}>{el.title}</Text>
              </View>
            ))}
          </View>
          <Text
            style={{
              marginTop: 25,
              fontFamily: "roboto-regular",
              fontSize: 17,
            }}
          >
            Burgers
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <ArrowLeft
              onPress={() => {
                counterEnd == 0
                  ? setCounterEnd(burgers.length - 1)
                  : setCounterEnd(counterEnd - 1);

                counterStart == 0
                  ? setCounterStart(burgers.length - 1)
                  : setCounterStart(counterStart - 1);
              }}
            />
            {currentBurgers.map((el, i) => (
              <TouchableOpacity
                key={i}
                style={{
                  padding: 10,
                  borderWidth: 1,
                  borderColor: "#918B8B",
                  borderRadius: 10,
                  height: 165,
                  width: 120,
                }}
              >
                {<el.img />}
                <Text
                  style={{
                    marginTop: 7,
                    fontFamily: "roboto-regular",
                    fontSize: 14,
                  }}
                >
                  {el.title}
                </Text>
                <Text
                  style={{
                    marginTop: 22,
                    fontFamily: "roboto-regular",
                    fontSize: 24,
                  }}
                >
                  {el.price}
                </Text>
              </TouchableOpacity>
            ))}
            <ArrowRight
              onPress={() => {
                counterStart == burgers.length - 1
                  ? setCounterStart(0)
                  : setCounterStart(counterStart + 1);

                counterEnd == burgers.length - 1
                  ? setCounterEnd(0)
                  : setCounterEnd(counterEnd + 1);
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const style = StyleSheet.create({
  exploreForm: {
    marginTop: 21,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "100%",
    backgroundColor: "#F8E0A0E0",
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "#FFFFFF",
    borderStyle: "solid",
    color: "#FFFFFF",
    fontFamily: "roboto-regular",
  },
});
