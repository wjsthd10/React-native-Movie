import React from 'react';
import {TextInput, StyleSheet,View} from 'react-native';

// 단순 스타일링된 TextInput을 만드는 것이므로 
// state는 사용할 필요 없음... 그렇기에... 간단한 함수형 컴포넌트로 제작
export default InputComponent=(props)=>{
    // Component를 사용하지 않고 함수로 리턴해줄떄는 
    // this.props.placeholder를 사용할 수 없기 때문에 함수에 파라미터로 객체를 받아온다.
    return(
        <View style={styles.container}>
            <TextInput 
                style={styles.input} 
                placeholder={props.placeholder}
                secureTextEntry={props.secureTextEntry}
                selectionColor="#226688"
                autoCapitalize="none"// 글씨 대문자로 변경 지정
                autoCorrect={false}// 글씨 자동교정
                placeholderTextColor='#c3c2c8'
                onChangeText={props.onChangeText}// 글씨 변경할때 마다 실행된 메소드 지정 - property로 전달받음
                ></TextInput>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:"100%",
        height:40,
        borderWidth:1,
        paddingHorizontal:16,
        borderColor:'#d3d3d3',
        borderRadius:4,
        backgroundColor:'#fafafa',
        marginVertical:8
    },
    input:{
        flex:1,
        color:'#292929'
    }
})