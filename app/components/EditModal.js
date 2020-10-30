import React, { Component } from 'react';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import flatListData from '../data/flatListData';
import { Dimensions, Platform, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

var screen = Dimensions.get('window');

export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodName: "",
            foodDescription: ""
        }
    }
    showEditModal = (editingFood, flatListItem) => {
        console.log(`editingFood = ${JSON.stringify(editingFood)}`)
        this.setState({
            key: editingFood.key,
            foodName: editingFood.name,
            foodDescription: editingFood.foodDescription,
            flatListItem: flatListItem
        });
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({length: numberOfCharacters});
    }
    render() {
        return (
            <Modal
            ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 280
                }}
                position= 'center'
                backdrop={true}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40,
                }}>Food's information</Text>
                <TextInput style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    margin: 20,
                    borderBottomWidth: 1,
                }}
                onChangeText={(text) => this.setState({ foodName: text})}
                placeholder="Nhap ten"
                value={this.state.foodName}
                />
                <TextInput style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    margin: 20,
                    borderBottomWidth: 1,
                }}
                onChangeText={(text) => this.setState({ foodDescription: text})}
                placeholder="Nhap mo ta"
                value={this.state.foodDescription}
                />
                <Button
                    style={{fontSize: 18, color: 'white'}}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                        if (this.state.foodDescription.length == 0 || this.state.foodName.length == 0) {
                            alert("Vui long nhap day du thong");
                            return;
                        }
                        var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        if (foundIndex < 0 ){
                            return;
                        }
                        flatListData[foundIndex].name = this.state.foodName;
                        flatListData[foundIndex].foodDescription = this.state.foodDescription;
                        this.state.flatListItem.refreshFlatListItem();
                        this.refs.myModal.close();
                    }}
                >Save</Button>
            </Modal>
        )
    }
}