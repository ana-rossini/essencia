import { Text } from "react-native";
import { Image, View } from "react-native";
import { styles } from "./ProductCard.styles";

export function ProductCard({ item }) {
    return (
        <View style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />

            <View style={styles.productData}>
                <Text style={styles.productName}>
                    {item.name}
                </Text>

                <Text style={styles.productPrice}>
                    R$ {item.price}
                </Text>
            </View>
        </View>
    )
}