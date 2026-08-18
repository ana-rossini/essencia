import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppRouter from "./src/routes/AppRouter";
import { useFonts } from "expo-font";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AppRouter />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
