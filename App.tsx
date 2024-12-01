import { StyleSheet, ScrollView, View, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import SocialButton from "./src/components/SocialButton";
import ProjectCard from "./src/components/ProjectCard";

import { socials, projects } from "./src/data";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["bottom"]}>
        <StatusBar style="light" />

        <ScrollView showsVerticalScrollIndicator={false}>
          <Image
            style={styles.banner}
            source={{
              uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
            }}
          />

          <View style={styles.body}>
            <Image
              style={styles.avatar}
              source={{ uri: "https://i.pravatar.cc/300" }}
            />
            <View>
              <Text style={styles.name}>Marc Corpus</Text>
              <Text style={styles.position}>React Native Developer</Text>
            </View>

            <View style={styles.socialsContainer}>
              {socials.map((social) => (
                <SocialButton key={social.id} {...social} />
              ))}
            </View>

            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </Text>

            <Text style={styles.projectsTitle}>My Projects</Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.projectsContainer}
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  body: {
    alignItems: "center",
    marginTop: -75,
    gap: 16,
    paddingHorizontal: 12,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "white",
  },
  name: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  position: {
    color: "dimgrey",
  },
  socialsContainer: {
    flexDirection: "row",
    gap: 20,
  },
  description: {
    color: "black",
    fontSize: 16,
    lineHeight: 24,
  },
  projectsTitle: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  projectsContainer: {
    gap: 12,
  },
});

export default App;
