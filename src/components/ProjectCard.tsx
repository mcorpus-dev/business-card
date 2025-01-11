import { StyleSheet, View, Image, Text } from "react-native";
import { ImageSourcePropType } from "react-native";

interface ProjectCardProps {
  thumbnail: ImageSourcePropType;
  name: string;
}

export default function ProjectCard({ thumbnail, name }: ProjectCardProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={thumbnail} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
  },
  thumbnail: {
    height: 150,
    aspectRatio: 16 / 9,
    borderRadius: 8,
  },
  name: {
    color: "grey",
    fontSize: 16,
    marginLeft: 8,
  },
});
