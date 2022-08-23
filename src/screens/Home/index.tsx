import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert
} from "react-native";
import { styles } from "./styles";
import User from "../../components/User";
import { useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [userName, setUsername] = useState('')

  function addUser() {
    if (participants.includes(userName)) {
      return Alert.alert('User already exists')
    }

    setParticipants(prevState => [...prevState, userName])
    setUsername('')
  }

  function removeUser(username: string) {
    setParticipants(prevState => prevState.filter(user => user !== username))
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
          onChangeText={setUsername}
          value={userName}
        />

        <TouchableOpacity style={styles.button} onPress={addUser}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(participant) => participant}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <User key={item} username={item} onRemove={() => removeUser(item)} />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Nenhum participante foi adicionado ainda!
          </Text>
        )}
      />
    </View>
  );
}
