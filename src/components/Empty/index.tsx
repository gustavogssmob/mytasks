import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import ListIcon from "../../assets/list.svg";

export function Empty() {
  return (
    <View style={styles.container}>
      <ListIcon style={styles.listIcon} />
      <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={[styles.textBold, styles.textRegular]}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}
