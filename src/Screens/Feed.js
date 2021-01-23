/**
 * Feed for popular opinion app.
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    Button,
    Dimensions
} from 'react-native';

import Post from '../Components/Post'
import { FlatList } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class Feed extends React.Component {
    state = {
        feed: [{id:1, name:'Chandru'}, {id:2, name:'Arun'}],
    }

    componentDidMount() {
        
    }
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <View styles={{ flexDirection: 'column' }} >
                        <FlatList
                            data={this.state.feed}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => (<Post item={item} />)}
                            snapToAlignment={'start'}
                            decelerationRate={'fast'}
                            snapToInterval={windowHeight}
                        />
                    </View>
                </SafeAreaView>
            </>
        );
    }

    styles = StyleSheet.create({
        scrollView: {
            backgroundColor: '#Fff',
        },
    });
}

export default Feed;
