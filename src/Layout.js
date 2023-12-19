// Layout.js
import React, { useState } from "react";
import { View, Alert } from "react-native";
import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Screen from "./components/Screen";
import styles from './Styles';

const Layout = () => {
  const [content, setContent] = useState("");
  const [output, setOutput] = useState("");

  const updateScreenContent = (newContent) => {
    setContent(newContent);
  };

  const updateScreenOutput = (newOutput) => {
    setOutput(newOutput);
  };

  const handleEqualPress = (currentInput, onUpdateScreen, updateOutput) => {
    try {
      if (currentInput.trim() === "") {
        throw new Error("Empty input");
      }

      const result = eval(currentInput);
      setOutput(result.toString());
      onUpdateScreen(result.toString());
    } catch (error) {
      console.error(error);
      Alert.alert("Error", `Invalid input: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Screen content={content} output={output} />
      <Buttons
        onUpdateScreen={updateScreenContent}
        updateOutput={updateScreenOutput}
        currentContent={content}
        handleEqualPress={handleEqualPress}
      />
    </View>
  );
};
export default Layout;