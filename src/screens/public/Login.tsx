import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
// import LoginLogo from "./../../assets/images/login-logo.png";
import LogoBig from "./../../assets/images/big-logo.png";
// import LogoSmall from "./../../assets/images/logo-small.png";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [region, setRegion] = useState("");
  const [selectedValue, setSelectedValue] = useState('');

  const onLoginAction = () => {
    if(selectedValue != "") {
      navigation.navigate('home', {
        country: selectedValue
      })
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Logo */}
      <Image source={LogoBig} style={styles.logo} />

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
          placeholderTextColor="#fff"
          style={styles.input}
        />

        {/* Password */}
        <Text style={styles.label}>PASSWORD*</Text>
        <View style={styles.passwordBox}>
          <TextInput
            placeholder="***********"
            placeholderTextColor="#fff"
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
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={styles.picker}
            dropdownIconColor="#fff"
          >
            <Picker.Item style={styles.pickerItemText} label="Select Your Region" value="" />
            <Picker.Item style={styles.pickerItemText} label="USA" value="usa" />
            <Picker.Item style={styles.pickerItemText} label="EU" value="eu" />
            <Picker.Item style={styles.pickerItemText} label="UK" value="uk" />
          </Picker>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginBtn} onPress={() => onLoginAction()}>
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
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginHorizontal: 'auto'
  },
  slogan: {
    backgroundColor: "#1689FE",
    color: "#fff",
    fontWeight: "600",
    marginBottom: 10,
    fontSize: 16,
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
    backgroundColor: "#1689FE",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  memberBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 10,
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
    marginBottom: 5,
    fontSize: 12,
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
    fontSize: 12,
  },
  pickerContainer: {
    backgroundColor: "#1689FE1F",
    borderRadius: 8,
    width: "100%",
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 12,
    color: "#fff",
  },
  picker: {
    width: "100%",
    borderRadius: 8,
    color: "#fff",
    fontSize: 12,
  },
  pickerItemText: {
    fontSize: 12,
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
