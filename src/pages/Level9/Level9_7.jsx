import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { GetRandomItemsFromArray } from '../../components/Funtion/getRandomItemsFromArray'

export const Level9_7 = ({ navigation }) => {

    const [svg, setSvg] = useState({
        icone: [
            { icone: <Image source={require('../../assets/img/level9/game7/car3.png')} style={{ width: 80, height: 80 }} />, id: 1 },
            { icone: <Image source={require('../../assets/img/level9/game7/car2.png')} style={{ width: 80, height: 80 }} />, id: 3 },
            { icone: <Image source={require('../../assets/img/level9/game7/car1.png')} style={{ width: 80, height: 80 }} />, id: 2 },
        ],
        answer: <Image source={require('../../assets/img/level9/game7/car.png')} style={{ width: 100, height: 80 }} />,

    })
    const [svg1, setSvg1] = useState({
        icone: [
            { icone: <Image source={require('../../assets/img/level9/game7/heart.png')} style={{ width: 60, height: 80 }} />, id: 1 },
            { icone: <Image source={require('../../assets/img/level9/game7/strawberry1.png')} style={{ width: 60, height: 80 }} />, id: 2 },
            { icone: <Image source={require('../../assets/img/level9/game7/raspberries.png')} style={{ width: 60, height: 80 }} />, id: 3 },
        ],
        answer: <Image source={require('../../assets/img/level9/game7/strawberry.png')} style={{ width: 60, height: 80 }} />,

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
                    navigation.navigate('Level9_8')
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

    return <LevelWrapper img={require('../../assets/img/bglv1.png')}
        img2={require('../../assets/img/33.png')} jC='center'>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ImgButton width={110} height={110} disable={true} svg={active?.answer} border={'rgba(204, 102, 204, 0.50)'} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
            {active?.icone?.map((elm, i) => {
                return <View key={i} style={i == 1 && { marginHorizontal: 80 }}>
                    <ImgButton width={110} height={110} disable={disable} onPress={() => Game(elm.id)} svg={elm.icone} border={'rgba(204, 102, 204, 0.50)'} />
                </View>
            })}
        </View>

    </LevelWrapper>
}