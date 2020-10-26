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
            newFoodName: "",
            newFoodDescription: ""
        }
    }
    showAddModal = () => {
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
                }}>New food's information</Text>
                <TextInput style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    margin: 20,
                    borderBottomWidth: 1,
                }}
                onChangeText={(text) => this.setState({ newFoodName: text})}
                placeholder="Nhap ten"
                value={this.state.newFoodName}
                />
                <TextInput style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    margin: 20,
                    borderBottomWidth: 1,
                }}
                onChangeText={(text) => this.setState({ newFoodDescription: text})}
                placeholder="Nhap mo ta"
                value={this.state.newFoodDescription}
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
                        if (this.state.newFoodDescription.length == 0 || this.state.newFoodName.length == 0) {
                            alert("Vui long nhap day du thong");
                            return;
                        }
                        const newKey = this.generateKey(10);
                        const newFood = {
                            key: newKey,
                            name: this.state.newFoodName,
                            imageUrl: "https://i0.wp.com/www.oakridge.in/wp-content/uploads/2020/02/Sample-jpg-image-500kb.jpg",
                            foodDescription: this.state.newFoodDescription
                        }
                        flatListData.push(newFood);
                        this.props.parentFlatList.refreshFlatList(newKey);
                        this.refs.myModal.close();
                    }}
                >Save</Button>
            </Modal>
        )
    }
}