import { Image } from "react-native";
import { styles } from "./Logo.styles";

export function Logo() {
    return (
        <Image style={styles.logo} source={require('../../../assets/images/logo2.png')} />
    )
}