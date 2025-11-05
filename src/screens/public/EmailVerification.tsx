import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import Icon from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function EmailVerificationScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.pageTitleContainer}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={22} color="#fff" />
        </TouchableOpacity>

        {/* PAGE TITLE */}
        <Text style={styles.pageTitle}>EMAIL VERIFICATION</Text>
      </View>

      <View style={styles.innercontainer}>
        {/* Title */}
        <Text style={styles.title}>
          GET YOUR CODE
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          Please Enter The 4 Digit Code That Send To Your Email Address.
        </Text>

        <OTPTextView
            inputCount={4}
            textInputStyle={{
                backgroundColor: '#1689FE1F',
                borderBottomWidth: 0,
                width: 42,
                height: 42,
                borderRadius: 10,
                marginVertical: 10
            }}
        />

        <Text style={styles.note}>
            <Text>If You Don't Received Code! </Text> 
            <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('home')}>
                <Text style={styles.linkText}> Resend</Text>
            </TouchableOpacity>
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('home')}>
          <Text style={styles.btnText}> VERIFY AND PROCEED</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#14135F",
    padding: 20,
    paddingTop: 50,
    flexGrow: 1,
  },
  pageTitleContainer: {
    position: 'relative'
  },
  pageTitle: {
    color: "#1689FE",
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 24,
    textAlign: 'center'
  },
  innercontainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  backBtn: {
    width: 32,
    height: 32,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1689FE1F",
    marginBottom: 20,
    position: 'absolute',
    zIndex: 999
  },
  logoWrapper: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
  },
  flag: {
    width: 45,
    height: 45,
    position: "absolute",
    right: 60,
    top: 20,
    borderRadius: 50,
  },
  title: {
    color: "#d3e4ff",
    fontSize: 14,
    textAlign: "center",
    width: "90%",
    alignSelf: "center",
    lineHeight: 18,
    marginBottom: 5,
    fontWeight: 600
  },
  description: {
    color: "#d3e4ff",
    fontSize: 10,
    textAlign: "center",
    width: "90%",
    alignSelf: "center",
    lineHeight: 18,
    marginBottom: 15
  },
  mainButton: {
    backgroundColor: "#1b71d2",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 25,
  },
  mainButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 12,
  },
  cardList: {
    gap: 12,
  },
  card: {
    backgroundColor: "#1689FE1F",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    gap: 12,
  },
  cardActive: {
    backgroundColor: "#2ea8ff",
  },
  cardText: {
    flex: 1,
    color: "#fff",
    fontWeight: "600",
  },
  label: {
    color: "#9bb1d9",
    alignSelf: "flex-start",
    marginBottom: 5,
    fontSize: 12,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#1689FE1F",
    width: "100%",
    height: 45,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: "#fff",
    marginBottom: 30,
  },
  btn: {
    backgroundColor: "#2ea8ff",
    paddingVertical: 15,
    width: "75%",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 10
  },
  btnText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  note: {
    fontSize: 8,
    color: "#fff",
    marginBottom: 30
  },
  link: {

  },
  linkText: {
    fontSize: 8,
    color: "#2ea8ff",
    lineHeight: 7
  }
});
