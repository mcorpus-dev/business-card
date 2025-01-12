import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from "react-native";

interface TextButtonProps extends TouchableOpacityProps {
  title: string;
}

export default function TextButton({ title, ...rest }: TextButtonProps) {
  return (
    <TouchableOpacity {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "dodgerblue",
    fontSize: 16,
    fontWeight: "500",
  },
});
