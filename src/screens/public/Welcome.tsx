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
import WelcomeImage from "./../../assets/images/welcome.jpg";

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
                    <Icon name="arrow-forward" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </ScrollView>
    </>;
}

const styles = StyleSheet.create({
    imageViewContainer: {
        backgroundColor: '#17135c',
        
    },
    imageView: {
        
    },
    image: {

    },
    buttonViewContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1E90FF', // Blue color
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 30,
        elevation: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        marginRight: 10
    }
});

export default Welcome;
