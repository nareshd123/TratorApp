import { Button, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../utils/GlobalStyle'
import { deviceHeight, deviceWidth } from './Dimension'


const BannerSlider = () => {
    return (

        <View style={styles.banner_slider}>
            <View style={styles.slider_container}>
                <Text style={styles.slider_header_1}>Car Rent</Text>
                <Text style={styles.slider_header_2}>For You</Text>
                <Text style={[styles.text, { marginBottom: 40 }]}>There are many variations of passages of Lorem Ipsum available, but the majority</Text>
                <View style={GlobalStyle.row_container}>
                    <Pressable>
                        <View style={styles.btn}><Text style={styles.btn_text}>Read More</Text></View>
                    </Pressable>
                    <Pressable
                        onPress={() => { }}>
                        <View style={[styles.btn, { backgroundColor: 'black' }]}><Text style={styles.btn_text}>Contact Us</Text></View>
                    </Pressable>
                </View>
            </View>
            <View style={styles.about_us_container}>
                <Text style={styles.about_header}>About <Text style={[styles.about_header, { color: '#fe5b29' }]}>Us</Text></Text>
                <Text style={styles.text}>going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined </Text>
                <Pressable>
                    <View style={[styles.btn, { marginBottom: 20 }]}><Text style={styles.btn_text}>Read More</Text></View>
                </Pressable>
            </View>
            <View style={{ marginTop: 60 }}>
                <Image style={{ height: deviceHeight / 3, width: deviceWidth, marginBottom: 60 }} resizeMode='contain' source={require('../assets/images/about-img.png')} />
            </View>
        </View>
    )
}

export default BannerSlider

const styles = StyleSheet.create({
    banner_slider: {
        backgroundColor: '#fff',
        paddingStart: 20,
        paddingEnd: 50,
    },
    slider_container: {
        paddingTop: 80,
        paddingBottom: 50
    },
    about_us_container: {
        paddingVertical: 20,
    },
    slider_header_1: {
        fontSize: 55,
        color: '#2C2C2C',
        fontFamily: 'Anton',
        fontWeight: '900',
    },
    slider_header_2: {
        fontSize: 55,
        color: '#fe5b29',
        fontWeight: '900',
        fontFamily: 'Anton'
    },
    text: {
        color: '#403F3F',
        lineHeight: 24,
        fontWeight: '300',
        fontSize: 16,
        textDecorationColor: 'rgb(64,63,63)',
        marginVertical: 20,
    },

    btn: {
        width: 120,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fe5b29',
    },
    btn_text: {
        fontSize: 16,
        color: '#FCF8F8',
        fontWeight: '400',
        padding: 10
    },
    btn_hover: {
        backgroundColor: '#FCF8F8',
    },
    about_header: {
        color: '#3B3B3B',
        fontSize: 35,
        textTransform: 'uppercase',
        fontWeight: '900',
        fontFamily: 'Anton'
    }

})