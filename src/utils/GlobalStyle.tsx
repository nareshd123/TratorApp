import { StyleSheet } from "react-native";

export default StyleSheet.create({

    flex: {
        flex: 1
    },
    row_container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    row_container_justify: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    col_container: {
        flexDirection: 'column',
        gap: 20,
    }

})