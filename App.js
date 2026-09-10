import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppRouter from "./src/routes/AppRouter";
import { loadAsync } from "expo-font";
import { Rye_400Regular } from "@expo-google-fonts/rye";
import { Montserrat_500Medium } from "@expo-google-fonts/montserrat"; 
import { CormorantGaramond_500Medium } from "@expo-google-fonts/cormorant-garamond";
import { useEffect, useState } from "react";

export default function App() {
  const [loadFonts, setLoadFonts] = useState(false);

  useEffect(() => {
    loadAsync({
      Rye_400Regular,
      Montserrat_500Medium,
      CormorantGaramond_500Medium
    }).then(() => {
      setLoadFonts(true);
    }).catch((error) => {
      console.log("Erro ao carregar as fontes:", error);
    });
  }, []);

  if (!loadFonts) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
