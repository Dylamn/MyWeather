import React from 'react';
import { StyleSheet, StatusBar, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import MainNavigator from './components/MaterialTabNavigator';

const AppContainer = createAppContainer(MainNavigator);

class App extends React.Component {
    render () {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden={true} />
                <AppContainer />
            </View>
        );
    }
}

export default App;