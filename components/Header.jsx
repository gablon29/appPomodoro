import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"];

const Header = ({ setTime, setCurrentTime, currentTime }) => {
  const handlePress = (index) => {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  };

  return (
    <View style={styles.touchBarStyle}>
      {options.map((opcion, index) => (
        <TouchableOpacity
          onPress={() => handlePress(index)}
          key={index}
          style={[
            styles.optionStyle,
            currentTime !== index && { borderColor: "transparent" },
          ]}
        >
          <Text style={{ fontWeight: "bold" }}>{opcion}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  touchBarStyle: {
    flexDirection: "row",
    marginTop: 10,
    width: "100%",
    justifyContent: "space-around",
  },
  optionStyle: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "red",
    borderRadius: 10,
  },
});
