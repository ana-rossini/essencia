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
import { TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const filteredProducts =
    activeCategory === "Todos"
      ? mockProducts
      : mockProducts.filter((product) => product.category === activeCategory);

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
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={styles.line}></View>
            <Text style={styles.contentTitle}>Conheça nossa coleção</Text>
            <View style={styles.line}></View>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categories}
            contentContainerStyle={styles.categoriesContent}
          >
            <TouchableOpacity
              onPress={() => [setActiveCategory("Todos"), setActiveCategory]}
              style={[styles.categoryButton, activeCategory == "Todos" && styles.categoryButtonEmphasis]}
            >
              <Text style={[styles.categoryButtonText, activeCategory == "Todos" && styles.categoryButtonEmphasisText]}>Destaques</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.categoryButton, activeCategory == "Camisetas" && styles.categoryButtonEmphasis]}
              onPress={() => setActiveCategory("Camisetas")}
            >
              <Text style={[styles.categoryButtonText, activeCategory == "Camisetas" && styles.categoryButtonEmphasisText]}>Camisetas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.categoryButton, activeCategory == "Camisas" && styles.categoryButtonEmphasis]}
              onPress={() => setActiveCategory("Camisas")}
            >
              <Text style={[styles.categoryButtonText, activeCategory == "Camisas" && styles.categoryButtonEmphasisText]}>Camisas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.categoryButton, activeCategory == "Jaquetas" && styles.categoryButtonEmphasis]}
              onPress={() => setActiveCategory("Jaquetas")}
            >
              <Text style={[styles.categoryButtonText, activeCategory == "Jaquetas" && styles.categoryButtonEmphasisText]}>Jaquetas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.categoryButton, activeCategory == "Moletons" && styles.categoryButtonEmphasis]}
              onPress={() => setActiveCategory("Moletons")}
            >
              <Text style={[styles.categoryButtonText, activeCategory == "Moletons" && styles.categoryButtonEmphasisText]}>Moletons</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.categoryButton, activeCategory == "Calças" && styles.categoryButtonEmphasis]}
              onPress={() => setActiveCategory("Calças")}
            >
              <Text style={[styles.categoryButtonText, activeCategory == "Calças" && styles.categoryButtonEmphasisText]}>Calças</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.categoryButton, activeCategory == "Jeans" && styles.categoryButtonEmphasis]}
              onPress={() => setActiveCategory("Jeans")}
            >
              <Text style={[styles.categoryButtonText, activeCategory == "Jeans" && styles.categoryButtonEmphasisText]}>Jeans</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.categoryButton, activeCategory == "Botas" && styles.categoryButtonEmphasis]}
              onPress={() => setActiveCategory("Botas")}
            >
              <Text style={[styles.categoryButtonText, activeCategory == "Botas" && styles.categoryButtonEmphasisText]}>Botas</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.categoryButton, activeCategory == "Acessórios" && styles.categoryButtonEmphasis]}
              onPress={() => setActiveCategory("Acessórios")}
            >
              <Text style={[styles.categoryButtonText, activeCategory == "Acessórios" && styles.categoryButtonEmphasisText]}>Acessórios</Text>
            </TouchableOpacity>
          </ScrollView>

          <View style={styles.searchContainer}>
            <Search size={18} color={colors.brownDark} />
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar produtos..."
              placeholderTextColor={styles.searchInput.placeholderTextColor}
            />
          </View>

          <View style={styles.homeProducts}>
            {filteredProducts.length > 0 ? (
              <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={{
                  justifyContent: "space-between",
                  marginBottom: 16,
                }}
                renderItem={({ item }) => <ProductCard item={item} />}
                scrollEnabled={false}
              />
            ) : (
              <View style={styles.emptyProducts}>
                <Text style={styles.emptyProductsText}>
                  Nenhum produto encontrado nessa categoria.
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
