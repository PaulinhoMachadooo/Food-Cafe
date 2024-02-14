import { View, Text, ScrollView, SafeAreaView, Image} from "react-native";
import React from "react";
import {
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
}from "react-native-heroicons/outline";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp} from "react-native-responsive-screen";
import { TextInput } from "react-native";

export default function HomeScreen() {
    return (
        <View className="flex-1 bg-white">
            <StatusBar style="dark" />

            <SafeAreaView>
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom:50,
                    }}
                    className="space-y-6 pt-14"
                >
                    <View className="mx-4 flex-row justify-between items-center">
                        <AdjustmentsHorizontalIcon size={hp(4)} color={"gray"} />
                        <Image 
                            source={require("../images/avatar.png")}
                            style={{
                                width: hp(5),
                                height: hp(5),
                                resizeMode: "cover",
                            }}
                            className="round-full"
                        />
                    </View>

                    <View className="mx-4 space-y-1 mb-2">
                        <View>
                            <Text
                                style={{
                                    fontSize: hp(3.5),
                                }}
                                className="font-bold text-neutral-800"
                            >
                                Fast & Delicious</Text>
                        </View>
                            <Text style={{
                                fontSize: hp(3.5),
                            }} 
                            className="font-extrabold text-neutral-800"                           
                            >
                                Food You <Text className="text-[#f64e32]">Love</Text>
                            </Text>
                    </View>

                    <View className="mx-4 flex-row items-center border rounded-xl border-black p-[6px]">
                        <View className="bg-white rounded-full p-2">
                            <MagnifyingGlassIcon size={hp(2.5)} color={"gray"} 
                            strokeWidth={3}/>
                        </View>
                        <TextInput
                             placeholder="Search Your Favorite Food"
                             placeholderTextColor={"gray"}
                             style={{
                                    fontSize: hp(1.7),
                             }}
                             className="flex-1 text-base mb-1 pl-1 tracking-widest" 
                         />
                    </View>
                   
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}