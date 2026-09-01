import { ScrollView, TextInput, Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Register.styles";
import { Text } from "react-native";
import { Alert } from "react-native";
import { useState } from "react";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/Button";

export function Register() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  function handleCadastro() {
    if (!email.trim() || !senha.trim() || !confirmarSenha.trim()) {
      Alert.alert(
        "Campos incompletos",
        "Por favor, preencha todos os campos do formulário.",
      );
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      Alert.alert("E-mail inválido", "Por favor, insira um e-mail válido.");
      return;
    }

    if (senha.length < 6) {
      Alert.alert(
        "Senha inválida",
        "A senha deve ter pelo menos 6 caracteres.",
      );
      return;
    }

    Alert.alert("Cadastro realizado", "Cadastro realizado com sucesso!", [
      {
        text: "Ir para a página inicial",
        onPress: () => navigation.navigate("Home"),
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/images/background.jpg")}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          style={styles.logo}
          source={require("../../../assets/images/logo.png")}
        />
        
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.loginCard}>
            <Text style={styles.title}>Cadastrar-se</Text>

            <Input
              label="Nome de usuário"
              value={email}
              onChangeText={setEmail}
              placeholder="Nome de usuário"
            />
            <Input
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="Email"
              keyboardType="email-address"
            />
            <Input
              label="Senha"
              value={senha}
              onChangeText={setSenha}
              placeholder="Senha"
              secureTextEntry={true}
            />
            <Input
              label="Confirmar Senha"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              placeholder="Confirmar Senha"
              secureTextEntry={true}
            />

            <Button title="Cadastrar" onPress={handleCadastro} />

            <Text style={styles.exploreText}>
              Explore nossa loja e encontre sua essência
            </Text>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
