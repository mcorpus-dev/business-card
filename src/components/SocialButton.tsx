import { ReactNode } from "react";
import { TouchableOpacity } from "react-native";

interface Props {
  icon: ReactNode;
  onPress: () => void;
}

export default function SocialButton({ icon, onPress }: Props) {
  return (
    <TouchableOpacity hitSlop={12} activeOpacity={0.7} onPress={onPress}>
      {icon}
    </TouchableOpacity>
  );
}
