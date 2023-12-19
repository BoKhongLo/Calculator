// Screen.js
import React from "react";
import { View, Text, ScrollView} from "react-native";
import styles from "../Styles";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Screen = ({ content, output }) => {
  return (
    <View style={styles.containerScreen}>
      {/* Phần trên */}
      <View
        style={{
          flex: 0.7,
          flexDirection: "row",
          justifyContent: "flex-start",
          borderBottomWidth: 1
        }}
      >
        <ScrollView>
          <Text style={{ fontSize: hp("6%") }}>{content}</Text>
        </ScrollView>
      </View>


      {/* Phần dưới */}
      <View
        style={{ flex: 0.3, flexDirection: "row", justifyContent: "flex-end" }}
      >
        <Text style={{ fontSize: hp("4%") }}>{output}</Text>
      </View>
    </View>
  );
};

export default Screen;