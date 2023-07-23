import { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { theme } from "../../styles/global";

type Props = TextInputProps;

export function Input({ style, ...props }: Props) {
  const [focused, setFocused] = useState(false);

  const handleInputFocus = () => {
    setFocused(true);
  };

  const handleInputBlur = () => {
    setFocused(false);
  };

  return (
    <TextInput
      onBlur={handleInputBlur}
      onFocus={handleInputFocus}
      focusable={focused}
      style={{
        borderWidth: 1,
        borderColor: focused ? theme.colors.purpleDark : "transparent",
        ...(style as object)
      }}
      {...props}
    />
  );
};
