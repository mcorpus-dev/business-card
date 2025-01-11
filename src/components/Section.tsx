import { PropsWithChildren } from "react";
import { StyleSheet, View, Text, StyleProp, ViewStyle } from "react-native";

interface SectionProps {
  title: string;
  containerStyle?: StyleProp<ViewStyle>;
}

export default function Section({
  title,
  children,
  containerStyle,
}: PropsWithChildren<SectionProps>) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>{title}</Text>

      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
  },
});
