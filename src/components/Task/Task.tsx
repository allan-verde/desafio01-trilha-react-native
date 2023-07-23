import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { theme } from "../../styles/global";

import { Feather } from '@expo/vector-icons';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export type Task = {
  id: string;
  content: string;
  done: boolean;
}

type Props = {
  task: Task;
  onRemove: (id: string) => void;
  onToggleDone: (id: string) => void;
}

export function Task({ task, onRemove, onToggleDone }: Props) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={22}
        onPress={() => onToggleDone(task.id)}
        isChecked={task.done}
        fillColor={task.done ? theme.colors.purple : theme.colors.blue}
        iconStyle={{ 
          borderColor: task.done ? theme.colors.purple : theme.colors.blue,
          borderWidth: 2
        }}
        disableBuiltInState
      />
      <Text style={task.done ? styles.textLineThrough : styles.text}>{task.content}</Text>
      <TouchableOpacity style={styles.button} onPress={() => onRemove(task.id)}>
        <Feather
          name="trash-2"
          size={18}
          color={theme.colors.gray300}
          hoverColor={theme.colors.danger}
        />
      </TouchableOpacity>
    </View>
  )
}
