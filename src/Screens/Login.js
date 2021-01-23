import React from 'react';
import { View, Text , TextInput, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name:'',
            email:'',
            pass:''
        }
    }
    render() {
        return (
            <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>

                <TextInput style={styles.questionInput} textAlign='center' placeholder="Email"
                    onChangeText={(text) => this.setState({ email: text })} />
                <TextInput style={styles.questionInput} textAlign='center' placeholder="Password"
                    onChangeText={(text) => this.setState({ pass: text })} />
                <TouchableOpacity style={styles.buttonBack}>
                    <Text style={styles.button}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonBack} onPress={()=>{this.props.navigation.navigate('Sign')}}>
                    <Text style={styles.button}>SignUp</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    questionInput: {
        marginLeft:20,
        marginRight:20,
        marginTop:20,
        width: windowWidth-20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        fontSize: 20
    },
    buttonBack: {
        marginTop:20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EF820D',
        borderRadius: 15,
        width: 150,
    }, 
    button: {
        padding:10,
        color: '#fff',
        fontSize: 24,
        fontFamily: 'BebasNeue-Regular'
    },
})