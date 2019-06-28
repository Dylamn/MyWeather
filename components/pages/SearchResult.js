import React from 'react';
import { ActivityIndicator, FlatList, Text } from 'react-native';
import axios from 'axios';
import { colors, styles } from "../../Style";
import { API_KEY } from 'react-native-dotenv';

class SearchResult extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            city: "Paris",
            report: null
        };

        this.fetchWeather();
    }

    _keyExtractor = (item) => item.id.toString();

    static navigationOptions = ({ navigation }) => {
        return {
            // title: `Météo / ${navigation.state.params.city}`,
            title: `Météo / Paris`
        }
    };

    fetchWeather () {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${API_KEY}`)
            .then((response) => {
                console.log(response.data);
                this.setState({ report: response.data});
            });
    }

    render () {
        if (this.state.report === null) {
            return (
                <ActivityIndicator color={colors.ruby} size="large" />
            );
        } else {
            return (
                <FlatList
                    keyExtractor={this._keyExtractor}
                    data={[this.state.report]}
                    renderItem={({item}) => <Text>{item.name}</Text>}
                />
            );
        }
    }
}

export default SearchResult;