import { Dimensions, StyleSheet, View, Image } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton';
import { BigBucket, PinkBuket, RedBuket } from '../../assets/svg';
import { useEffect, useState } from 'react';
import Sound from 'react-native-sound';


const windowHeight = Dimensions.get('window').height;
export const Level1_4 = ({ navigation }) => {

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
    const sound = new Sound('game141.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const sound2 = new Sound('game142.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });


    useEffect(() => {
        setTimeout(function () {
            setTimeout(() => {
                sound.stop()
                sound2.play()
            }, 100);
            setGame(false)
        }, 4000);
    }, [])

    useEffect(() => {
        setTimeout(() => {
            sound.play()
        }, 100);
    }, [])

    const [game, setGame] = useState(true)
    const [bucket, setBucket] = useState([
        { icone: <Image source={require('../../assets/img/level1/game4/greenbuket.png')} style={{ width: 100, height: 125 }} />, id: 1 },
        { icone: <Image source={require('../../assets/img/level1/game4/pinkbuket.png')} style={{ width: 100, height: 125 }} />, id: 3 },
        { icone: <Image source={require('../../assets/img/level1/game4/orangebuket.png')} style={{ width: 100, height: 125 }} />, id: 2 },
    ])
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
        let arr = shuffle(bucket)
        setBucket(arr)
    }, [])

    const Play = (number) => {
        if (number == 2) {
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
                navigation.navigate('Level1_5')
                sound.stop()
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
                {bucket.map((elm, i) => {
                    return <ImgButton width={140} height={140} onPress={() => Play(elm.id)} key={i} svg={elm.icone} border={'rgba(255, 111, 23, 0.50)'} />
                })}
            </View>
        </LevelWrapper>
    }
    else {
        return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
            <View style={styles.block2}>
                <ImgButton big svg={<BigBucket />} border={'rgba(255, 111, 23, 0.50)'} />
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