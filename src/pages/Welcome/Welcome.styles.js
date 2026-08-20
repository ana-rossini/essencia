import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalVariables";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 22,
        fontWeight: 600,
        textAlign: "center",
        fontFamily: colors.fontRye,
        color: colors.brown,
    },

    subTitle: {
        fontSize: 18,
        textAlign: "center",
        color: colors.brown,
        fontFamily: colors.fontCordorant,
        marginTop: 8,
    },

    image: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0
    },

    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
        borderRadius: 100,
    },

    buttonsContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        width: "100%",
        marginTop: 50,
    },

    loginButton: {
        borderRadius: 8,
        backgroundColor: colors.cream,
        paddingVertical: 8,
        paddingHorizontal: 22,
    },

    loginregisterButton: {
        borderRadius: 8,
        backgroundColor: colors.brown,
        paddingVertical: 8,
        paddingHorizontal: 20,
    },

    loginText: {
        color: colors.brown,
        fontFamily: colors.fontMontserrat,
        fontSize: 15,
        fontWeight: 600,
    },

    registerText: {
        color: colors.white,
        fontFamily: colors.fontMontserrat,
        fontSize: 15,
        fontWeight: 600,
    }
})