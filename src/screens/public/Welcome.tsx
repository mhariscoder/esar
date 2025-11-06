/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import BuddyContainer from '../../components/BuddyContainer';
import { colors, screenHeight, screenWidth } from '../../utils/Constants';
import BuddyCard from '../../components/BuddyCard';
import BuddyButton from '../../components/BuddyButton';
import BuddyLang from '../../components/BuddyLang';
import { useNavigation } from '@react-navigation/native';
// import WelcomeImage from "./../../assets/images/welcome.jpg";
import WelcomeImage from "./../../assets/images/big-logo.png";
import SlidearrowImage from "./../../assets/images/slide-arrow.png";

function Welcome(): React.JSX.Element {
    const navigation = useNavigation();

    return <>
        <ScrollView style={styles.imageViewContainer} keyboardShouldPersistTaps="handled">
            <View style={styles.imageView}>
                <Image source={WelcomeImage} style={styles.image} />
            </View>

            <View style={styles.buttonViewContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
                    <Text style={styles.buttonText}>GET STARTED</Text>
                    <View style={styles.line}></View>
                    <Image source={SlidearrowImage} style={styles.slidearrowImage} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    </>;
}

const styles = StyleSheet.create({
    imageViewContainer: {
        backgroundColor: '#17135c',
    },
    image: {
        width: screenWidth,
    },
    buttonViewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E90FF', // Blue color
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
        paddingLeft: 15,
        borderRadius: 30,
        elevation: 5,
        width: "100%"
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    slidearrowImage: {
        width: 50,
        height: 50,
        objectFit: 'contain',
        marginLeft: 'auto',

    },
    line: {
        backgroundColor: '#17135c',
        height: 1,
        flexGrow: 1,
        marginHorizontal: 10
    }
});

export default Welcome;
