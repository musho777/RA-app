import { View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { Cendy1 } from '../../assets/svg'

export const Level2_5 = () => {
    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        <View style={{ justifyContent: 'space-around', height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 50 }}>
                <ImgButton />
                <ImgButton />
                <ImgButton />
                <ImgButton />
                <ImgButton />
                <ImgButton />
            </View>
            <View style={{ width: '100%', borderWidth: 2, borderColor: '#9C3', borderRadius: 10 }}></View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 50 }}>
                <ImgButton svg={<Cendy1 />} />
                <ImgButton svg={<Cendy1 />} />
                <ImgButton svg={<Cendy1 />} />
                <ImgButton svg={<Cendy1 />} />
                <ImgButton svg={<Cendy1 />} />
                <ImgButton svg={<Cendy1 />} />
            </View>
        </View>
    </LevelWrapper>
}