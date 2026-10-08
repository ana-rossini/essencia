import { StyleSheet } from "react-native";
import { colors } from "../../styles/globalVariables";

export const styles = StyleSheet.create({
  homeTopBar: {
    backgroundColor: colors.tealLight,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  topBarText: {
    color: colors.brownDark,
    fontSize: 13,
    fontFamily: colors.fontMontserrat,
  },

  homeHeader: {
    marginTop: 5,
    paddingHorizontal: 16,
  },

  homeTopHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
  },

  logo: {
    marginLeft: 25,
  },

  headerNav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
  },

  homeBanner: {
    marginTop: 10,
  },

  homeContent: {
    flex: 1,
    paddingHorizontal: 16,
    display: "flex",
    alignItems: "center",
    marginTop: 20,
  },

  categories: {
    width: "100%",
    flexGrow: 0,
  },

  categoriesContent: {
    flexDirection: "row",
    gap: 5,
    alignItems: "flex-start",
    paddingRight: 15,
  },

  categoryButton: {
    borderRadius: 5,
    backgroundColor: colors.cream,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: "flex-start",
  },

  categoryButtonEmphasis: {
    borderRadius: 5,
    backgroundColor: colors.brownLight,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: "flex-start",
  },

  categoryButtonText: {
    color: colors.brown,
    fontFamily: colors.fontMontserrat,
    fontSize: 12,
    fontWeight: "600",
  },

  categoryButtonEmphasisText: {
    color: colors.cream,
    fontFamily: colors.fontMontserrat,
    fontSize: 12,
    fontWeight: "600",
  },

  contentTitle: {
    margin: 8,
    fontFamily: colors.fontMontserrat,
    color: colors.brownDark,
  },

  line: {
    width: 80,
    height: 2,
    backgroundColor: colors.brownDark,
  },

  searchContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
    borderColor: colors.brownDark,
    flexDirection: "row",
    borderRadius: 8,
    width: "100%",
    paddingLeft: 12,
    paddingTop: 4,
    marginTop: 10,
  },

  searchInput: {
    width: "100%",
    paddingHorizontal: 5,
    fontSize: 12,
    fontFamily: colors.fontMontserrat,
    color: colors.brownDark,
    placeholderTextColor: colors.brownDark,
  },

  homeProducts: {
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },

  emptyProducts: {
    paddingVertical: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyProductsText: {
    color: colors.brown,
    fontFamily: colors.fontMontserrat,
    fontSize: 13,
  },
});
