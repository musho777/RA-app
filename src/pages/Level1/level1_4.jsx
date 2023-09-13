import { Dimensions, StyleSheet, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton';
import { Bucket, Butterfly1 } from '../../assets/svg';


const windowWidth = Dimensions.get('window').width;
export const Level1_4 = () => {
    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
        <View style={styles.block}>
            <ImgButton svg={<Bucket />} border={'rgba(255, 111, 23, 0.50)'} />
            <ImgButton svg={<Bucket />} border={'rgba(255, 111, 23, 0.50)'} />
            <ImgButton svg={<Bucket />} border={'rgba(255, 111, 23, 0.50)'} />
        </View>
    </LevelWrapper>
}
const styles = StyleSheet.create({
    block: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: windowWidth - 80,
        paddingHorizontal: 100
    }
})