import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import Timers from "../components/Timers";
import { Audio } from "expo-av";
import InputCom from "../components/InputCom";

const colors = ["#E39C59", "#59E3A2", "#59B9E3"];

const YourApp = () => {
  const [trabajando, setTrabajando] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalo = null;
    if (isActive) {
      intervalo = setInterval(() => {
        setTime(time - 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [isActive, time]);

  const handleSartStop = () => {
    setIsActive(!isActive);
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors[currentTime] }]}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" && 30,
        }}
      >
        <Text style={styles.textTitle}>Pomodoro</Text>
        <Header
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          setTime={setTime}
        />
        <TouchableOpacity
          style={styles.buttomStartStop}
          onPress={handleSartStop}
        >
          <Text style={{ fontSize: 40, color: "white", fontWeight: "bold" }}>
            {isActive === false ? "START" : "STOP"}
          </Text>
        </TouchableOpacity>
        <Timers time={time} />
      </View>
      <InputCom />
    </SafeAreaView>
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
    justifyContent: "buttom",
    alignItems: "center",
  },
  buttomStartStop: {
    marginTop: 15,
    backgroundColor: "#020202",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
