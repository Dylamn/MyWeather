import { StyleSheet } from 'react-native';

export const colors = {
    ruby: "#A2273C"
};

export const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    },
    searchInput: {
        padding: 5,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    tabNavigation: {
        backgroundColor: colors.ruby,
        borderTopWidth: 1,
        borderColor: "#3F101C"
    },
    headerTitle: {
        color: "#FFF"
    },
    header: {
        backgroundColor: colors.ruby
    }
});