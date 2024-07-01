import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
    container: {         
        margin: 5,
        padding: 20,   
        backgroundColor: theme.colors.primaryColor,    
        flexDirection: 'row',        
        alignItems: 'center',
        borderRadius: 5
    },
    taskCreate:{
        flex: 1,
        fontFamily: theme.font_family.ligth,
        color: theme.colors.textColorLigth,
        marginHorizontal: 8,
        textDecorationLine: 'none'
    },
    taskDone:{
        flex: 1,
        fontFamily: theme.font_family.ligth,
        color: theme.colors.secondColor,
        marginHorizontal: 8,
        textDecorationLine: 'line-through'
    }
})
