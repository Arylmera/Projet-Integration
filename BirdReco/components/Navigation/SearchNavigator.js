import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import SearchView from "../View/search/SearchView";
import detailItem from '../View/details/detailItem';
import DetailOiseaux from '../View/details/detailOiseaux';

const Stack = createStackNavigator()

function SearchNavigator({navigation}) {
    return (
        <Stack.Navigator
            initialRouteName="SearchView"
            screenOptions={{
                headerStyle: {
                    backgroundColor: "rgba(126,211,33,1)"
                }
            }}
        >
            <Stack.Screen
                name="SearchView"
                component={SearchView}
                options={{
                    title: "Recherche"
                }}

            />
            <Stack.Screen
                name="DetailOiseaux"
                component={DetailOiseaux}
                options={{
                    title: "Detail"
                }}
            />
        </Stack.Navigator>
    )
}

export default SearchNavigator
