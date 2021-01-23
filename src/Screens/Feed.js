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
        feed: [{ id: 1, name: 'Gowtham', image:'https://www.linkpicture.com/q/IMG-20201022-WA0020.jpg', like:10 , comment:3, share:1}, 
            { id: 2, name: 'Arun', image: 'https://www.linkpicture.com/q/IMG-20201027-WA0010.jpg', like: 430, comment: 34, share: 21},
            { id: 3, name: 'Bala', image: 'https://linkpicture.com/q/IMG-20201027-WA0011.jpg', like: 230, comment: 23, share: 12}
        ],
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
