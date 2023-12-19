// Buttons.js
import React, { useState } from "react";
import { View, Image, TouchableOpacity, Alert } from "react-native";
import styles from "../Styles";

const Buttons = ({ onUpdateScreen, updateOutput, currentContent }) => {
  const [currentInput, setCurrentInput] = useState("");

  const handleButtonPress = (value) => {
    setCurrentInput((prevInput) => prevInput + value);
    onUpdateScreen(currentContent + value);
  };

  const handleEqualPress = () => {
    try {
      const result = eval(currentInput);
      const bieuthuc = currentInput;
      updateOutput(result.toString());
      onUpdateScreen(bieuthuc);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", `Invalid input: ${error.message}`);
    }
  };

  const handleClearPress = () => {
    setCurrentInput("");
    onUpdateScreen("");
    updateOutput("");
  };

  return (
    <View style={styles.containerButtons}>
      <View style={{flexDirection:'row'}}>
        <View>
          {/* Các nút số */}
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => handleButtonPress(7)}>
              <Image
                source={require("../../assets/numberImg/icons8-7-96.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleButtonPress(8)}>
              <Image
                source={require("../../assets/numberImg/icons8-8-96.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleButtonPress(9)}>
              <Image
                source={require("../../assets/numberImg/icons8-9-96.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => handleButtonPress(4)}>
              <Image
                source={require("../../assets/numberImg/icons8-4-96.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleButtonPress(5)}>
              <Image
                source={require("../../assets/numberImg/icons8-5-96.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleButtonPress(6)}>
              <Image
                source={require("../../assets/numberImg/icons8-6-96.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => handleButtonPress(1)}>
              <Image
                source={require("../../assets/numberImg/icons8-1-96.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleButtonPress(2)}>
              <Image
                source={require("../../assets/numberImg/icons8-2-96.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleButtonPress(3)}>
              <Image
                source={require("../../assets/numberImg/icons8-3-96.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            {/* Nút số 0 */}
            <TouchableOpacity onPress={() => handleButtonPress(0)}>
              <Image
                source={require("../../assets/numberImg/icons8-0-96.png")}
              />
            </TouchableOpacity>
            {/* Nút toán tử - */}
            <TouchableOpacity onPress={() => handleButtonPress("-")}>
              <Image source={require("../../assets/operator/subtract.png")} />
            </TouchableOpacity>
            {/* Nút toán tử / */}
            <TouchableOpacity onPress={() => handleButtonPress("/")}>
              <Image source={require("../../assets/operator/divide.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          {/* Nút Clear */}
          <TouchableOpacity onPress={handleClearPress}>
            <Image source={require("../../assets/operator/clear.png")} />
          </TouchableOpacity>
          {/* Nút toán tử * */}
          <TouchableOpacity onPress={() => handleButtonPress("*")}>
            <Image source={require("../../assets/operator/multiply.png")} />
          </TouchableOpacity>
          {/* Nút toán tử + */}
          <TouchableOpacity onPress={() => handleButtonPress("+")}>
            <Image source={require("../../assets/operator/plus.png")} />
          </TouchableOpacity>
          {/* Nút Equal */}
          <TouchableOpacity onPress={handleEqualPress}>
            <Image source={require("../../assets/operator/equal.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Buttons;
