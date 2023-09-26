import { View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { Chicken, Hedgehog, Lisa, Rooster, Rooster1, Wolf, Wolf1 } from '../../assets/svg'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level1_6 = ({ navigation }) => {
    const [shdaow, setShadow] = useState([
        <Rooster />,
        <Wolf />
    ])
    const [svg, setSvg] = useState([
        { icone: <Lisa />, id: 1 },
        { icone: < Hedgehog />, id: 2 },
        { icone: <Chicken />, id: 3 },
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

    useEffect(() => {
        const randomZeroOrOne = Math.floor(Math.random() * 2);
        setActiveShadow(shdaow[randomZeroOrOne])
        let newArr = getRandomItems(svg, 2)
        if (randomZeroOrOne == 0) {
            newArr.push({ icone: <Rooster1 />, id: 4 })
        }
        else[
            newArr.push({ icone: <Wolf1 />, id: 4 })

        ]
        let activeArr = shuffle(newArr)
        setActive(activeArr)

    }, [])

    const Game = (id) => {
        if (id == 4) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                navigation.navigate('LevelScreen')
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
            <ImgButton svg={activeShadow} border={'rgba(204, 102, 204, 0.50)'} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 30 }}>
            {active?.map((elm, i) => {
                return <View key={i} style={i == 1 && { marginHorizontal: 80 }}>
                    <ImgButton onPress={() => Game(elm.id)} svg={elm.icone} border={'rgba(204, 102, 204, 0.50)'} />
                </View>
            })}
        </View>

    </LevelWrapper>
}