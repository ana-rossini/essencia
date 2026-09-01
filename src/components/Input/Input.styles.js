import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalVariables";

export const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    marginBottom: 18,
  },

  label: {
    fontSize: 14,
    fontFamily: colors.fontMontserrat,
    color: colors.brown,
    marginBottom: 6,
  },

  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background || "#",
    fontFamily: colors.fontMontserrat,
    color: colors.black || "#fffff",
    padding: 12,
    borderRadius: 8,
    fontSize: 13,
    borderWidth: 1,
    borderColor: colors.brown || "#",
  },
});
