import React, { Component } from "react";
import { Platform, SectionList, StyleSheet, View, Text } from "react-native";
import { sectionListData } from '../data/sectionListData';

class SectionListItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'rgb(98, 197, 184)'
            }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'rgb(173, 252, 250)',
                    marginLeft: 20,
                    marginRight: 10,
                }}>{this.props.item.name}

                </Text>
                
                <Text style={{
                    fontSize: 16,
                    color: 'rgb(173, 252, 250)',
                    marginLeft: 20,
                    marginRight: 10,
                }}>{this.props.item.description}

                </Text>
            </View>
        )
    }
}

export default class BasicSectionList extends Component {
    render() {
        return (
            <View style={{
                flex: 1, marginTop: Platform.OS === 'ios' ? 43 : 0
            }}
            >
                <SectionList>
                    renderItem={({item, index}) => {
                        return (<SectionListItem item={item} index={index}
                        ></SectionListItem>)
                    }}
                    sections={sectionListData}

                </SectionList>


            </View>
        )
    }
}