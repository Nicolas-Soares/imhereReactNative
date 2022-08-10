import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import User from '../../components/User'

export default function Home() {
  function addUser() {
   console.log("first");
  }

  return (
    <View style={styles.viewContainer}>
      <Text style={styles.firstText}>Evento</Text>

      <Text style={styles.secondText}>Dia 25 de Setembro, 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Digite o seu nome..."
          placeholderTextColor="#00ff9d58"
        />

        <TouchableOpacity style={styles.button} onPress={addUser}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <User />
      <User />
    </View>
  );
}
