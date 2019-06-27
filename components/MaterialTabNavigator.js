import { createMaterialTopTabNavigator } from "react-navigation";
import About from "./pages/About";
import StackNavigator from './StackNavigation';
import { colors, styles } from "../Style";

const MainNavigator = createMaterialTopTabNavigator({
    Search: { screen: StackNavigator },
    About: { screen: About },
}, {
    tabBarPosition: "bottom",
    tabBarOptions: {
        showLabel: false,
        showIcon: true,
        indicatorStyle: {
            backgroundColor: "#FFF"
        },
        style: styles.tabNavigation
    }
});

export default MainNavigator;