import { Text, View, TouchableOpacity } from "react-native";
import { styles } from './styles';

export default function User() {
  return (
    <View style={styles.masterView}>
      <View style={styles.viewContainter}>
        <Text style={styles.username}>
          Nicolas Conterato Soares
        </Text>
      </View>

      <>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
      </>
    </View>
  )
}