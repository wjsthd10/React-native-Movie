import React,{Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import InputComponent from '../Components/InputCompnent';
import ResetPassword from './ResetPassword';

export default class Login extends Component{
    render(){
        return(
            <View style={styles.root}>
                {/* 1. 로그인 콘텐츠 화면 */}
                <View style={styles.content}>
                    {/* 1.1 로고 */}
                    <Text style={styles.logo}>MOVIE App</Text>

                    {/* 1.2 이메일/패스워드 입력박스 : 나만의 Component를 생성하여 여러번사용한다. */}
                    {/* 두개가 별개의 값으로 지정되어야 한다면 props를 파라미터로 받을 수 있게한다. */}
                    <InputComponent placeholder="이메일" secureTextEntry={false}></InputComponent>
                    <InputComponent placeholder="비밀번호" secureTextEntry={true}></InputComponent>

                    {/* 1.3 비밀번호 재설정 버튼 : Text컴포넌트 onPress 동작함 */}
                    <Text onPress={()=>this.props.navigation.navigate('ResetPassword')} style={styles.resetPW}>비밀번호 재설정</Text>

                    {/* 1.4 로그인 버튼 */}
                    <View style={{width:'100%', marginBottom:24}}>
                        <Button title="로그인" color="#3796fe"></Button>
                    </View>

                    {/* 1.5 회원가입 */}
                    <Text style={styles.signUp}>
                        계정이 없으신가요? <Text style={styles.signUpLink} onPress={()=>this.props.navigation.navigate('SignUp')}>가입하기</Text>
                    </Text>
                    
                </View>
                {/* 2. Footer영역 */}
                <View style={styles.footer}>
                    <Text style={styles.footerCopyright}>MovieApp by song1027</Text>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    root:{
        flex:1, backgroundColor:'#feffff'
    },
    content:{
        flex:1, justifyContent:"center", 
        paddingHorizontal:32, alignItems:"center"
    },
    logo:{
        fontSize:40, fontWeight:"bold", color:'#292929',
        textAlign:"center", marginBottom:32
    },
    resetPW:{
        width:'100%',
        textAlign:"right",
        color:'#3796fe',
        marginRight:8,
        marginTop:8,
        marginBottom:16
    },
    signUp:{
        color:'#929292',
        textAlign:"center"
    },
    signUpLink:{
        color:'#3796fe'
    },
    footer:{
        borderTopWidth:1,        
        padding:8,
        borderTopColor:'#d3d3d3'
    },
    footerCopyright:{
        color:'#929292',
        textAlign:"center"
    }
})