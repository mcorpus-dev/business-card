import {
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  Text,
} from "react-native";

interface Props {
  name: string;
  image: ImageSourcePropType;
}

export default function ProjectCard({ name, image }: Props) {
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
  image: {
    height: 150,
    aspectRatio: 16 / 9,
    borderRadius: 12,
  },
  name: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
});
