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
        <ScrollView keyboardShouldPersistTaps="handled">
            <Image source={WelcomeImage} style={styles.logo} />
        </ScrollView>
    </>;
}

const styles = StyleSheet.create({
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: screenWidth,
        height: screenHeight,
        objectFit: 'cover',
    },
    titleContainer: {
        alignItems: 'center',
        marginVertical: 25
    },
    title: {
        fontSize: 22,
        color: colors.pink
    },
    cardContainer: {
        marginTop: 15
    },
    imageBuddyContainer: {
        alignItems: 'center'
    },
    imageBuddy: {
        width: screenWidth * 0.5,
        height: 300,
        objectFit: 'contain',
    },
    buttonBuddy: {
        alignSelf: 'center',
        // width: screenWidth * 0.85,
        width: '100%',
        marginVertical: 50
    },
    langBuddy: {
        alignSelf: 'center',
    }
});

export default Welcome;
