import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../theme";
import {styles} from "./styles";
import {ITask} from '../../Interfaces';

type TasksProps = ITask & {
onTaskDone: (id: string) => void;
onTaskRemove: (id: string) => void;
}

export function Task({id, title, isTaskCompleted, onTaskDone, onTaskRemove}: TasksProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onTaskDone(id)}>
        <Feather name={isTaskCompleted ? "check-circle": "circle"} size={24} color={isTaskCompleted ? theme.colors.secondColor : theme.colors.textColorLigth } />
      </TouchableOpacity>
      <Text style={isTaskCompleted ? styles.taskDone : styles.taskCreate}>{title}</Text>
      <TouchableOpacity onPress={() => onTaskRemove(id)}>
        <Feather name="trash" size={24} color={theme.colors.iconColor} />
      </TouchableOpacity>
    </View>
  );
}
