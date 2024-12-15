import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  Linking,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import SocialButton from "./src/components/SocialButton";
import ProjectCard from "./src/components/ProjectCard";

import data from "./src/data";

export default function App() {
  const handleSocialButton = (url: string) => {
    Linking.openURL(url);
  };

  const handleContactMe = () => {
    Linking.openURL(`mailto:${data.email}`);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
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

            <View style={{ alignItems: "center" }}>
              <Text style={styles.name}>{data.name}</Text>
              <Text style={styles.designation}>{data.designation}</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 24 }}>
              <SocialButton
                icon={<FontAwesome6 name="github" size={24} color="black" />}
                onPress={() => handleSocialButton(data.social.github)}
              />

              <SocialButton
                icon={<FontAwesome6 name="linkedin" size={24} color="black" />}
                onPress={() => handleSocialButton(data.social.linkedin)}
              />

              <SocialButton
                icon={<FontAwesome6 name="globe" size={24} color="black" />}
                onPress={() => handleSocialButton(data.social.website)}
              />
            </View>

            <Text style={styles.bio}>{data.bio}</Text>

            <TouchableOpacity
              hitSlop={12}
              activeOpacity={0.7}
              onPress={handleContactMe}
            >
              <Text style={styles.contactButton}>Contact Me</Text>
            </TouchableOpacity>

            <View>
              <Text style={styles.sectionTitle}>My Projects</Text>
              <ScrollView
                contentContainerStyle={styles.projectsContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {data.projects.map((project) => (
                  <ProjectCard key={project.name} {...project} />
                ))}
              </ScrollView>
            </View>
          </View>

          <StatusBar style="light" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
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
  bio: {
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  contactButton: {
    fontSize: 16,
    color: "dodgerblue",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  projectsContainer: {
    gap: 16,
    padding: 16,
  },
});
