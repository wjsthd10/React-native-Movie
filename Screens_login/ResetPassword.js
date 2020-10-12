import React,{Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class ResetPassword extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.text}>ResetPassword</Text>
                <Button title="login button"></Button>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1, padding:16, alignItems:"center", justifyContent:"center",
        backgroundColor:'#feffff'
    },
    text:{
        fontSize:20, fontWeight:"bold"
    }
})