import { Image, TouchableOpacity, View } from 'react-native'
import { LevelWrapper } from '../../components/LevelWrapper'
import { ImgButton } from '../../components/ImgButton'
import { useEffect, useState } from 'react'
import Sound from 'react-native-sound'
import { C1, C2, C3, C4, C5, C6, C7, PinkColor, PinkColor1, Red2 } from '../../assets/svg'

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


    const [img1, setImg1] = useState([
        <Image source={require('../../assets/img/level4/game8/p1.png')} />,
        <Image source={require('../../assets/img/level4/game8/p2.png')} />

    ])




    return <LevelWrapper img2={require('../../assets/img/1.2bg.png')} img={require('../../assets/img/1.2bgo.png')} >
        <View style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ width: 150, height: 150, backgroundColor: "white", justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 50, height: 100 }}>
                    <Image style={{ width: 50, height: 100 }} source={require('../../assets/img/level4/game8/1.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ position: "absolute" }}>
                    <Image style={{ width: 50, height: 100 }} source={require('../../assets/img/level4/game8/2.png')} />
                </TouchableOpacity >
                <TouchableOpacity style={{ position: "absolute" }}>
                    <Image style={{ width: 50, height: 100 }} source={require('../../assets/img/level4/game8/3.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ position: "absolute" }}>
                    <Image style={{ width: 50, height: 100 }} source={require('../../assets/img/level4/game8/4.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ position: "absolute" }}>
                    <Image style={{ width: 70, height: 100 }} source={require('../../assets/img/level4/game8/5.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ position: "absolute" }}>
                    <Image style={{ width: 70, height: 100 }} source={require('../../assets/img/level4/game8/6.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{ position: "absolute" }}>
                    <Image style={{ width: 70, height: 100 }} source={require('../../assets/img/level4/game8/7.png')} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 50 }}>
            <TouchableOpacity>
                <C1 />
            </TouchableOpacity>
            <TouchableOpacity>
                <C2 />
            </TouchableOpacity>
            <TouchableOpacity>
                <C3 />
            </TouchableOpacity>
            <TouchableOpacity>
                <C4 />
            </TouchableOpacity>
            <TouchableOpacity>
                <C5 />
            </TouchableOpacity>
            <TouchableOpacity>
                <C6 />
            </TouchableOpacity>
            <TouchableOpacity>
                <C7 />
            </TouchableOpacity>
        </View>
    </LevelWrapper >
}   