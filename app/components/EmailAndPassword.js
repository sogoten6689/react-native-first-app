import React from 'react';
import { Keyboard, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class EmailAndPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: '',
            typedPassword: '',
            typedDescrible: '',
        };
    }
    
    componentDidMount(){ 
        this.KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState(() => {
                return {typedText: 'Keyboard is shown'}
            });
        });
    }
    componentWillUnmount(){ 
        this.KeyboardDidHideListener =  Keyboard.addListener('keyboardDidHide', () => {
            this.setState(() => {
                return {typedText: 'Keyboard hide'}
            });
        });
    }

    render() {
        return (
            <View>
                <TextInput
                 style={{ height: 40, margin: 20, borderColor: 'red', borderWidth: 1, padding: 5}}
                 keyboardType="email-address"
                 placeholder="Enter your email"
                 onChangeText={
                     (text) => {
                         this.setState(
                             (previousState) => {
                                return {
                                    typedText: text
                                }
                            }
                         );
                     }
                 }
                />
                <Text style={{margin: 20}}>{this.state.typedText}</Text>
                <TextInput style={{
                    height: 40,
                    margin: 20,
                    padding: 5,
                    borderColor: 'blue',
                    borderWidth: 1,
                }}
                keyboardType='default'
                placeholder='Enter your Password'
                secureTextEntry={true}
                onChangeText={
                    (text) => {
                        this.setState (
                            (previousState) => {
                                return {
                                    typedPassword: text
                                }
                            }
                        );
                    }
                }
                />
                <TextInput style={{
                    height: 80,
                    margin: 20,
                    padding: 5,
                    borderColor: 'green',
                    borderWidth: 1,
                }}
                keyboardType='default'
                placeholder='Enter your Describle'
                secureTextEntry={true}
                editable={true}
                onSubmitEditing={Keyboard.dismiss}
                returnKeyType='google'
                onChangeText={
                    (text) => {
                        this.setState (
                            (previousState) => {
                                return {
                                    typedDescrible: text
                                }
                            }
                        );
                    }
                }
                multiline={true}
                />

            </View>
        );
    }
}