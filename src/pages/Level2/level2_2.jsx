import { View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ButtonSvg, Shirt } from '../../assets/svg'
import { ImgButton } from '../../components/ImgButton'

export const Level2_2 = () => {
    return <LevelWrapper img2={require('../../assets/img/bg5.png')} img={require('../../assets/img/5bg.png')} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <View>
                <Shirt />
            </View>
            <View style={{ alignItems: 'center', height: 200, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-between' }}>
                    <ImgButton svg={<ButtonSvg />} border={'rgba(204, 102, 204, 0.40)'} />
                    <ImgButton svg={<ButtonSvg />} border={'rgba(204, 102, 204, 0.40)'} />
                </View>
                <View style={{ flexDirection: 'row', width: 200, justifyContent: 'space-between' }}>
                    <ImgButton svg={<ButtonSvg />} border={'rgba(204, 102, 204, 0.40)'} />
                    <ImgButton svg={<ButtonSvg />} border={'rgba(204, 102, 204, 0.40)'} />
                </View>
            </View>
        </View>
    </LevelWrapper>
}