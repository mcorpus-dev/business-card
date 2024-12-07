import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

interface Props extends TouchableOpacityProps {
  icon: string;
  color: string;
}

export default function SocialButton({ icon, color, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7}>
      <FontAwesome6 name={icon} size={24} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
