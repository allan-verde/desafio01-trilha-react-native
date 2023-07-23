import { TouchableOpacity } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';

import { theme } from "../../styles/global";
import { useState } from "react";

type Props = {
  onPress: () => void;
};

export function Button({ onPress }: Props) {
  const [pressed, setPressed] = useState(false);

  const handlePressIn = () => {
    setPressed(true);
  };

  const handlePressOut = () => {
    setPressed(false);
  };

  return (
    <TouchableOpacity
      style={{
        height: 50,
        width: 50,
        backgroundColor: pressed ? theme.colors.blue : theme.colors.blueDark,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
      }}
      activeOpacity={1}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <AntDesign
        name="pluscircleo"
        size={18}
        color={theme.colors.gray100}
      />
    </TouchableOpacity>
  );
};
