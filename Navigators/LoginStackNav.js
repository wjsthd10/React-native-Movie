import React from 'react';

// 이 문서는 오로지 Navigator만 하면 되므로..
// 함수형(stateless) 컴포넌트로 제작

import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'

// StackNavigator가 사용할 스크린 컴포넌트 import
import Login from '../Screens_login/Login';
import SignUp from '../Screens_login/SignUp';
import ResetPassword from '../Screens_login/ResetPassword';

const Stack=createStackNavigator();

export default LoginStackNav=()=>{
    return(        
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUp}></Stack.Screen>
            <Stack.Screen name="ResetPassword" component={ResetPassword}></Stack.Screen>
        </Stack.Navigator>
        
    );
}
