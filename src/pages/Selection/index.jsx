import { Dimensions, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native"
import { LevelSvg } from "../../assets/svg"

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Selection = () => {
    return <View>
        <ImageBackground source={require('../../assets/img/2.png')} resizeMode="cover" style={styles.image}>
            <View>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/4_1.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/3_1.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/2_1.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/1_1.png')} />
                </TouchableOpacity>

            </View>
            <View>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/8_1.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/7_1.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/6_1.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/5_1.png')} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    </View>
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    image: {
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    img: {
        width: 100,
        height: 60,
        transform: [{ rotate: '-90deg' }],
        marginVertical: 40,
    }
});