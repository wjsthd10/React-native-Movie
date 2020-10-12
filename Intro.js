import React,{Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Intro extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.text}>Intro</Text>
                <Button title="button" onPress={()=>this.props.navigation.navigate('LoginStackNav')}></Button>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    root:{
        padding:16,
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
    }
})

