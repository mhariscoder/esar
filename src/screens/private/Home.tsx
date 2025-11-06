import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import LoginLogo from "./../../assets/images/login-logo.png";
import LogoUSA from "./../../assets/images/logo-usa.png";
import Back from "./../../assets/images/back.png";

export default function DigitalDocumentsScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.pageTitleContainer}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Image source={Back} style={styles.back} />
        </TouchableOpacity>

        {/* Logo */}
        <Image source={LogoUSA} style={styles.logo} />
      </View>
      

      {/* Logo */}
      {/* <View style={styles.logoWrapper}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Image source={require("../assets/flag.png")} style={styles.flag} />
      </View> */}

      <View style={styles.innercontainer}>
        {/* Description */}
        <Text style={styles.description}>
          Easily access your digital ID card, certification letter, 
          and certificate.
        </Text>

        {/* Documents Button */}
        <TouchableOpacity style={styles.mainButton}>
          <Text style={styles.mainButtonText}>DIGITAL DOCUMENTS</Text>
        </TouchableOpacity>

        {/* Document Buttons */}
        <View style={styles.cardList}>

          {/* Active Card */}
          <TouchableOpacity style={[styles.card, styles.cardActive]}>
            <MaterialIcon name="card-account-details-outline" size={24} color="#fff" />
            <Text style={styles.cardText}>ESA ID CARD</Text>
            <Icon name="chevron-right" size={20} color="#fff" />
          </TouchableOpacity>

        </View>
        
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#14135F",
    flexGrow: 1,
    padding: 20,
  },
  innercontainer: {
    paddingVertical: 15,
  },
  pageTitleContainer: {
    position: 'relative',
    // marginBottom: 15
  },
  backBtn: {
    width: 25,
    height: 25,
    position: 'absolute',
    zIndex: 999,
  },
  back: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginHorizontal: 'auto'
  },
  // logo: {
  //   width: 150,
  //   height: 150,
  //   resizeMode: "contain",
  // },
  flag: {
    width: 45,
    height: 45,
    position: "absolute",
    right: 60,
    top: 20,
    borderRadius: 50,
  },
  description: {
    color: "#d3e4ff",
    fontSize: 12,
    textAlign: "center",
    width: "90%",
    alignSelf: "center",
    lineHeight: 18,
    marginBottom: 18,
  },
  mainButton: {
    backgroundColor: "#1689FE",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
    alignSelf: "center",
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
});
