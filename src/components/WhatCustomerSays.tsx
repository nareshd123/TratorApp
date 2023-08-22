import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const WhatCustomerSays = () => {
    return (
        <View style={{ flex: 1, marginBottom: 50 }}>
            <Text style={
                {
                    color: '#000',
                    fontSize: 26,
                    textTransform: 'uppercase',
                    marginTop: 60,
                    marginBottom: 60,
                    fontFamily: 'Poppins-SemiBold',
                    textAlign: 'center'

                }}>WHAT SAYS CUSTOMER
            </Text>


            <View style={{ flexDirection: 'column', gap: 50 }}>

                <View style={[, styles.card_container]}>
                    <Image resizeMode='contain'
                        style={
                            {
                                position: 'absolute',
                                top: '-12%',
                                alignSelf: 'center',
                                width: 150,

                            }
                        }
                        source={require('../assets/images/client-img1.png')} />

                    <View style={
                        {
                            position: 'absolute',
                            top: '60%'
                        }
                    }>

                        <Text style={{ textAlign: 'center', fontSize: 22, marginBottom: 1, color: '#000', fontFamily: 'Poppins-Medium' }}>Hannery</Text>
                        <Text style={{ textAlign: 'center' }}>It is a long established fact that a reader will be distracted by the readable content of a page</Text>
                    </View>
                </View>

                <View style={[, styles.card_container]}>
                    <Image resizeMode='contain'
                        style={
                            {
                                position: 'absolute',
                                top: '-12%',
                                alignSelf: 'center',
                                width: 150,

                            }
                        }
                        source={require('../assets/images/client-img2.png')} />

                    <View style={
                        {
                            position: 'absolute',
                            top: '60%'
                        }
                    }>

                        <Text style={{ textAlign: 'center', fontSize: 22, marginBottom: 1, color: '#000', fontFamily: 'Poppins-Medium' }}>Hannery</Text>
                        <Text style={{ textAlign: 'center' }}>It is a long established fact that a reader will be distracted by the readable content of a page</Text>
                    </View>
                </View>

            </View>


            <View style={{ marginVertical: 25 }}>
                <Image style={{ alignSelf: 'center' }} source={require('../assets/images/quick-icon.png')} />
            </View>
        </View>
    )
}

export default WhatCustomerSays

const styles = StyleSheet.create({
    card_container: {
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#f4f3f2',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        elevation: 15,
        shadowColor: '#aaa',
        marginHorizontal: 20,
        position: 'relative',
        height: 240


    },
})