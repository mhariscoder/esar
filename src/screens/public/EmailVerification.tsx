import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import OTPTextView from "react-native-otp-textinput";
import Back from "./../../assets/images/back.png";

export default function EmailVerificationScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.pageTitleContainer}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Image source={Back} style={styles.back} />
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
              width: 54,
              height: 45,
              borderRadius: 10,
              marginVertical: 10,
              color: '#fff'
            }}
        />

        <Text style={styles.note}>
            <Text style={styles.text}>If You Don't Received Code! </Text> 
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
    padding: 15,
    paddingTop: 50,
    flexGrow: 1,
  },
  pageTitleContainer: {
    position: 'relative',
    marginBottom: 15
  },
  pageTitle: {
    color: "#1689FE",
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 24,
    textAlign: 'center'
  },
  innercontainer: {
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  backBtn: {
    width: 25,
    height: 25,
    position: 'absolute',
    zIndex: 999
  },
  back: {
    width: 25,
    height: 25,
    resizeMode: "contain",
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
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    width: "90%",
    alignSelf: "center",
    lineHeight: 18,
    marginBottom: 5,
    fontWeight: 600
  },
  description: {
    color: "#fff",
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
    fontSize: 10,
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
    color: "#fff",
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
    fontSize: 12,
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
    flexDirection: 'row',
    marginBottom: 30,
  },
  text: {
    fontSize: 8,
    color: "#fff",
  },
  link: {

  },
  linkText: {
    fontSize: 8,
    color: "#2ea8ff",
    position: 'relative',
    top: 2
  }
});
