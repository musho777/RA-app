import { View } from 'react-native'
import { ImgButton } from '../../components/ImgButton'
import { LevelWrapper } from '../../components/LevelWrapper'

export const Level3_3 = () => {
    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 120 }}>
            <ImgButton />
            <ImgButton />
            <ImgButton />
            <ImgButton />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 120, marginTop: 30 }}>
            <ImgButton />
            <ImgButton />
            <ImgButton />
            <ImgButton />
        </View>
    </LevelWrapper>
}