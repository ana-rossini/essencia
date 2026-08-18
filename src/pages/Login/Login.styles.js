import { colors } from "../../globalVariables";

export const styles = {
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
        fontWeight: "bold",
        textAlign: "center",
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginVertical: 10,
        width: "100%",
    },
    loginButton: {
        backgroundColor: colors.brown,
        padding: 10,
        width: "50%",
        marginTop: 10,
        borderRadius: 8,
    },
    loginButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    exploreText: {
        marginTop: 20,
        fontSize: 13,
        color: colors.brown,
        textAlign: "center",
    },
}