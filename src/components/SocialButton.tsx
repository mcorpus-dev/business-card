import { ReactNode } from "react";
import { Pressable, PressableProps } from "react-native";

interface SocialButtonProps extends PressableProps {
  icon: ReactNode;
}

export default function SocialButton({ icon, ...rest }: SocialButtonProps) {
  return <Pressable {...rest}>{icon}</Pressable>;
}
