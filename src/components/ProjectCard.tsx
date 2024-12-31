import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";

interface Props {
  name: string;
  thumbnail: ImageSourcePropType;
}

export default function ProjectCard({ name, thumbnail }: Props) {
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
  name: {
    color: "grey",
    fontSize: 16,
    fontWeight: "500",
  },
  thumbnail: {
    height: 150,
    aspectRatio: 16 / 9,
    borderRadius: 12,
  },
});
