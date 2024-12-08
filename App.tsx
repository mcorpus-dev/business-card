import {
  StyleSheet,
  ScrollView,
  Image,
  View,
  Text,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import SocialButton from "./src/components/SocialButton";
import ProjectCard from "./src/components/ProjectCard";

import data from "./src/data";

export default function App() {
  const handleSocialButtonPress = (type: string, url: string) => {
    Linking.openURL(type === "email" ? `mailto:${url}` : url);
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

          <View style={styles.content}>
            <Image
              style={styles.avatar}
              source={{ uri: "https://i.pravatar.cc/300" }}
            />

            <View>
              <Text style={styles.name}>{data.name}</Text>
              <Text style={styles.designation}>{data.designation}</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 28 }}>
              {data.socials.map((social) => (
                <SocialButton
                  key={social.url}
                  icon={social.icon}
                  color={social.color}
                  onPress={() =>
                    handleSocialButtonPress(social.type, social.url)
                  }
                />
              ))}
            </View>

            <Text style={styles.bio}>{data.bio}</Text>

            <View>
              <Text style={styles.sectionTitle}>My Projects</Text>
              <ScrollView
                contentContainerStyle={{ gap: 12, padding: 12 }}
                horizontal
                showsHorizontalScrollIndicator={false}
              >
                {data.projects.map((project) => (
                  <ProjectCard
                    key={project.name}
                    name={project.name}
                    image={project.image}
                  />
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
  content: {
    alignItems: "center",
    marginTop: -75,
    gap: 16,
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
    fontSize: 28,
    fontWeight: "bold",
  },
  designation: {
    color: "grey",
  },
  bio: {
    color: "black",
    fontSize: 16,
    lineHeight: 20,
    paddingHorizontal: 12,
  },
  sectionTitle: {
    color: "grey",
    fontSize: 20,
    textAlign: "center",
  },
});
