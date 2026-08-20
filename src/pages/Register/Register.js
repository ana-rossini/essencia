import { TextInput, Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Register.styles";
import { Text } from "react-native";

export function Register() {
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
                  <Text style={styles.title}>Cadastrar-se</Text>
        
                  <TextInput
                    style={styles.input}
                    placeholder="Nome de usuário"
                    autoCapitalize="none"
                  />

                  <TextInput
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

                  <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    secureTextEntry={true}
                  />
        
                  <TouchableOpacity style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Entrar</Text>
                  </TouchableOpacity>
        
                  <Text style={styles.exploreText}>Explore nossa loja e encontre sua essência</Text>
                </View>
              </SafeAreaView>
            </View>
    )
}