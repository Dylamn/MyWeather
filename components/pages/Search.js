import React from 'react';
import { Image, StyleSheet, TextInput, View, Button } from 'react-native';
import { colors, styles } from '../../Style';

export default class Search extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            city: ''
        }
    }

    static navigationOptions = {
        title: 'Rechercher une ville',
    };

    search () {
        this.props.navigation.navigate('Result', { city: this.state.city });
    }

    setCity (city) {
        this.setState({
            city
        })
    }

    render () {
        return (
            <View style={styles.container}>
                <TextInput
                    style={[styles.searchInput, { marginBottom: 20, paddingHorizontal: 10}]}
                    onChangeText={(text) => this.setCity(text)}
                    value={this.state.city}
                    placeholder="Your city"
                />
                <Button color={colors.ruby} onPress={() => this.search()} title="Rechercher" />
            </View>
        );
    }
}
