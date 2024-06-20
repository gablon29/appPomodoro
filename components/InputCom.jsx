import { View, Text, TextInput } from "react-native";
import { useState } from "react";

const InputCom = () => {
  const [mensaje, setMensaje] = useState("");
  console.log(mensaje);
  return (
    <View>
      <Text>Hola ingresa tu nombre</Text>
      <TextInput
        onChangeText={(newText) => setMensaje(newText)}
        defaultValue={mensaje}
      />
    </View>
  );
};
export default InputCom;
