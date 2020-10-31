import React from 'react';
import { View, Platform, FlatList, Text, Image } from 'react-native';

import { horizontalFlatListData } from '../data/horizontalFlatListData';
import { horizontalStatus } from '../data/horizontalFlatListData';

import Icon from 'react-native-vector-icons/Ionicons';


class HorizontalFlatListItem extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 90,
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: 'grey',
                    margin: 4,
                }}>
                <Text 
                    style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white',
                        margin: 20
                    }}>
                    {this.props.item.hour}
                </Text>
                <Icon name={(Platform.OS === 'ios') ? this.props.item.status.ios : this.props.item.status.android }
                    size={30} color='white'></Icon>
                <Text 
                    style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: 'white',
                        margin: 20
                    }}>
                    {this.props.item.degress} ℉
                </Text>
            </View>
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
                    <View
                        style={{
                            position: 'absolute',
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                        }}
                    >
                        <Image 
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                width: null,
                                height: null,
                                backgroundColor: 'transparent',
                            }}
                            source={require('../../images/weather.jpg')}
                        ></Image>
                    </View>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'black',
                            backgroundColor: 'transparent',
                            margin: 10,
                        }}
                    >Weather forecast

                    </Text>
                    <View style={{ height: 150 }}>
                        <FlatList
                            style={{
                                backgroundColor: 'black',
                                opacity: 0.5,
                            }}
                            horizontal={true}
                            data={horizontalFlatListData}
                            renderItem={({item, index}) => {
                                return (
                                    <HorizontalFlatListItem item={item} index={index} parenFlatList={this}>

                                    </HorizontalFlatListItem>);
                            }}
                            keyExtractor={(item, index) => item.hour}
                        >

                        </FlatList>
                    </View>

            </View>
        )
    }

}