/**
 * The way a post looks
 */
import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Post extends React.Component {
    componentDidMount() {
    }
    render() {
        const { item } = this.props
        //console.log(item.userName);
        return (
            <>
                <View style={{flex:1, alignItems:'center', height:windowHeight, backgroundColor:'#fff'}}>
                    
                 <Text style={{ color: '#000', fontSize:25, marginTop:20 }}>{item.name}</Text>
                      
                <View style={{flexDirection:'row', backgroundColor:'#fff',alignItems:'center' ,justifyContent:'center', marginTop:windowHeight-150}}>
                    <View>

                    <Image
                        style={{ height: 50, width: 50, marginLeft:0 }}
                        source={require('../../myLike.png')}
                    />
                    </View>
                    <View>

                    <Image
                        style={{height:100, width:100, marginLeft:50}}
                        source={require('../../comment.png')}
                    />
                    </View>
                    <View>
                    <Image
                        style={{ height: 50, width: 50, marginLeft:50 }}
                        source={require('../../myshare.png')}
                        />
                        </View>
                </View>

                <Image style={{ height: 200, width: windowWidth, height: windowWidth+100, position:'absolute', marginTop:100}} source={{ uri: item.image }}></Image>
                </View>
            </>
        )
    }
}
let ScreenHeight = Dimensions.get("screen").height;
let ScreenWidth = Dimensions.get("screen").width;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: ScreenHeight,
        flexDirection: 'row',
        backgroundColor: '#000'
    },
    avatarStyle: {
        width: 50,
        height: 50,
        position: 'absolute',
        marginTop: ScreenHeight / 5,
        marginBottom: 20
    },
    userName: {
        position: 'absolute',
        color: '#fff',
        fontSize: 18,
        marginTop: ScreenHeight / 5 + 55
    },
    questionPart: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: ScreenHeight / 5 + 85,
        height: 130
    },
    question: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '600',
        textAlign: 'center',
        width: ScreenWidth,
    },
    options: {
        flexDirection: 'row',
        position: 'absolute',
        marginTop: ScreenHeight / 2 + 5,
    },
    details: {
        position: 'absolute',
        flexDirection: 'row',
        flexDirection: 'row',
        width: ScreenWidth - 40,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: ScreenHeight - 180
    },
    column: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',

    },
})

export default Post
