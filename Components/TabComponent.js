import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default TabComponent=(props)=>{

    // 탭 선택여부에 따른 글씨 색상 지정
    let color=props.selected ? '#292929' : '#929292';

    // 저 아래 만든 containerStyle객체의 borderColor값 지정
    containerStyle.borderColor=color;

    return(
        <TouchableOpacity style={containerStyle} onPress={props.onPress}>
            <Text style={{color:color}}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const containerStyle={
    flex:1,
    borderBottomWidth:1,
    paddingBottom:8,
    alignItems:'center',
    justifyContent:'center',
    borderColor:'#929292',
};