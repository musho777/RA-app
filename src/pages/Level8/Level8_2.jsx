import { StyleSheet, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'

export const Level8_2 = () => {
    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={{ justifyContent: "center", alignItems: 'center' }}>
            <View style={styles.circle}>

            </View>
        </View>
    </LevelWrapper>
}

const styles = StyleSheet.create({
    circle: {
        width: 200,
        height: 200,
        borderWidth: 4,
        borderColor: `rgba(255, 111, 23, 0.5)`,
        backgroundColor: 'white',
        borderRadius: 100,
    }
})