import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import BannerSlider from '../components/BannerSlider'
import GlobalStyle from '../utils/GlobalStyle'
import DropDownSearch from '../components/DropDownSearch'
import Bestoffers from '../components/Bestoffers'


const Home = ({ navigation }: any) => {
    return (
        <View style={GlobalStyle.flex}>
            <ScrollView>
                <Header navigations={navigation} />
                <BannerSlider />
                <DropDownSearch />
                <Bestoffers/>
            </ScrollView>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({})