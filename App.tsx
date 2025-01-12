import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  Linking,
  FlatList,
} from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import SocialButton from "./src/components/SocialButton";
import TextButton from "./src/components/TextButton";
import Section from "./src/components/Section";
import ProjectCard from "./src/components/ProjectCard";

import data from "./src/data";

export default function App() {
  const handleSocial = (social: string) => {
    Linking.openURL(social);
  };

  const handleContact = () => {
    Linking.openURL(`mailto:${data.email}`);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex: 1 }}>
            <Image
              style={styles.banner}
              source={{
                uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
              }}
            />

            <View style={{ alignItems: "center", gap: 16 }}>
              <View style={{ alignItems: "center" }}>
                <Image
                  style={styles.avatar}
                  source={{ uri: "https://i.pravatar.cc/300" }}
                />
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.designation}>{data.designation}</Text>
              </View>

              <View style={{ flexDirection: "row", gap: 24 }}>
                <SocialButton
                  icon={<FontAwesome6 name="github" size={24} color="black" />}
                  onPress={() => handleSocial(data.socials.github)}
                />
                <SocialButton
                  icon={
                    <FontAwesome6 name="linkedin" size={24} color="black" />
                  }
                  onPress={() => handleSocial(data.socials.linkedin)}
                />
                <SocialButton
                  icon={<FontAwesome6 name="link" size={24} color="black" />}
                  onPress={() => handleSocial(data.socials.website)}
                />
              </View>

              <TextButton title="Contact Me" onPress={handleContact} />

              <Text style={styles.bio}>{data.bio}</Text>
            </View>

            <Section containerStyle={{ marginTop: 20 }} title="Projects">
              <FlatList
                data={data.projects}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <ProjectCard {...item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap: 12, paddingHorizontal: 12 }}
              />
            </Section>
          </View>
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
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: "white",
    borderWidth: 4,
    marginTop: -75,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
  },
  designation: {
    color: "grey",
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "center",
    paddingHorizontal: 12,
  },
});
