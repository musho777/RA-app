import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Level2_4 = ({ navigation }) => {
    const item = [
        { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/redGlass1.png')} />, id: 1 },
        { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/BlueGlass.png')} />, id: 2 },
        { icon: <Image style={{ width: 70, height: 50 }} source={require('../../assets/img/Pot.png')} />, id: 4 },
        { icon: <Image style={{ width: 80, height: 80 }} source={require('../../assets/img/redGlass1.png')} />, id: 3 },
        { icon: <Image style={{ width: 80, height: 50 }} source={require('../../assets/img/Pot.png')} />, id: 5 },
        { icon: <Image style={{ width: 90, height: 60 }} source={require('../../assets/img/Pot.png')} />, id: 6 },
    ]
    const [selected, setSeletded] = useState([])
    const [selected1, setSeletded1] = useState([])
    const [selectedSquar, setSelecetedSquar] = useState(0)

    let w = (windowWidth - 80) * 0.4
    let h = windowHeight - 80

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

    const sound = new Sound('game241.mp3', Sound.MAIN_BUNDLE,
        (error) => {
            if (error) {
                console.log('Error loading music:', error);
                return
            }
        });

    useEffect(() => {
        setTimeout(() => {
            sound.play();
        }, 100);
    }, [])

    const Play = (e) => {
        let item = [...selected]
        let item2 = [...selected1]
        if (selectedSquar == 1 || selectedSquar == 2 || selectedSquar == 3) {
            if (e.id == 1 || e.id == 2 || e.id == 3) {
                // item.push(e)
                item[selectedSquar - 1] = e
                setSelecetedSquar(0)
            }
        }
        else {
            if (e.id == 4 || e.id == 5 || e.id == 6) {
                item2[selectedSquar - 4] = e
                setSelecetedSquar(0)
            }
        }
        setSeletded(item)
        setSeletded1(item2)
    }

    useEffect(() => {
        if (selected[0]?.id && selected[1]?.id && selected[2]?.id && selected1[0]?.id && selected1[1]?.id && selected1[2]?.id) {
            setTimeout(() => {
                musicSuccess.play();
                sound.stop()
            }, 100);
            setTimeout(() => {
                musicSuccess.stop()
                navigation.navigate('Level2_4_2')

            }, 2000);
        }
    }, [selected, selected1])
    return <LevelWrapper img2={require('../../assets/img/bg4.png')} img={require('../../assets/img/4bg.png')} jC='center'>
        <View style={styles.wrapper}>
            <View style={styles.blockWrapper1}>
                <View style={styles.block1}>
                    {selected[0]?.id ?
                        < ImgButton svg={selected[0]?.icon} border='rgba(240, 129, 67, 0.4)' /> :
                        < ImgButton onPress={() => setSelecetedSquar(1)} border={selectedSquar == 1 ? 'green' : 'rgba(240, 129, 67, 0.4)'} />
                    }
                    {selected[1]?.id ?
                        < ImgButton svg={selected[1]?.icon} border='rgba(240, 129, 67, 0.4)' /> :
                        < ImgButton onPress={() => setSelecetedSquar(2)} border={selectedSquar == 2 ? 'green' : 'rgba(240, 129, 67, 0.4)'} />
                    }
                    {selected[2]?.id ?
                        < ImgButton svg={selected[2]?.icon} border='rgba(240, 129, 67, 0.4)' /> :
                        < ImgButton onPress={() => setSelecetedSquar(3)} border={selectedSquar == 3 ? 'green' : 'rgba(240, 129, 67, 0.4)'} />
                    }
                </View>
                <View style={styles.line}></View>
                <View style={styles.block1}>
                    {selected1[0]?.id ?
                        < ImgButton svg={selected1[0]?.icon} border='rgba(240, 129, 67, 0.4)' /> :
                        < ImgButton onPress={() => setSelecetedSquar(4)} border={selectedSquar == 4 ? 'green' : 'rgba(240, 129, 67, 0.4)'} />
                    }
                    {selected1[1]?.id ?
                        < ImgButton svg={selected1[1]?.icon} border='rgba(240, 129, 67, 0.4)' /> :
                        < ImgButton onPress={() => setSelecetedSquar(5)} border={selectedSquar == 5 ? 'green' : 'rgba(240, 129, 67, 0.4)'} />
                    }
                    {selected1[2]?.id ?
                        < ImgButton svg={selected1[2]?.icon} border='rgba(240, 129, 67, 0.4)' /> :
                        < ImgButton onPress={() => setSelecetedSquar(6)} border={selectedSquar == 6 ? 'green' : 'rgba(240, 129, 67, 0.4)'} />
                    }
                </View>
            </View>
            <View style={styles.block2}>
                {!selected.some((elm) => elm?.id === item[0]?.id) && <TouchableOpacity style={{ position: 'absolute', left: 150, top: 100 }} onPress={() => Play(item[0])} >
                    {item[0]?.icon}
                </TouchableOpacity>}
                {!selected.some((elm) => elm?.id === item[1]?.id) && <TouchableOpacity style={{ position: 'absolute', left: 13, top: 53 }} onPress={() => Play(item[1])} >
                    {item[1]?.icon}
                </TouchableOpacity>}
                {!selected1.some((elm) => elm?.id === item[2]?.id) && <TouchableOpacity style={{ position: 'absolute', left: w - 80, top: 30 }} onPress={() => Play(item[2])} >
                    {item[2]?.icon}
                </TouchableOpacity>}
                {!selected.some((elm) => elm?.id === item[3]?.id) && <TouchableOpacity style={{ position: 'absolute', left: 59, top: 0 }} onPress={() => Play(item[3])} >
                    {item[3]?.icon}
                </TouchableOpacity>}
                {!selected1.some((elm) => elm?.id === item[4]?.id) && <TouchableOpacity style={{ position: 'absolute', left: 2, top: 160 }} onPress={() => Play(item[4])} >
                    {item[4]?.icon}
                </TouchableOpacity>}
                {!selected1.some((elm) => elm?.id === item[5]?.id) && <TouchableOpacity style={{ position: 'absolute', left: w - 120, top: 180 }} onPress={() => Play(item[5])} >
                    {item[5]?.icon}
                </TouchableOpacity>}
            </View>
        </View>
    </LevelWrapper>
}
const styles = StyleSheet.create({
    block1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    blockWrapper1: {
        width: '60%',
    },
    line: {
        borderWidth: 2,
        borderColor: '#F08143',
        marginVertical: 20,
        borderRadius: 5,
    },
    block2: {
        width: '40%',
        position: 'relative'
    },
    wrapper: {
        flexDirection: 'row'
    }
})