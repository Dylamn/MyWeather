import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../../Style';

export default class About extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return (
                <Image source={require('../../assets/navigation-icons/user.png')} />
            );
        }
    };

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>A propos de MyWeather</Text>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porttitor mauris bibendum tellus
                    posuere eleifend. Etiam quis orci urna. Duis non justo velit. Mauris lacinia a justo in fermentum.
                    Mauris vehicula erat at rhoncus placerat. Orci varius natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                    per inceptos himenaeos. Ut a aliquam massa. Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Curabitur scelerisque urna facilisis aliquet vehicula. Quisque
                    placerat dui et rutrum semper. Nam ipsum nibh, mattis fermentum ultricies non, imperdiet non tellus.
                </Text>
            </View>
        );
    }
}