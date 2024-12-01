import { StyleSheet, View, Image, Text } from "react-native";

import { IProject } from "../types";

const ProjectCard = ({ image, text }: IProject) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  image: {
    height: 150,
    aspectRatio: 16 / 9,
    borderRadius: 12,
  },
  text: {
    color: "dimgrey",
  },
});

export default ProjectCard;
