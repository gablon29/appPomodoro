import { Text, View, StyleSheet } from "react-native";

const Timers = ({ time }) => {
  const timerFormatt = `${Math.floor(time / 60)
    .toString()
    .padStart(2, "0")}:${(time % 60).toString().padStart(2, "0")}`;
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 100 }}>{timerFormatt}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    margin: 5,
    borderRadius: 10,
  },
});
export default Timers;
