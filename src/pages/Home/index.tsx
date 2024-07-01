import { View, Text, FlatList, Alert, TextInput } from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Task } from "../../components/Task";
import { ITask } from "../../Interfaces";
import { Empty } from "../../components/Empty";
import { uuid } from "../../../utils/uuid";

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTask, setNewTask] = useState("");
  const newTaskRef = useRef<TextInput>(null);

  const totalTasksCreated = tasks.length;
  const totalTasksDone = tasks.filter(({isTaskCompleted}) => isTaskCompleted).length;

  function handleAddTask() {
    if (newTask !== "" && newTask.length >= 5) {
      setTasks((tasks) => [
        ...tasks,
        { id: uuid(), isTaskCompleted: false, title: newTask.trim() },
      ]);
      setNewTask("");
    } else {
      Alert.alert(
        "Operação inválida!",
        "Digite uma tarefa com mais de 5 caracteres"
      );
    }
    newTaskRef.current?.blur()
  }
  function handleRemoveTask(id: string) {
    Alert.alert("Excluir tarefa", "Deseja remover essa tarefa?", [
      {
        text: "Sim",
        style: "default",
        onPress: () => {
          setTasks((task) => task.filter((task) => task.id !== id));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  function handleDoneTask(id: string) {
    setTasks((task) =>
      task.map((task) => {
        task.id === id ? (task.isTaskCompleted = !task.isTaskCompleted) : null;
        return task;
      })
    );
  }
  return (
    <View style={styles.container}>
      <Header />
      <Input 
      inputRef = {newTaskRef}
      task={newTask} 
      onChangeText={setNewTask} 
      onPress={handleAddTask}
       />
      <View style={styles.tasks}>
        <View style={styles.areaTask}>
          <Text style={styles.taskCreate}>Criadas: </Text>
          <Text style={styles.count}>{totalTasksCreated}</Text>
        </View>
        <View style={styles.areaTask}>
          <Text style={styles.taskFinish}>Concluídas: </Text>
          <Text style={styles.count}>{totalTasksDone}</Text>
        </View>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(task) => task.id!}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Task
            key={item.id}
            onTaskDone={() => handleDoneTask(item.id)}
            onTaskRemove={() => handleRemoveTask(item.id)}
            {...item}
          />
        )}
        ListEmptyComponent={<Empty />}
      />
    </View>
  );
}
