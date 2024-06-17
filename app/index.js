import React, { useState } from "react";
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

const colors = ["#E39C59", "#59E3A2", "#59B9E3"];

const YourApp = () => {
  const [trabajando, setTrabajando] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "LONG");
  const [isActive, setIsActive] = useState(false);

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
