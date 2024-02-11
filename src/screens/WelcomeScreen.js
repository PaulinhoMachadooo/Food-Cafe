import { View, Text, Image } from "react-native";
import React, { useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
     widthPercentageToDP as wp,
     heightPercentageToDP as hp,
 } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Animated from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function WelcomeScreen() {
    const animation = useRef(null);
    const navigation = useNavigation();
    return (
        <View className="bg-[#f64e32] flex-1 justify-center items-center space-y-10 relative">
            <Image
            source={require("../images/background.png")} 
            style={{
                position:"absolute",
                width: wp(100),
                height: hp(100),
                resizeMode: "cover",
            }}
        />

        <StatusBar style="light" />

            <View>
                <LottieView 
                    autoPlay
                    ref={animation}
                    style={{
                        width: wp(40),
                        height: hp(40),
                    }}
                    source={require("../animations/food-logo.json")}
                />
            </View>

            <View className="flex items-center space-y-2">
                    <Text className="text-white font-extrabold tracking-widest" style={{
                        fontSize: hp(5),
                    }}>
                        Food Café
                    </Text>

                    <Text className="text-white tracking-widest font-medium" style={{
                        fontSize: hp(2.5),
                    }}>
                        Explore some delicius Food</Text>
            </View>

            <View>
                <TouchableOpacity>
                    <Text> Get Started </Text>
                </TouchableOpacity>
            </View>
        </View >
    );
}