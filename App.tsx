import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
  FlatList,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import TextButton from "./src/components/TextButton";
import Section from "./src/components/Section";
import ProjectCard from "./src/components/ProjectCard";

import data from "./src/data";

export default function App() {
  const handleSocial = (social: string) => {
    Linking.openURL(social);
  };

  const handleContactMe = () => {
    Linking.openURL(`mailto:${data.email}`);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            style={styles.banner}
            source={{
              uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
            }}
          />

          <View style={styles.content}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.avatar}
                source={{ uri: "https://i.pravatar.cc/300" }}
              />
              <Text style={styles.name}>{data.name}</Text>
              <Text style={styles.designation}>{data.designation}</Text>
            </View>

            <View style={styles.socialsContainer}>
              <TouchableOpacity
                onPress={() => handleSocial(data.social.github)}
              >
                <FontAwesome6 name="github" size={24} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleSocial(data.social.linkedin)}
              >
                <FontAwesome6 name="linkedin" size={24} color="black" />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleSocial(data.social.website)}
              >
                <FontAwesome6 name="link" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <TextButton text="Contact Me" onPress={handleContactMe} />

            <Text style={styles.bio}>{data.bio}</Text>

            <Section title="My Projects">
              <FlatList
                contentContainerStyle={styles.projectsContainer}
                data={data.projects}
                renderItem={({ item }) => <ProjectCard {...item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </Section>
          </View>
        </ScrollView>

        <StatusBar style="light" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  content: {
    marginTop: -80,
    alignItems: "center",
    gap: 20,
  },
  profileContainer: {
    alignItems: "center",
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80,
    borderColor: "white",
    borderWidth: 4,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
  },
  designation: {
    color: "grey",
  },
  socialsContainer: {
    flexDirection: "row",
    gap: 32,
  },
  bio: {
    paddingHorizontal: 12,
    fontSize: 16,
    lineHeight: 24,
  },
  projectsContainer: {
    gap: 12,
    paddingHorizontal: 12,
  },
});
