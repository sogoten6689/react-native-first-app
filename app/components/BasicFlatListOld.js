import React from 'react';
import { Text, StyleSheet, View, Image, Platform, TouchableHighlight } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import flatListData from '../data/flatListData';
import Swipeout from 'react-native-swipeout'
import { Alert } from 'react-native';
import AddModal from './AddModal';
import EditModal from './EditModal';
import { getFoodsFromServer } from '../../networking/Server';

class FlatListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0
        };
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1,
            };
        });
    }
    render() {
        const swipeSetting = {
            autoClose: true,
            onClose: ( secId, rowId, direction ) => {
                if(this.state.activeRowKey != null){
                    this.setState({activeRowKey: null});
                }
            },
            onOpen: ( secId, rowId, direction ) => {
                this.setState({ activeRowKey: this.props.item.key});
            },
            right: [
                {
                    onPress: () => {
                        // Alert.alert("Edit");
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this);
                    },
                    text: 'Sửa', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey;
                        Alert.alert(
                            'Alert',
                            'Are you sure ?',
                            [
                                {text: 'No', onPress: () => console.log("Cance Pressed"), style: 'cancel'},
                                {text: 'Yes', onPress: () => {
                                    flatListData.splice(this.props.index, 1);
                                    this.props.parentFlatList.refreshFlatList(deletingRow);
                                }},
                            ],
                            { cancelable: true}
                        );
                    },
                    text: 'Xóa', type: 'delete'

                }
            ]
        };

        return (
            <Swipeout {...swipeSetting}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
                }}>
                    <Image
                        source={{uri: this.props.item.imageUrl == null ? 'https://i0.wp.com/www.oakridge.in/wp-content/uploads/2020/02/Sample-jpg-image-500kb.jpg' : this.props.item.imageUrl}}
                        style={{width: 100, height: 100, margin: 5}}
                    ></Image>
                    <Text style={styles.flatListItem}>{this.props.item.name}</Text>
                    <Text style={styles.flatListItem}>{this.props.item.foodDescription}</Text>
                </View>
            </Swipeout>
        ) 
    }
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
});

export default class BasicFlatList extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    refreshFlatList = ( deletedKey ) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: deletedKey
            }
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd() {
        this.refs.addModal.showAddModal();
    }
    render () {
        return (
            <View style={{flex: 1, marginTop: Platform.OS  === 'ios' ? 43 : 0}}>
                <View style={{backgroundColor: 'tomato', height: 64, justifyContent: 'flex-end', flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableHighlight style={{marginRight: 10}} underlayColor='tomato'
                        onPress={this._onPressAdd}
                    >
                        <Image style={{width: 35, height: 35}} source={{uri: 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-add-icon.png'}}/>
                    </TouchableHighlight>
                </View>
                <FlatList 
                    ref={"flatList"}
                    data={flatListData}
                    // data={this.state.foodsFromServer}
                    renderItem={({item, index}) => {
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}></FlatListItem>
                        )
                    }}
                ></FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}>
                     
                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>
                     
                </EditModal>
            </View>
        );
    }
}