import React from 'react';
import { View, Text} from 'react-native';

export default class FlexDirection extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', margin: 15}}>
                <Text style={{ flex:33, backgroundColor: 'red', marginBottom:15}}></Text>
                <Text style={{ flex:33, backgroundColor: 'yellow', marginBottom: 15}}></Text>
                <Text style={{ flex:33, backgroundColor: 'blue'}}></Text>
            </View>
        );
    } 
}