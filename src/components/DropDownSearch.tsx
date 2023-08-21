import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'


const DropDownSearch = () => {
    const [selectedValue, setSelectedValue] = useState('option1');

    return (
        <View style={styles.wrapper}>
            <View style={{}}>
                <Text style={{ fontFamily: 'Poppins-Light', fontSize: 24, color: '#fff' }}>Search Your Best Cars</Text>
                <Text style={{ fontFamily: 'Poppins-Light', fontSize: 16, color: '#fff' }}>Using 'Content here, content here', making it look like readable</Text>
            </View>

            <View style={{ paddingHorizontal: 20, marginTop: 30, flexDirection: 'column', gap: 15 }}>
                <Picker
                    style={{ backgroundColor: '#fff' }}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Option 1" value="option1" />
                    <Picker.Item label="Option 2" value="option2" />
                    <Picker.Item label="Option 3" value="option3" />
                </Picker>

                <Picker
                    style={{ backgroundColor: '#fff' }}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Option 1" value="option1" />
                    <Picker.Item label="Option 2" value="option2" />
                    <Picker.Item label="Option 3" value="option3" />
                </Picker>
                <Picker
                    style={{ backgroundColor: '#fff' }}
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Option 1" value="option1" />
                    <Picker.Item label="Option 2" value="option2" />
                    <Picker.Item label="Option 3" value="option3" />
                </Picker>
                <Pressable
                    style={{ backgroundColor: '#fe5b29', padding: 20, width: 200, alignItems: 'center', alignSelf: 'center' }}
                >
                    <Text style={{fontSize:18,textTransform:'uppercase',color:'#fff',fontWeight:'900', }}>Search Now</Text>
                </Pressable>
            </View>

        </View>
    )
}

export default DropDownSearch

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        backgroundColor: 'rgb(54, 54, 54)'
    }

})