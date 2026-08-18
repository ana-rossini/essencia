import { Image, Text, View } from "react-native";
import { styles } from "./Welcome.styles.js";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

export function Welcome() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
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
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.title}>Bem-vinda à Essência Western</Text>
          <Text style={styles.subTitle}>
            Onde a essência country encontra o estilo e a personalidade de cada
            mulher.
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => navigation.navigate("Login")}
            style={styles.loginButton}
          >
            <Text style={styles.loginText}>Entrar</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Register")}
            style={styles.loginregisterButton}
          >
            <Text style={styles.registerText}>Registrar</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
    </ScrollView>
  );
}
