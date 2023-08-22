import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const WhyChooseUs = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'rgb(54, 54, 54)', paddingStart: 10 }}>
            <Text style={{ color: '#FEFEFD', fontSize: 30, textTransform: 'uppercase', marginTop: 20, marginBottom: 30, fontFamily: 'Poppins-SemiBold' }}>Why Choose Us</Text>
            <View style={{ gap: 20 ,marginBottom:50}}>

                <View style={{ flexDirection: 'column', gap: 10 }}>
                    <MaterialCommunityIcons style={{ marginBottom: 5 }} name='shield-check-outline' size={30} color={'#fff'} />
                    <Text style={{ textTransform: 'uppercase', color: '#FEFEFD', fontSize: 20 }}>SAFETY & SECURITY</Text>
                    <Text style={{ color: '#FEFEFD', fontSize: 16, maxWidth: '90%' }}>variations of passages of Lorem Ipsum available, but the majority have</Text>
                </View>
                <View style={{ flexDirection: 'column', gap: 10 }}>
                    <FontAwesome6 style={{ marginBottom: 5 }} name='helmet-safety' size={30} color={'#fff'} />
                    <Text style={{ textTransform: 'uppercase', color: '#FEFEFD', fontSize: 20 }}>SAFETY & SECURITY</Text>
                    <Text style={{ color: '#FEFEFD', fontSize: 16, maxWidth: '90%' }}>variations of passages of Lorem Ipsum available, but the majority have</Text>
                </View>
                <View style={{ flexDirection: 'column', gap: 10 }}>
                    <MaterialCommunityIcons style={{ marginBottom: 5 }} name='shield-check-outline' size={30} color={'#fff'} />
                    <Text style={{ textTransform: 'uppercase', color: '#FEFEFD', fontSize: 20 }}>SAFETY & SECURITY</Text>
                    <Text style={{ color: '#FEFEFD', fontSize: 16, maxWidth: '90%' }}>variations of passages of Lorem Ipsum available, but the majority have</Text>
                </View>
            </View>
        </View>
    )
}

export default WhyChooseUs

const styles = StyleSheet.create({})