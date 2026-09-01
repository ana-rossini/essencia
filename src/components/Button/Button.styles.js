import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalVariables";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.brown,
    padding: 10,
    width: "50%",
    marginTop: 10,
    borderRadius: 8,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontFamily: colors.fontMontserrat,
  },
});
