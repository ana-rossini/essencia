import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalVariables";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },

    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0
    },

    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
        borderRadius: 100,
    },

    safeArea: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    },

    loginCard: {
        backgroundColor: colors.white,
        padding: 22,
        borderRadius: 10,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
    },

    title: {
        fontSize: 24,
        textAlign: "center",
        fontFamily: colors.fontRye,
        marginBottom: 10
    },
    
    exploreText: {
        marginTop: 20,
        fontSize: 15,
        color: colors.brown,
        textAlign: "center",
        fontFamily: colors.fontCordorant,
    },
})