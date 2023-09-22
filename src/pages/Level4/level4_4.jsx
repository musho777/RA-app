import { StyleSheet, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'

export const Level4_4 = () => {
    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
            <View style={{ width: "50%" }}>
                <View></View>
                <View style={styles.line}></View>
                <View></View>
                <View style={styles.line}></View>
                <View></View>
            </View>
            <View></View>
        </View>
    </LevelWrapper>
}

const styles = StyleSheet.create({
    line: {
        borderWidth: 2,
        borderColor: '#F08143',
        marginVertical: 20,
        borderRadius: 5,
    },
})