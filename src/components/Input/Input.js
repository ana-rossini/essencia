import { TextInput } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import { colors } from "../../styles/globalVariables";
import { styles } from "./Input.styles";

export function Input({label, placeholder, value, onChangeText, secureTextEntry, keyboardType}) {
    return(
        <View style={styles.inputContainer}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor={colors.placeholder || '#'}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCapitalize="none"
            />
        </View>
    )
}