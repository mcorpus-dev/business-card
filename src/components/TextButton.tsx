import { StyleSheet, TouchableOpacity, Text } from "react-native";

type TextButtonProps = {
  text: string;
  onPress: () => void;
};

export default function TextButton({ text, onPress }: TextButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "dodgerblue",
    fontSize: 16,
  },
});
