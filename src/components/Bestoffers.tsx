import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { deviceWidth, deviceHeight } from './Dimension'
import { Button } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const offerItems = [
    { image: require('../assets/images/img-1.png'), name: 'Toyota car', price: 'Start per day $4500' },
    { image: require('../assets/images/img-2.png'), name: 'Toyota car', price: 'Start per day $4500' },
    { image: require('../assets/images/img-3.png'), name: 'Toyota car', price: 'Start per day $4500' },
    { image: require('../assets/images/img-1.png'), name: 'Toyota car', price: 'Start per day $4500' },
    { image: require('../assets/images/img-2.png'), name: 'Toyota car', price: 'Start per day $4500' },
    { image: require('../assets/images/img-3.png'), name: 'Toyota car', price: 'Start per day $4500' },
]

const Bestoffers = () => {
    return (
        <View style={{ flex: 1 ,marginBottom:50}}>
            <View style={{marginTop:40,marginBottom:10}}>
                <Text style={{ fontSize: 28, color: '#000', textTransform: 'uppercase', fontFamily: 'Poppins-Medium', textAlign: 'center' }}>Our best offers</Text>
            </View>

            {
                offerItems.map((item, index) => (

                    <View key={index} style={styles.card_container}>
                        <Image resizeMode='contain' style={styles.image} source={item.image} />
                        <Text style={styles.name_text}>{item.name}</Text>
                        <Text style={styles.price_text}>{item.price}</Text>
                        <Pressable>
                            <View style={[styles.btn, { padding: 10 }]}><Text style={{ color: '#fff', fontSize: 16, fontFamily: 'Poppins-Bold' }}>Book Now</Text></View>
                        </Pressable>
                    </View>

                ))
            }

        </View>

    )
}

export default Bestoffers

const styles = StyleSheet.create({

    card_container: {
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#f4f3f2',
        padding: 20,
        margin: 10,
        backgroundColor: '#fff',
        elevation: 15,
        shadowColor: '#aaa',

    },
    image: {
        height: deviceHeight / 3 - 50,
        width: '100%',
    },
    name_text: {
        color: '#000',
        fontFamily: "Poppins-Medium",
        fontSize: 28,
        marginTop: 10,
        textTransform: 'uppercase'
    },
    price_text: {
        color: '#787d62',
        fontFamily: 'Poppins-Light',
        marginBottom: 10,
        fontSize: 18,
    },
    btn: {
        width: 120,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fe5b29',
    },
})