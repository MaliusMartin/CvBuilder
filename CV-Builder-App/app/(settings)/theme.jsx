import { View, Text, SafeAreaView, ScrollView, Image, Switch, TouchableOpacity } from "react-native";
import { useTheme } from "../../components/ThemeContext";
import icons from "../../constants/icons";
import { useRouter } from "expo-router";

const Theme = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const router = useRouter();

  return (
    <SafeAreaView className={`flex-1 ${isDarkMode ? "bg-primary" : "bg-white"} mt-6`}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <TouchableOpacity
                    onPress={() => router.back()}
                    className="p-4"
                    accessibilityLabel="Go Back"
                  >
                    <Text className={`font-pbold  ${isDarkMode ? "text-white" : "text-primary"} mb-4`}>Back</Text>
                  </TouchableOpacity>
        <View className="items-center mb-6">
          <Text className={`text-xl font-pbold ${isDarkMode ? "text-white" : "text-primary"}`}>
            Theme
          </Text>
          <Image
            source={icons.theme}
            style={{ width: 40, height: 40 }}
            className="mt-4"
            tintColor={isDarkMode ? "#fff" : "#353F54"}
            resizeMode="contain"
          />
        </View>

        <View className="flex-row items-center justify-between bg-secondary rounded-2xl px-4 py-3">
          <Text className={`text-lg font-pmedium ${isDarkMode ? "text-white" : "text-primary"}`}>
            {isDarkMode ? "Dark Mode" : "Light Mode"}
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            thumbColor={isDarkMode ? "#fff" : "#3C9EEA"}
            trackColor={{ false: "#D1D5DB", true: "#3C9EEA" }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Theme;
