import React from 'react';
import { Image } from "react-native";
import { createStackNavigator } from 'react-navigation';
import { styles } from "../Style";
import SearchResult from './pages/SearchResult';
import Search from "./pages/Search";

const navigationOptions = {
    headerStyle: styles.header,
    headerTitleStyle: styles.headerTitle
};

const StackNavigator = createStackNavigator({
        Result: {
            screen: SearchResult,
            navigationOptions
        },
        Search: {
            screen: Search,
            navigationOptions
        },
    },
    {
        navigationOptions: {
            tabBarIcon: () => {
                return (
                    <Image source={require('../assets/navigation-icons/search.png')} />
                );
            }
        }
    });

export default StackNavigator;