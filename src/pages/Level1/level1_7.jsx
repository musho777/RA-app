import { View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { Rooster, Rooster1 } from '../../assets/svg'

export const Level1_7 = () => {
    return <LevelWrapper img2={require('../../assets/img/bg5.png')} img={require('../../assets/img/5bg.png')} jC='center'>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ImgButton svg={<Rooster />} border={'rgba(204, 102, 204, 0.50)'} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
            <ImgButton svg={<Rooster1 />} border={'rgba(204, 102, 204, 0.50)'} />
            <View style={{ marginHorizontal: 30 }}>
                <ImgButton svg={<Rooster1 />} border={'rgba(204, 102, 204, 0.50)'} />
            </View>
            <ImgButton svg={<Rooster1 />} border={'rgba(204, 102, 204, 0.50)'} />
        </View>

    </LevelWrapper>
}