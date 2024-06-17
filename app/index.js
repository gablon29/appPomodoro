import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";

const colors = ["#E39C59", "#59E3A2", "#59B9E3"];

const YourApp = () => {
  const [trabajando, setTrabajando] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Pomodoro</Text>
      <Text style={styles.textTitle}>{time}</Text>
      <Header
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        setTime={setTime}
      />
    </View>
  );
};

export default YourApp;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 40,
    color: "dark",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: "buttom",
    alignItems: "center",
  },
});
