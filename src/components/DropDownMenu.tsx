import { Button, Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const DropDownMenu = ({ visible, onClose, items }: any) => {

    const [showModal, setShowModal] = useState(false)
    const [showWarning, SetshowWarning] = useState(false);

    return (
      
        visible ?
            <View style={{ backgroundColor: '#000',alignItems:'center',gap:20 }}>
                {items.map((item: any, index: any) => (
                    <TouchableOpacity key={index} onPress={() => { }}>
                        <Text style={{ color: '#fff',fontSize:24,fontWeight:'100' }}>{item.label}</Text>
                    </TouchableOpacity>
                ))}
                <TouchableOpacity onPress={onClose}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
            : null


    )
}

export default DropDownMenu

const styles = StyleSheet.create({


})