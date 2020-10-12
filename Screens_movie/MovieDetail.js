import React,{Component} from 'react';
import {View, Text, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import BigCatalog from '../Components_movie/BigCatalog';

export default class MovieDetail extends Component{

    constructor(){
        super();
        this.state={
            data:null,// 영화정보들을 저장할 변수
        }
    }

    render(){
        return this.state.data?
        (
            <View>
                <ScrollView style={styles.root}>
                    <BigCatalog movie={this.state.data}></BigCatalog>

                    {/* 영화정보출력 영역 */}
                    <View>
                        <Text style={styles.title}>영화정보</Text>
                        <View style={styles.infoContainer}>
                            <Text>{this.state.data.runtime}분</Text>
                            <Text>평점 : {this.state.data.rating}</Text>
                            <Text>좋아요 : {this.state.data.like_count}</Text>
                        </View>
                    </View>

                    {/* 줄거리출력 영역 */}
                    <View>
                        <Text style={styles.title}>줄거리</Text>
                        <Text style={style.description}>{this.state.data.description_full}</Text>
                    </View>

                    {/* 배우 캐스팅 정보출력 : CastList.js */}

                    {/* 스크린샷 이미지들 출력화면 : ScreenShotList.js */}

                </ScrollView>
            </View>
        ):// 3항연산자처럼작성
        (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size='large' color='#E70915'></ActivityIndicator>
            </View>
        );
    }

    loadData=()=>{
        const {id}=this.props.route.params;

        fetch('https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true')
        .then(response=>response.json())
        .then(json=>this.setState({data:json.data.movie}));
    }

    componentDidMount(){
        this.loadData();
    }
}

const styles=StyleSheet.create({
    root:{flex:1},
    loadingContainer:{flex:1,justifyContent:"center", alignItems:"center"},
    title:{
        fontSize:16,
        fontWeight:"bold",
        paddingTop:24,
        paddingRight:16,
        paddingBottom:8,
        paddingLeft:16,
    },
    infoContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:16,
        paddingRight:16,

    },
    description:{
        paddingLeft:16,
        paddingRight:16
    }
})