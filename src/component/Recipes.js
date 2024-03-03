import { View, Text } from "react-native";
import React from "react";
import RecipesCard from "./RecipesCard";
import { useNavigation } from "@react-navigation/native";
import MasonryList from "@react-native-seoul/masonry-list";
import Loading from "./Loading";
import { heightPercentageToDP as hp} from "react-native-responsive-screen";

export default function Recipes({meals, categories}) {

    const navigation = useNavigation();

    return (
        <View className="mx-4 space-y-4">
            <Text
                style={{
                    fontSize: hp(2),
                }}
                className="font-semibold text-neutral-800"
            >
                {meals.length} Recipes
            </Text>

            <View>
                {
                    categories.length == 0 || meals.length == 0 ? (
                        <Loading size ="large" className="mt-20"/>
                    ) : (
                        <MasonryList 
                            data={meals} 
                            keyExtractor={(item) => item.idMeal}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            renderItem={({item, i}) => (
                                <RecipesCard item={item} index={i} navigation={navigation} /> 
                            )}
                            onEndReachedThreshold={0.1}
                        />                  
                    )}
            </View>     
        </View>
    );
}

