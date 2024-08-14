import {View,Image,StyleSheet,Text} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';
import PrimaryButton from '../components/ui/PrimaryButton';
function GameOverScreen({roundsNumber,userNumber,onStartNewGame}){
    return (
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={styles.imageContainer}>
          <Image style={styles.image}source={require("../assets/images/success.png")} />
        </View>
        <Text style={styles.summayText}>Your phone needed <Text style={styles.highlight}>{roundsNumber} </Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    );
}
export default GameOverScreen;
const styles=StyleSheet.create({
imageContainer:{
    borderRadius:200,
    height:300,
    width:300,
    borderWidth:3,
    borderColor:Colors.primary800,
    margin:36,
    overflow:'hidden',
   },
summayText:{
    fontFamily:'open-sans',
    fontSize:24,
    marginBottom:24,
    textAlign:'center',
},
highlight:{
    fontFamily:'open-sans-bold',
    color:Colors.primary500,
},
   image:{
    width:"100%",
    height:"100%",

   },
   rootContainer:{
    flex:1,
    padding:24,
    justifyContent:'center',
    alignItems:'center',
   }
})