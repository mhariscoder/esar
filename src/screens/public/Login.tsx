import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import LoginLogo from "./../../assets/images/login-logo.png";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [region, setRegion] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Logo */}
      <Image source={LoginLogo} style={styles.logo} />

      <Text style={styles.slogan}>
        "COMPASSION, COMFORT, CONNECTION"
      </Text>

      <View style={styles.innercontainer}>
        <Text style={styles.description}>
          Welcome to the Emotional Support Animals Registry! Your trusted platform for managing your ESA documentation and membership. Easily access your digital ID card, certification letter, and certificate, update your details, or shop for replacement documents. We're here to support you and your emotional support animal every step of the way!
        </Text>

        <TouchableOpacity style={styles.memberBtn}>
          <Text style={styles.memberBtnText}>MEMBER LOGIN</Text>
        </TouchableOpacity>

        {/* Registration */}
        <Text style={styles.label}>REGISTRATION*</Text>
        <TextInput
          placeholder="example@example.com"
          placeholderTextColor="#9bb1d9"
          style={styles.input}
        />

        {/* Password */}
        <Text style={styles.label}>PASSWORD*</Text>
        <View style={styles.passwordBox}>
          <TextInput
            placeholder="***********"
            placeholderTextColor="#9bb1d9"
            secureTextEntry={!passwordVisible}
            style={styles.inputPassword}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            {
              passwordVisible ?
                <Image style={[styles.eyeIcon]} source={require('./../../assets/images/close-eye.png')} /> :
                <Image style={[styles.eyeIcon]} source={require('./../../assets/images/open-eye.png')} />
            }
          </TouchableOpacity>
        </View>

        {/* Region */}
        <Text style={styles.label}>REGION*</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={region}
            onValueChange={(value) => setRegion(value)}
            dropdownIconColor="#9bb1d9"
            style={styles.dropdown}
          >
            <Picker.Item label="Select Your Region" value="" />
            <Picker.Item label="USA" value="usa" />
            <Picker.Item label="Canada" value="canada" />
            <Picker.Item label="UK" value="uk" />
          </Picker>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('home')}>
          <Text style={styles.loginBtnText}>LOG IN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('forgot-password')}>
          <Text style={styles.forgotText}>FORGOT PASSWORD</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('email-verification')}>
          <Text style={styles.forgotText}>EMAIL VERIFICATION</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('reset-your-password')}>
          <Text style={styles.forgotText}>RESET YOUR PASSWORD</Text>
        </TouchableOpacity>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#14135F",
  },
  innercontainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: "contain",
    marginTop: 30
  },
  slogan: {
    backgroundColor: "#45b6ff",
    color: "#fff",
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 10,
    fontSize: 14,
    textAlign: "center",
    padding: 10
  },
  description: {
    color: "#d3e4ff",
    fontSize: 10,
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 18,
  },
  memberBtn: {
    backgroundColor: "#2ea8ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginBottom: 20,
  },
  memberBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
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
    marginBottom: 5,
  },
  passwordBox: {
    backgroundColor: "#1689FE1F",
    width: "100%",
    height: 45,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputPassword: {
    flex: 1,
    color: "#fff",
  },
  dropdownContainer: {
    backgroundColor: "#1689FE1F",
    borderRadius: 8,
    width: "100%",
    marginBottom: 20,
    fontSize: 14
  },
  dropdown: {
    color: "#fff",
    width: "100%",
    fontSize: 14
  },
  loginBtn: {
    backgroundColor: "#2ea8ff",
    paddingVertical: 15,
    width: "50%",
    alignItems: "center",
    borderRadius: 30,
    marginBottom: 10
  },
  loginBtnText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
  forgotText: {
    color: "#8fbaff",
    marginTop: 5,
    fontSize: 12,
  },
  eyeIcon: {
    paddingHorizontal: 8,
    width: 20,
    resizeMode: 'contain'
  },
});
