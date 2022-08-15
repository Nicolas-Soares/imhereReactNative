import { Text, View, TouchableOpacity } from "react-native";
import { styles } from './styles';

type Props = {
  username: string,
  onRemove: () => void,
}

export default function User({ username, onRemove }: Props) {
  return (
    <View style={styles.masterView}>
      <View style={styles.viewContainter}>
        <Text style={styles.username}>
          { username }
        </Text>
      </View>

      <>
        <TouchableOpacity style={styles.button} onPress={onRemove}>
            <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
      </>
    </View>
  )
}