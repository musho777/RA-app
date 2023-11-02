import { Dimensions, StyleSheet, View, Image } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton';
import { BigBucket, } from '../../assets/svg';
import { useEffect, useState } from 'react';
import Sound from 'react-native-sound';


const windowHeight = Dimensions.get('window').height;
export const Level11_7 = ({ navigation }) => {

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
    const [bucket, setBucket] = useState([
        { icone: <Image source={require('../../assets/img/level11/game7/формазвезда.png')} style={{ width: 120, height: 80 }} />, id: 1 },
        { icone: <Image source={require('../../assets/img/level11/game7/формакекс.png')} style={{ width: 120, height: 120 }} />, id: 3 },
        { icone: <Image source={require('../../assets/img/level11/game7/формалистик.png')} style={{ width: 120, height: 75 }} />, id: 2 },
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
                navigation.navigate('Level11_7_1')
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
                <ImgButton big svg={<Image source={require('../../assets/img/level11/game7/формалистик.png')} style={{ width: 270, height: 200 }} />} border={'rgba(255, 111, 23, 0.50)'} />
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