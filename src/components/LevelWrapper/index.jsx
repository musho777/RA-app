import { Dimensions, ImageBackground, StyleSheet, View } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const LevelWrapper = ({ children, jC = 'space-between', paddingTop, img, img2 }) => {
    return (

        <ImageBackground source={img2} resizeMode="cover" style={styles.image}>
            <ImageBackground style={[styles.opacity]} source={img} >
                <View>
                    <View style={{ justifyContent: jC, height: windowHeight - 80, paddingTop: paddingTop, width: windowWidth - 80 }}>
                        {children}
                    </View>
                </View>
            </ImageBackground>
        </ImageBackground >
    )
}
const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    opacity: {
        width: windowWidth - 40,
        height: windowHeight - 40,
        flexDirection: 'row',
        padding: 20,
        borderRadius: 20,
        overflow: 'hidden',
    }
});