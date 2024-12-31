import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import ButtonIcon from "./src/components/ButtonIcon";
import ButtonText from "./src/components/ButtonText";
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
      <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <StatusBar style="light" />

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

              <View style={styles.infoContainer}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.designation}>{data.designation}</Text>
              </View>

              <View style={styles.socialsContainer}>
                <ButtonIcon
                  icon={<FontAwesome6 name="github" size={24} color="black" />}
                  onPress={() => handleSocial(data.socials.github)}
                />
                <ButtonIcon
                  icon={
                    <FontAwesome6 name="linkedin" size={24} color="black" />
                  }
                  onPress={() => handleSocial(data.socials.linkedin)}
                />
                <ButtonIcon
                  icon={<FontAwesome6 name="link" size={24} color="black" />}
                  onPress={() => handleSocial(data.socials.website)}
                />
              </View>

              <ButtonText title="Contact Me" onPress={handleContactMe} />

              <Text style={styles.bio}>{data.bio}</Text>

              <Section title="Projects">
                <ScrollView
                  contentContainerStyle={styles.projectsContainer}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >
                  {data.projects.map((project) => (
                    <ProjectCard key={project.name} {...project} />
                  ))}
                </ScrollView>
              </Section>
            </View>
          </View>
        </ScrollView>
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
  body: {
    alignItems: "center",
    gap: 16,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: "white",
    marginTop: -75,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  designation: {
    color: "grey",
  },
  infoContainer: {
    alignItems: "center",
  },
  socialsContainer: {
    flexDirection: "row",
    gap: 20,
  },
  bio: {
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    paddingHorizontal: 12,
  },
  projectsContainer: {
    gap: 12,
    paddingHorizontal: 12,
  },
});
