import { View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { Turtle } from '../../assets/svg'

export const Level2_6 = () => {
    return <LevelWrapper img2={require('../../assets/img/bg5.png')} img={require('../../assets/img/5bg.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50 }}>
                <ImgButton svg={<Turtle />} border='rgba(178, 176, 213, 0.40)' />
                <View style={{ marginHorizontal: 20 }}>
                    <ImgButton svg={<Turtle />} border='rgba(178, 176, 213, 0.40)' />
                </View>
                <ImgButton svg={<Turtle />} border='rgba(178, 176, 213, 0.40)' />
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#B2B0D5', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 50 }}>
                <ImgButton svg={<Turtle />} border='rgba(178, 176, 213, 0.40)' />
                <View style={{ marginHorizontal: 10 }}></View>
                <ImgButton svg={<Turtle />} border='rgba(178, 176, 213, 0.40)' />
            </View>
        </View>
    </LevelWrapper>
}