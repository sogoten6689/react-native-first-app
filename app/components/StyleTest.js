import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class StyleTest extends Component {
    render() {
        return (
            <View style={ styles.container }>
                <Text style={ styles.firstText}>First line</Text>
                <Text style={ styles.secondText}>Second line</Text>
                <Text style={ [styles.firstText, styles.secondText]}> first, Second line</Text>
                <Text style={ [styles.secondText, styles.firstText]}> first, Second line</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#28B463',
        borderWidth: 2,
        borderColor: '#1F618D',
    },
    firstText: {
        margin: 5,
        color: 'black',
    },
    secondText: {
        margin: 5,
        color: 'yellow',
        fontSize: 20,
        fontWeight: 'bold',
    }
});