import { Image } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'

export const Level6_7 = () => {
    return <LevelWrapper img={require('../../assets/img/bglv1.png')} img2={require('../../assets/img/33.png')}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <ImgButton svg={<Image source={require('../../assets/img/level6/game7/airofkites.png')} />} />

        </View>
    </LevelWrapper>
}