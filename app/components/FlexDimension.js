
import React from 'react';
import { View } from 'react-native';

export default class FlexDimension extends React.Component {
    render() {
        return (            
            <View style={{height: 600}}>
                <View style={ {flex: 40, backgroundColor: 'mediumaquamarine'} }></View>
                <View style={ {flex: 10, backgroundColor: 'blue'} }></View>
                <View style={ {height: 110, backgroundColor: 'darkslategrey'} }></View>
            </View>
        );
    }
}