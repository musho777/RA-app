import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton';
import { useEffect, useState } from 'react';
import Sound from 'react-native-sound';


const windowHeight = Dimensions.get('window').height;
export const Level2_7 = ({ navigation }) => {

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

    useEffect(() => {
        setTimeout(function () {
            setGame(false)
        }, 3000);
    }, [])

    const sound = new Sound('game27.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });

    useEffect(() => {
        setTimeout(() => {
            sound.play()
        }, 100);
    }, [])
    const [game, setGame] = useState(true)
    const [game1, setGame1] = useState(0)
    const [tedy, setTedy] = useState([
        { icone: <Image style={{ width: 85, height: 110 }} source={require('../../assets/img/level2/game7/yellowTedy.png')} />, id: 1 },
        { icone: <Image style={{ width: 85, height: 110 }} source={require('../../assets/img/level2/game7/greenTedy.png')} />, id: 2 },
        { icone: <Image style={{ width: 85, height: 110 }} source={require('../../assets/img/level2/game7/purpleTedy.png')} />, id: 3 },
    ])
    const bigTedy = [
        { icone: <Image style={{ width: 150, height: 220 }} source={require('../../assets/img/level2/game7/yellowTedy.png')} />, id: 1 },
        { icone: <Image style={{ width: 150, height: 220 }} source={require('../../assets/img/level2/game7/greenTedy.png')} />, id: 2 },
        { icone: <Image style={{ width: 150, height: 220 }} source={require('../../assets/img/level2/game7/purpleTedy.png')} />, id: 3 },
    ]
    const doll = [
        { icone: <Image style={{ width: 55, height: 95 }} source={require('../../assets/img/level2/game7/blueDoll.png')} />, id: 1 },
        { icone: <Image style={{ width: 55, height: 95 }} source={require('../../assets/img/level2/game7/pinkDoll.png')} />, id: 2 },
        { icone: <Image style={{ width: 55, height: 95 }} source={require('../../assets/img/level2/game7/yellowDoll.png')} />, id: 3 },
    ]
    const bigDoll = [
        { icone: <Image style={{ width: 150, height: 220 }} source={require('../../assets/img/level2/game7/blueDoll.png')} />, id: 1 },
        { icone: <Image style={{ width: 150, height: 220 }} source={require('../../assets/img/level2/game7/pinkDoll.png')} />, id: 2 },
        { icone: <Image style={{ width: 150, height: 220 }} source={require('../../assets/img/level2/game7/yellowDoll.png')} />, id: 3 },
    ]
    const [activeGame, setActiveGame] = useState()
    const [activeArr, setAcgtiveArr] = useState([])
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


    useEffect(() => {
        let arr = []
        let type = ''
        if (game1 == 0) {
            arr = shuffle(tedy)
            type = 'tedy'
        }
        else {
            arr = shuffle(doll)
            type = 'doll'
        }
        randomIndex = Math.floor(Math.random() * 3);
        if (type == 'doll') {
            let _id = arr[randomIndex].id
            const result = bigDoll.find(({ id }) => id === _id);
            setActiveGame(result)
        }
        else {
            let _id = arr[randomIndex].id
            const result = bigTedy.find(({ id }) => id === _id);
            setActiveGame(result)
        }
        setAcgtiveArr(arr)
    }, [game1])

    const Play = (number) => {
        if (number == activeGame.id) {
            setTimeout(() => {
                musicSuccess.play();
                if (game1 == 1) {
                    sound.stop()
                    // navigation.navigate('Level2_8')
                }
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
                // setGame1(game1 + 1)
                setGame(true)
                navigation.navigate('Level2_8')
            }, 2000);
            setTimeout(() => {
                setGame(false)
            }, 5000);
        }
        else {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
        }
    }
    if (!game) {
        return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
            <View style={styles.block}>
                {activeArr?.map((elm, i) => {
                    return <ImgButton width={130} height={130} onPress={() => Play(elm.id)} key={i} svg={elm.icone} border={'rgba(255, 111, 23, 0.50)'} />
                })}
            </View>
        </LevelWrapper>
    }
    else {
        return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
            <View style={styles.block2}>
                <ImgButton big svg={activeGame?.icone} border={'rgba(255, 111, 23, 0.50)'} />
            </View>
        </LevelWrapper>
    }
}
const styles = StyleSheet.create({
    block: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: windowHeight - 80,
        paddingHorizontal: 100
    },
    block2: {
        alignItems: 'center',
        justifyContent: 'center',
        height: windowHeight - 80,
        paddingHorizontal: 100
    }
})