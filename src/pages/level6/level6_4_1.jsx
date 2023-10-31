import { Image, View } from 'react-native'
import { ImgButton } from '../../components/ImgButton'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

export const Level6_4_1 = ({ navigation }) => {

    const music = new Sound('ding.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const musicSuccess = new Sound('success.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });


    const music1 = new Sound('game64top.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });

    const music2 = new Sound('game64left.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const music3 = new Sound('game64bottom.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });
    const music4 = new Sound('game64right.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });

    const icon = <Image source={require('../../assets/img/level6/game4/ball.png')} style={{ width: 50, height: 50 }} />

    const [game, setGame] = useState([
        { sound: music1, id: 1, icon: <Image source={require('../../assets/img/level6/game4/ball.png')} style={{ width: 50, height: 50 }} /> },
        { sound: music2, id: 2, icon: '' },
        { sound: music3, id: 3, icon: '' },
        { sound: music4, id: 4, icon: '' },
        { sound: musicSuccess, id: 5, icon: '' },

    ])

    const [activeGame, setActiveGame] = useState(game[0])

    useEffect(() => {
        setTimeout(() => {
            activeGame.sound.play()
        }, 100);
        setTimeout(() => {
            activeGame.sound.stop()
        }, 2000);
    }, [activeGame])

    const Game = (i) => {
        if (i == activeGame.id) {
            setActiveGame(game[i])
        }

        else if (activeGame.id == 4 && i == 5) {
            setActiveGame(game[4])
            setTimeout(() => {
                navigation.navigate('Level6_5')
            }, 2000);
        }

        else if (i == 6 || activeGame.id != i) {
            setTimeout(() => {
                music.play();
            }, 100);
            setTimeout(() => {
                music.stop()
            }, 1000);
        }

    }

    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} jC='center'>
        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ flexDirection: 'row' }}>
                <ImgButton onPress={() => Game(2)} svg={activeGame.id == 3 && icon} />
                <View style={{ paddingHorizontal: 10 }}>
                    <ImgButton onPress={() => Game(1)} svg={activeGame.id == 2 && icon} />
                </View>
                <ImgButton onPress={() => Game(6)} />
            </View>
            <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                <ImgButton onPress={() => Game(3)} svg={activeGame.id == 4 && icon} />
                <View style={{ paddingHorizontal: 10 }}>
                    <ImgButton onPress={() => Game(5)} svg={(activeGame.id == 1 || activeGame.id == 5) && icon} />
                </View>
                <ImgButton onPress={() => Game(6)} />
            </View><View style={{ flexDirection: 'row' }}>
                <ImgButton onPress={() => Game(6)} />
                <View style={{ paddingHorizontal: 10 }}>
                    <ImgButton onPress={() => Game(6)} />
                </View>
                <ImgButton onPress={() => Game(6)} />
            </View>
        </View>
    </LevelWrapper>
}