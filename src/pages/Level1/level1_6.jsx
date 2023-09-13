import { Dimensions, StyleSheet, Touchable, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton';
import { Bucket, Butterfly1, Green, Red, Train, WhiteTrain, Yellow } from '../../assets/svg';


const windowWidth = Dimensions.get('window').width;
export const Level1_6 = () => {
    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={styles.block}>
            <ImgButton svg={<WhiteTrain />} border={'rgba(255, 111, 23, 0.50)'} />
            <ImgButton svg={<WhiteTrain />} border={'rgba(255, 111, 23, 0.50)'} />
            <ImgButton svg={<WhiteTrain />} border={'rgba(255, 111, 23, 0.50)'} />
        </View>
        <View style={styles.block}>
            <TouchableOpacity>
                <Red />
            </TouchableOpacity>
            <TouchableOpacity>
                <Yellow />
            </TouchableOpacity>
            <TouchableOpacity>
                <Green />
            </TouchableOpacity>
        </View>
    </LevelWrapper>
}
const styles = StyleSheet.create({
    block: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 100,
        marginTop: 30,
    }
})