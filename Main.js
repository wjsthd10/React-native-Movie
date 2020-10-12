import React,{Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// 최상위 StackNavigator에서 보여줄 스크린(화면 컴포넌트)들 import
import Intro from './Intro';
import LoginStackNav from './Navigators/LoginStackNav';
import MainDrawerNav from './Navigators/MainDrawerNav';

// 앱 전체화면을 전환하는 Stack Navigator 객체 생성
const RootStack=createStackNavigator();

export default class Main extends Component{

    render(){

        return(
            <NavigationContainer>


                <RootStack.Navigator screenOptions={{headerShown:false}}>
                    <RootStack.Screen name="Intro" component={Intro}></RootStack.Screen>
                    <RootStack.Screen name="LoginStackNav" component={LoginStackNav}></RootStack.Screen>
                    <RootStack.Screen name="MainDrawerNav" component={MainDrawerNav}></RootStack.Screen>
                </RootStack.Navigator>

                

            </NavigationContainer>
        );// return.....

    }// render Method....

}// Main class

const styles=StyleSheet.create({
    root:{
        
    }
})