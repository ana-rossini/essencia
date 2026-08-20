import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppRouter from "./src/routes/AppRouter";
import { useFonts } from "expo-font";
import { Rye_400Regular } from "@expo-google-fonts/rye";
import { Montserrat_500Medium } from "@expo-google-fonts/montserrat"; 
import { CormorantGaramond_500Medium } from "@expo-google-fonts/cormorant-garamond";

export default function App() {
  const [fontLoaded] = useFonts({
    Rye_400Regular,
    Montserrat_500Medium,
    CormorantGaramond_500Medium
  })

  if (!fontLoaded) return null

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
