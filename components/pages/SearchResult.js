import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { colors, styles } from "../../Style";

class SearchResult extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        }
    }

    static navigationOptions = ({ navigation }) => {
        return {
            title: `Météo / ${navigation.state.params.city}`,
        }
    };

    render () {
        if (this.state.report === null) {
            return (
                <ActivityIndicator color={colors.ruby} size="large" />
            );
        } else {
            return (
                <Text>Here's your results !</Text>
            );
        }
    }
}

export default SearchResult;