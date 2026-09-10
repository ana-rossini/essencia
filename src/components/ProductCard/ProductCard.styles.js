import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalVariables";

export const styles = StyleSheet.create({
    productCard: {
        width: "48%",
        backgroundColor: colors.white,
        borderRadius: 8,
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.cream,
    },

    productImage: {
        width: "100%",
        height: 170,
        resizeMode: "contain",
        marginBottom: 8,
    },

    productData: {
        width: "100%",
        height: 75,
        paddingHorizontal: 10
    },

    productName: {
        fontSize: 12,
        fontFamily: colors.fontMontserrat,
        color: colors.black,
        marginBottom: 5,
    },

    productPrice: {
        fontSize: 14,
        fontFamily: colors.fontMontserrat,
        color: colors.brownDark,
    },
});
