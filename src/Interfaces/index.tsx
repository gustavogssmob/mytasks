import { TextInput } from "react-native";

export interface ITask {
    id: string;
    title: string;
    isTaskCompleted: boolean;
}

export interface IInput {
    task: string;
    inputRef: React.RefObject<TextInput>
    onChangeText: (task: string) => void;  
    onPress: () => void;    
}