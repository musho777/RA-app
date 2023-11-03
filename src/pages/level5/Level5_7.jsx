import { Dimensions, StyleSheet, View, Image } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton';
import { useEffect, useState } from 'react';
import Sound from 'react-native-sound';


const windowHeight = Dimensions.get('window').height;
export const Level5_7 = ({ navigation }) => {

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
    const sound = new Sound('game571.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });

    const sound1 = new Sound('game572.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });



    useEffect(() => {
        setTimeout(function () {
            sound1.play()
        }, 100);
        setTimeout(function () {
            setGame1(1)
        }, 3000);

        setTimeout(function () {
            sound1.stop()
            sound.play()
            setGame1(2)
        }, 6000);
    }, [])

    console.log(game1)

    // useEffect(() => {
    //     setTimeout(function () {
    //         sound1.stop()
    //         sound.stop()
    //     }, 100);
    //     setTimeout(function () {
    //         if (game1 == 1) {
    //             sound.play()
    //         }
    //     }, 100);
    // }, [game1])
    const [bucket, setBucket] = useState([
        { icone: <Image style={{ width: 80, height: 50 }} source={require('../../assets/img/level5/game7/machine.png')} />, id: 2 },
        { icone: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level5/game7/scooter.png')} />, id: 3 },
        { icone: <Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level5/game7/bucket.png')} />, id: 1 },
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
                sound.stop()
                navigation.navigate('Level5_8')
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
    if (game1 == '2') {
        return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
            <View style={styles.block}>
                {bucket.map((elm, i) => {
                    return <ImgButton onPress={() => Play(elm.id)} key={i} svg={elm.icone} border={'rgba(255, 111, 23, 0.50)'} />
                })}
            </View>
        </LevelWrapper>
    }
    else {
        return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')}>
            {game1 == 0 && <View style={styles.block2}>
                <ImgButton svg={<Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level5/game7/ball.png')} />} border={'rgba(255, 111, 23, 0.50)'} />
                <ImgButton svg={<Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level5/game7/cube.png')} />} border={'rgba(255, 111, 23, 0.50)'} />
                <ImgButton svg={<Image style={{ width: 80, height: 60 }} source={require('../../assets/img/level5/game7/machine.png')} />} border={'rgba(255, 111, 23, 0.50)'} />
                <ImgButton svg={<Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level5/game7/pyramid.png')} />} border={'rgba(255, 111, 23, 0.50)'} />
            </View>}
            {game1 == 1 && <View style={styles.block2}>
                <ImgButton svg={<Image style={{ width: 70, height: 80 }} source={require('../../assets/img/level5/game7/ball.png')} />} border={'rgba(255, 111, 23, 0.50)'} />
                <ImgButton svg={<Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level5/game7/cube.png')} />} border={'rgba(255, 111, 23, 0.50)'} />
                <ImgButton svg={<Image style={{ width: 60, height: 80 }} source={require('../../assets/img/level5/game7/pyramid.png')} />} border={'rgba(255, 111, 23, 0.50)'} />
            </View>}
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 100,
    }
})