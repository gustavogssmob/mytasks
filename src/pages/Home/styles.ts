import { StyleSheet } from "react-native";
import {theme} from '../../theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.backgroundColor
    },
    title:{
        fontSize: 20,
        marginTop: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.colors.primaryColor
    },
    tasks:{
        flexDirection: 'row',
        justifyContent: 'space-between',        
        marginHorizontal: 24, 
        marginTop: 20, 
        marginBottom: 20,
    },
    taskCreate: {
        fontSize: 18,
        fontFamily: theme.font_family.ligth,               
        color: theme.colors.textColorDark
    },
    taskFinish: {
        fontSize: 18,
        fontFamily: theme.font_family.ligth,             
        color: theme.colors.secondColor
    },
    areaTask:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    count:{
        color: theme.colors.textColorLigth,
        fontSize: 16,
        fontWeight: '300',
        marginLeft: 10,
        backgroundColor: theme.colors.primaryColor,
        padding: 5,
        borderRadius: 50
    }   
})
