import { Image, Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { Pressable } from "react-native";
import { styles } from "./Login.styles";
import { Mail } from "lucide-react-native";
import { colors } from "../../styles/globalVariables";

export function Login() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/background.jpg")}
      />
      <Image
        style={styles.logo}
        source={require("../../../assets/images/logo.png")}
      />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.loginCard}>
          <Text style={styles.title}>Login</Text>

          <TextInput
            leftIcon={<Mail size={22} color={colors.teal} />}
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
          />

          <Pressable style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </Pressable>

          <Text style={styles.exploreText}>
            Explore nossa loja e encontre sua essência
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
