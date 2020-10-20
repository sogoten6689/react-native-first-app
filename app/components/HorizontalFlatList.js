import React from 'react';
import { View, Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

class HorizontalFlatListItem extends React.Component {
    render() {
        return (
            <View></View>
        );
    }

}

export default class HorizontalFlatList extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: Platform.OS === 'ios' ? 34 : 0
                }}>
                    <View style={{ height: 150 }}>
                        <FlatList
                            style={{
                                backgroundColor: 'black',
                                opacity: 0.5,
                            }}
                            horizontal={true}
                            renderItem={({item, index}) => {
                                return (
                                    <HorizontalFlatListItem item={item} index={index} parenFlatList={this}>

                                    </HorizontalFlatListItem>);
                            }}
                        >

                        </FlatList>
                    </View>

            </View>
        )
    }

}