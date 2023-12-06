import { Image, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { Rooster1, Wolf, Wolf1 } from '../../assets/svg'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level1_6 = ({ navigation }) => {
    const [shdaow, setShadow] = useState([
        <Image style={{ width: 70, height: 90 }} source={require('../../assets/img/теньпетуха.png')} />,
        <Wolf />
    ])
    const [svg, setSvg] = useState([
        { icone: <Image style={{ width: 100, height: 70 }} source={require('../../assets/img/лиса.png')} />, id: 1 },
        // { icone: <Image style={{ width: 70, height: 90 }} source={require('../../assets/img/петух.png')} />, id: 2 },
        { icone: <Image style={{ width: 70, height: 90 }} source={require('../../assets/img/курица.png')} />, id: 3 },
    ])

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

    function getRandomItems(arr, numItems) {
        const copyArray = [...arr];
        const randomItems = [];
        for (let i = 0; i < numItems; i++) {
            const randomIndex = Math.floor(Math.random() * copyArray.length);
            randomItems.push(copyArray.splice(randomIndex, 1)[0]);
        }
        return randomItems;
    }

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex > 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    const [activeShadow, setActiveShadow] = useState()
    const [game, setGame] = useState(0)

    useEffect(() => {
        setActiveShadow(shdaow[game])
        let newArr = getRandomItems(svg, 2)
        if (game == 0) {
            newArr.push({ icone: <Image style={{ width: 70, height: 90 }} source={require('../../assets/img/петух.png')} />, id: 4 })
        }
        else {
            newArr.push({ icone: <Image style={{ width: 100, height: 70 }} source={require('../../assets/img/волк.png')} />, id: 4 })
        }
        let activeArr = shuffle(newArr)
        setActive(activeArr)

    }, [game])

    const Game = (id) => {
        if (id == 4) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                setGame(game + 1)
                if (game == 1) {
                    navigation.navigate('LevelScreen')
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
            }, 2000);

        }
    }

    return <LevelWrapper img2={require('../../assets/img/bg5.png')} img={require('../../assets/img/5bg.png')} jC='center'>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ImgButton width={120} height={120} svg={activeShadow} border={'rgba(204, 102, 204, 0.50)'} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
            {active?.map((elm, i) => {
                return <View key={i} style={i == 1 && { marginHorizontal: 80 }}>
                    <ImgButton width={120} height={120} onPress={() => Game(elm.id)} svg={elm.icone} border={'rgba(204, 102, 204, 0.50)'} />
                </View>
            })}
        </View>

    </LevelWrapper>
}