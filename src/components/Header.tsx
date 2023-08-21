import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import DropDownMenu from './DropDownMenu';


const Header = ({ navigations }: any) => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const menuItems = [
        { label: 'Home' },
        { label: 'About' },
        { label: 'Services' },
        { label: 'Vehicles' },
        { label: 'Client' },
        { label: 'Contact' },
    ];

    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    console.log(isDropdownVisible);

    return (

        <View style={styles.header}>
            <View style={styles.header_conatiner}>

                <Text style={[styles.text,]}>Trator</Text>
                <TouchableOpacity
                    onPress={() => setDropdownVisible(!isDropdownVisible)}
                    style={{ backgroundColor: '#fff', paddingHorizontal: 8, borderRadius: 5 }}
                >
                    <Icon name='menu' size={30} color={"#ccc"} />
                </TouchableOpacity>

            </View>
            <View>
                <DropDownMenu
                    visible={isDropdownVisible}
                    onClose={() => setDropdownVisible(false)}
                    items={menuItems}
                />
            </View>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'black',
        paddingTop: 20,
        flexDirection: 'column',
        gap: 20
    },
    header_conatiner: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingStart: 30,
        paddingEnd: 20,
    },

    text: {
        color: 'white',
        textTransform: 'capitalize',
        fontWeight: '800',
        letterSpacing: 1,
        fontSize: 26


    }

})