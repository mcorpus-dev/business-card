import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";

type ProjectCardProps = {
  name: string;
  image: ImageSourcePropType;
};

export default function ProjectCard({ name, image }: ProjectCardProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  name: {
    color: "grey",
  },
  image: {
    height: 160,
    aspectRatio: 16 / 9,
    borderRadius: 12,
  },
});
