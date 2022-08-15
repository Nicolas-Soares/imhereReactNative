import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert
} from "react-native";
import { styles } from "./styles";
import User from "../../components/User";

export default function Home() {
  const participants = [
    "Nicolas",
    "John",
    "Perro",
    "Cleiton",
    "Fernando",
    "Noronha",
    "Machenzie",
    "Foka Preto",
    "Torneira",
    "Altair",
    "Diamante",
    "José",
    "Josiney",
  ];

  function addUser() {
    console.log("first");
  }

  function removeUser(username: string) {
    Alert.alert('Remover', `Remover o participante ${username}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Participante removido!')
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
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
