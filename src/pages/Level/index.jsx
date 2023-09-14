import { Dimensions, ImageBackground, StyleSheet, View } from "react-native"
import VerticalCarousel from "../../components/slider";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const LevelScreen = ({ navigation }) => {
    return <View style={styles.container}>
        <ImageBackground source={require('../../assets/img/1.png')} resizeMode="cover" style={styles.image} >
            <VerticalCarousel navigation={navigation} />
        </ImageBackground>
    </View>
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    image: {
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'center',
    },
});