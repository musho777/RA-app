import { TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { C1, C2, C3, C4, C5, C6, C7, O1, O2, O3, O4, O5, O7, PinkColor, PinkColor1, Red2 } from '../../assets/svg'

export const Level4_8 = ({ navigation }) => {
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
    const sound = new Sound('game48.mp3', Sound.MAIN_BUNDLE,
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
    const [selectedColor, setSelectedColor] = useState()
    const [active, setActive] = useState([false, false, false, false, false, false])
    const game = (i) => {
        let item = [...active]
        if (selectedColor == i) {
            item[i - 1] = true
            setTimeout(() => {
                musicSuccess.play();
            }, 100);
            setTimeout(() => {
                musicSuccess.stop();
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
        setActive(item)
    }

    useEffect(() => {
        let send = true
        active.map((elm, i) => {
            if (!elm) {
                send = false
            }
        })
        if (send) {
            setTimeout(() => {
                sound.stop()
                navigation.navigate('LevelScreen')
            }, 4000);
        }
    }, [active])

    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        <View style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ paddingHorizontal: 100, paddingVertical: 100, width: 150, height: 150, backgroundColor: "white", justifyContent: 'center', alignItems: 'center', position: 'relative', borderRadius: 10 }}>
                <TouchableOpacity
                    onPress={() => game(1)}
                    style={
                        [
                            active[0] && { backgroundColor: '#B3005F' },
                            { borderTopEndRadius: 4, borderTopStartRadius: 4, height: 25, width: 55, borderWidth: 1, borderBottomWidth: 0, id: 1 }
                        ]
                    } />
                <TouchableOpacity style={{ height: 25, width: 70, borderWidth: 1, borderBottomWidth: 0, backgroundColor: '#F3E03A' }} />
                <TouchableOpacity style={{ height: 25, width: 90, borderWidth: 1, borderBottomWidth: 0, backgroundColor: '#D26517' }} />
                <TouchableOpacity onPress={() => game(2)} style={[
                    active[1] && { backgroundColor: '#7EBD2E' },
                    { borderTopEndRadius: 4, borderTopStartRadius: 4, height: 25, width: 110, borderWidth: 1, borderBottomWidth: 0, }
                ]} />
                <TouchableOpacity onPress={() => game(3)} style={
                    [active[2] && { backgroundColor: '#A1D7E3' },
                    { borderTopEndRadius: 4, borderTopStartRadius: 4, height: 25, width: 130, borderWidth: 1, borderBottomWidth: 0, }
                    ]
                } />
                <TouchableOpacity style={{
                    borderTopEndRadius: 4, borderTopStartRadius: 4, height: 25, width: 150, borderWidth: 1, borderBottomWidth: 0,
                    backgroundColor: '#404EA4',
                }} />
                <TouchableOpacity style={{ borderRadius: 4, height: 25, width: 170, borderWidth: 1, backgroundColor: '#6529A6' }} />
            </View>
            <View style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ paddingHorizontal: 100, paddingVertical: 100, width: 150, height: 150, backgroundColor: "white", justifyContent: 'center', alignItems: 'center', position: 'relative', borderRadius: 10 }}>
                    <TouchableOpacity style={{ borderTopEndRadius: 4, borderTopStartRadius: 4, height: 25, width: 55, borderWidth: 1, borderBottomWidth: 0, backgroundColor: '#B3005F' }} />
                    <TouchableOpacity
                        onPress={() => game(4)}
                        style={[
                            active[3] && { backgroundColor: '#F3E03A' },
                            { borderTopEndRadius: 4, borderTopStartRadius: 4, height: 25, width: 70, borderWidth: 1, borderBottomWidth: 0 }
                        ]} />
                    <TouchableOpacity
                        onPress={() => game(5)}
                        style={[active[4] && { backgroundColor: '#D26517' }, { borderTopEndRadius: 4, borderTopStartRadius: 4, height: 25, width: 90, borderWidth: 1, borderBottomWidth: 0, }]} />
                    <TouchableOpacity style={{ height: 25, width: 110, borderWidth: 1, borderBottomWidth: 0, backgroundColor: '#7EBD2E' }} />
                    <TouchableOpacity style={{ height: 25, width: 130, borderWidth: 1, borderBottomWidth: 0, backgroundColor: '#A1D7E3' }} />
                    <TouchableOpacity onPress={() => game(6)} style={[
                        active[5] && { backgroundColor: '#404EA4' },
                        { borderTopEndRadius: 4, borderTopStartRadius: 4, height: 25, width: 150, borderWidth: 1, borderBottomWidth: 0, }
                    ]
                    } />
                    <TouchableOpacity
                        onPress={() => game(7)}
                        style={
                            [
                                active[6] && { backgroundColor: '#6529A6' },
                                { borderRadius: 4, height: 25, width: 170, borderWidth: 1 }
                            ]
                        }
                    />
                </View>
            </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 50 }}>
            <TouchableOpacity onPress={() => setSelectedColor(1)}>
                <C1 />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedColor(5)}>
                <C2 />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedColor(4)}>
                <C3 />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedColor(2)}>
                <C4 />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedColor(3)}>
                <C5 />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedColor(6)}>
                <C6 />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedColor(7)}>
                <C7 />
            </TouchableOpacity>
        </View>
    </LevelWrapper >
}   