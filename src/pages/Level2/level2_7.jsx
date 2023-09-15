import { Dimensions, StyleSheet, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton';
import { BigBucket, Bucket, Butterfly1, DollBlue, DollRed, DollYellow, PinkBuket, RedBuket, TeddyGreen, TeddyRed, TeddyYellow } from '../../assets/svg';
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
    const [game, setGame] = useState(true)
    const [tedy, setTedy] = useState([
        { icone: <TeddyYellow />, id: 1 },
        { icone: <TeddyGreen />, id: 2 },
        { icone: <TeddyRed />, id: 3 },
    ])
    const [doll, setDoll] = useState([
        { icone: <DollBlue />, id: 1 },
        { icone: <DollRed />, id: 2 },
        { icone: <DollYellow />, id: 3 },
    ])
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
        randomNum = Math.floor(Math.random() * 2);
        if (randomNum == 1) {
            arr = shuffle(tedy)

        }
        else {
            arr = shuffle(doll)
        }
        // shuffle(tedy)
        randomIndex = Math.floor(Math.random() * 3);
        setActiveGame(arr[randomIndex])
        // setTedy(arr)
        setAcgtiveArr(arr)
    }, [])

    const Play = (number) => {
        if (number == activeGame.id) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
                // navigation.navigate('Level1_5')
            }, 2000);
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
                    return <ImgButton onPress={() => Play(elm.id)} key={i} svg={elm.icone} border={'rgba(255, 111, 23, 0.50)'} />
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