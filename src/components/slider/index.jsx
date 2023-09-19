import React, { Component } from 'react'
import { AppRegistry, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Swiper from 'react-native-swiper'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    slide1: {
        height: windowHeight,
        width: windowWidth,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    slide2: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: windowHeight,
        width: windowWidth,
    },
    img: {
        width: 125,
        height: 125,
    },
})

export default SwiperComponent = ({ navigation }) => {
    return (
        <Swiper loop={false} vertical={false} >
            <View style={styles.slide1}>
                <TouchableOpacity onPress={() => navigation.navigate('Selection')}>
                    <Image style={styles.img} source={require('../../assets/img/image1.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Selection2')}>
                    <Image style={styles.img} source={require('../../assets/img/image2.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/image3.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/image4.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.slide1}>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/image5.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/image6.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/image7.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/image8.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.slide2}>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/image9.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={[styles.img, { marginHorizontal: 70 }]} source={require('../../assets/img/image10.png')} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.img} source={require('../../assets/img/image11.png')} />
                </TouchableOpacity>
            </View>
        </Swiper>
    )
}