import { ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";

interface Props extends PressableProps {
  icon: ReactNode;
}

export default function ButtonIcon({ icon, ...rest }: Props) {
  return <Pressable {...rest}>{icon}</Pressable>;
}
