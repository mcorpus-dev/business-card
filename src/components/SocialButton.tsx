import { StyleSheet, Pressable, Linking } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import { ISocial } from "../types";

const SocialButton = ({ name, url, color }: ISocial) => {
  const handlePress = () => {
    Linking.openURL(name === "at" ? `mailto:${url}` : `${url}`);
  };

  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed}
      onPress={handlePress}
    >
      <FontAwesome6 name={name} size={24} color={color} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default SocialButton;
