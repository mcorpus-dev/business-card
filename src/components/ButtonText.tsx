import { StyleSheet, Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  title: string;
}

export default function ButtonText({ title, ...rest }: Props) {
  return (
    <Pressable {...rest}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "500",
    color: "dodgerblue",
  },
});
