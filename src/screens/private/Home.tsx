import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function DigitalDocumentsScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Back Button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={22} color="#fff" />
      </TouchableOpacity>

      {/* Logo */}
      {/* <View style={styles.logoWrapper}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Image source={require("../assets/flag.png")} style={styles.flag} />
      </View> */}

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

        <TouchableOpacity style={styles.card}>
          <MaterialIcon name="file-certificate-outline" size={24} color="#fff" />
          <Text style={styles.cardText}>ESA CERTIFICATION LETTER</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <MaterialIcon name="certificate" size={24} color="#fff" />
          <Text style={styles.cardText}>ESA CERTIFICATE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <MaterialIcon name="airplane" size={24} color="#fff" />
          <Text style={styles.cardText}>ESA TRAVEL LETTER</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <MaterialIcon name="home-city-outline" size={24} color="#fff" />
          <Text style={styles.cardText}>ESA ACCOMMODATION LETTER</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#031a44",
    padding: 20,
    paddingTop: 50,
    flexGrow: 1,
  },
  backBtn: {
    width: 32,
    height: 32,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0a2f63",
    marginBottom: 20,
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
    backgroundColor: "#062b62",
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
