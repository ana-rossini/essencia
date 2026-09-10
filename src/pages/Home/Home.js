import { ScrollView, View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./Home.styles";
import { TextInput } from "react-native";
import { Menu, Search, ShoppingBag, User } from "lucide-react-native";
import { colors } from "../../styles/globalVariables";
import { Logo } from "../../components/Logo/Logo";
import { FlatList } from "react-native";
import { mockProducts } from "../../data/MockProducts";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export default function Home() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.homeTopBar}>
          <Text style={styles.topBarText}>
            Frete grátis em compras acima de R$ 499,00
          </Text>
        </View>

        <View style={styles.homeHeader}>
          <View style={styles.homeTopHeader}>
            <View style={styles.headerOptions}>
              <Menu size={22} color={colors.brownDark} />
            </View>

            <View style={styles.logo}>
              <Logo />
            </View>

            <View style={styles.headerNav}>
              <ShoppingBag size={22} color={colors.brownDark} />
              <User size={22} color={colors.brownDark} />
            </View>
          </View>
        </View>

        <View style={styles.homeBanner}>
          <Image
            source={require("../../../assets/images/homeImage.png")}
            style={{ width: "100%", height: 200 }}
          />
        </View>

        <View style={styles.homeContent}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <View style={styles.line}></View>
            <Text style={styles.contentTitle}>Conheça nossa coleção</Text>
            <View style={styles.line}></View>
          </View>

          <View style={styles.searchContainer}>
            <Search size={18} color={colors.brownDark} />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar produtos..."
              placeholderTextColor={styles.searchInput.placeholderTextColor}
            />
          </View>

          <View style={styles.homeProducts}>
            <FlatList 
                data={mockProducts}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
                renderItem={({ item }) => <ProductCard item={item} />}
                scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
