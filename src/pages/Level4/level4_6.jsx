import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'

export const Level4_6 = ({ navigation }) => {

    const [svg, setSvg] = useState({
        icone: [
            { icone: <Image source={require('../../assets/img/level4/game6/checkbox.png')} style={{ width: 60, height: 60 }} />, id: 1 },
            { icone: <Image source={require('../../assets/img/level4/game6/hairdryer.png')} style={{ width: 60, height: 60 }} />, id: 2 },
            { icone: <Image source={require('../../assets/img/level4/game6/net.png')} style={{ width: 60, height: 60 }} />, id: 3 },
        ],
        answer: <Image source={require('../../assets/img/level4/game6/hairdryershadow.png')} style={{ width: 60, height: 60 }} />,

    })
    const [svg1, setSvg1] = useState({
        icone: [
            { icone: <Image source={require('../../assets/img/level4/game6/carrot.png')} style={{ width: 40, height: 60 }} />, id: 1 },
            { icone: <Image source={require('../../assets/img/level4/game6/cucumber.png')} style={{ width: 60, height: 40 }} />, id: 2 },
            { icone: <Image source={require('../../assets/img/level4/game6/corn.png')} style={{ width: 60, height: 40 }} />, id: 3 },
        ],
        answer: <Image source={require('../../assets/img/level4/game6/cucumbershadow.png')} style={{ width: 60, height: 40 }} />,

    })

    const [disable, setDisable] = useState(false)

    const [game1, setGame1] = useState(0)

    const musicSuccess = new Sound('success.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const music = new Sound('ding.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });

    const [active, setActive] = useState()


    useEffect(() => {
        let item = {}
        if (game1 == 0) {
            item = { ...svg }
        }
        else {
            item = { ...svg1 }
        }
        item.icone = GetRandomItemsFromArray(item.icone, 3)
        setActive(item)

    }, [game1])

    const Game = (id) => {
        if (id == 2) {
            setTimeout(() => {
                musicSuccess.play();
                setDisable(true)
            }, 100);
            setTimeout(() => {
                setGame1(game1 + 1)
                setDisable(false)
                if (game1 == 1) {
                    navigation.navigate('Level4_7')
                }
                musicSuccess.stop();
            }, 2000);
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop();
            }, 1000);

        }
    }

    return <LevelWrapper img2={require('../../assets/img/bg5.png')} img={require('../../assets/img/5bg.png')} jC='center'>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ImgButton disable={true} svg={active?.answer} border={'rgba(204, 102, 204, 0.50)'} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
            {active?.icone?.map((elm, i) => {
                return <View key={i} style={i == 1 && { marginHorizontal: 80 }}>
                    <ImgButton disable={disable} onPress={() => Game(elm.id)} svg={elm.icone} border={'rgba(204, 102, 204, 0.50)'} />
                </View>
            })}
        </View>

    </LevelWrapper>
}