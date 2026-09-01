import { Image, Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { styles } from "./Login.styles";
import { useState } from "react";
import { Button } from "../../components/Button/Button";
import { Alert } from "react-native";
import { Input } from "../../components/Input/Input";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
        if (!email.trim() || !senha.trim()) {
            Alert.alert("Campos incompletos", "Por favor, preencha todos os campos do formulário.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            Alert.alert("E-mail inválido", "Por favor, insira um e-mail válido.");
            return;
        }

        if (senha.length < 6) {
            Alert.alert("Senha inválida", "A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        Alert.alert("Login realizado", "Login realizado com sucesso!", [{
            text: "Ir para a página inicial",
            onPress: () => navigation.navigate("Home"),
        }
        ]);
    }

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

          <Input
            value={email}
            onChangeText={setEmail}
            label="E-mail"
            placeholder="E-mail"
            keyboardType="email-address"
          />

          <Input
            value={senha}
            onChangeText={setSenha}
            label="Senha"
            placeholder="Senha"
            secureTextEntry={true}
          />

          <Button title="Entrar" onPress={handleLogin} />

          <Text style={styles.exploreText}>
            Explore nossa loja e encontre sua essência
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
