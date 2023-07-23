import { useState } from "react";

import { View, Image, Text, FlatList, Alert } from "react-native";

import { styles } from "./styles";
import { theme } from "../../styles/global";

import { Task } from "../../components/Task/Task";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [text, setText] = useState<string>("");

  const handleAddTask = () => {
    if (!text) return;

    const newTask = {
      id: String(new Date().getTime()),
      content: text,
      done: false,
    };

    setTasks(oldState => [
      newTask,
      ...oldState.filter(task => !task.done),
      ...oldState.filter(task => task.done),
    ]);

    setText("");
  };

  const handleToggleTaskDone = (id: string) => {
    setTasks(oldState => {
      const newList = oldState
        .map(task => {
          if (task.id === id) {
            Object.assign(task, { done: !task.done });
          }
    
          return task;
        })
        .sort((a, b) => Number(a.done) - Number(b.done));

      return newList;
    });
  };

  const handleRemoveTask = (id: string) => {
    Alert.alert("Remover item", "Tem certeza que você deseja remover esse item?", [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => setTasks(oldState => oldState.filter(task => task.id !== id))
      }
    ]);
  };

  const tasksCreated = tasks.length;
  const tasksDone = tasks.filter(task => task.done).length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.info}>
          <Input
            placeholder="Adicione uma nove tarefa"
            value={text}
            onChangeText={setText}
            style={styles.input}
            placeholderTextColor={theme.colors.gray300}
          />
          <Button onPress={handleAddTask} />
        </View>
        <View style={styles.infoNumbers}>
          <View style={styles.infoItem}>
            <Text style={styles.textInfoItemOne}>Criadas</Text>
            <Text style={styles.textInfoItemNumber}>{tasksCreated}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.textInfoItemTwo}>Concluidas</Text>
            <Text style={styles.textInfoItemNumber}>{tasksDone}</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Task
              task={item}
              onRemove={handleRemoveTask}
              onToggleDone={handleToggleTaskDone}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View
              style={styles.empty}
            >
              <Image
                source={require('../../assets/images/clipboard.png')}
                style={styles.emptyImage}
              />
              <Text style={styles.emptyTextBold}>Você ainda não tem tarefas cadastradas</Text>
              <Text style={styles.emptyText}>Crie tarefas e organize seus itens a fazer</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};
