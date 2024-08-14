import { StyleSheet,View,Dimensions } from "react-native";
import Colors from "../../constants/colors";
function Card({children}){
    return ( <View style={styles.card}>
        {children}
    </View>)

}
const deviceWidth=Dimensions.get('window').width;

export default Card;
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth <380? 18 :36,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4,
  },
});