import { Pressable } from "react-native";
import { Text } from "react-native";
import { styles } from "./Button.styles";

export function Button({ title, onPress }) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
}