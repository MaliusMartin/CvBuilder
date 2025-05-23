import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";
import { AppState, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";
import { useTheme } from "../components/ThemeContext";
import icons from "../constants/icons";
// import { useAppOpenAd, TestIds } from "react-native-google-mobile-ads";


// // Dynamic ad unit ID based on environment
// const adUnitId = __DEV__ ? TestIds.APP_OPEN : "ca-app-pub-5649412992212534/3753249037"; 

export default function Index() {
  const [greeting, setGreeting] = useState("");
  const { isDarkMode } = useTheme(); // Get theme state
//   const [hasShownAdThisSession, setHasShownAdThisSession] = useState(false); // Track if ad has been shown this session
  const appState = useRef(AppState.currentState);

  // Initialize App Open Ad
//   const { isLoaded, isClosed, load, show, error } = useAppOpenAd(adUnitId, {
//     requestNonPersonalizedAdsOnly: true, // Ensures non-personalized ads for testing/compliance
//     keywords: ["tools", "productivity"], // Keywords relevant to your app
//   });

    // Preload the ad when the component mounts
    // useEffect(() => {
    //   load();
    // }, [load]);

   // Handle app state changes to show ad when app comes to foreground
//    useEffect(() => {
//     const subscription = AppState.addEventListener("change", (nextAppState) => {
//       if (
//         appState.current.match(/inactive|background/) &&
//         nextAppState === "active" &&
//         isLoaded &&
//         !hasShownAdThisSession
//       ) {
//         show();
//         setHasShownAdThisSession(true);
//       }
//       appState.current = nextAppState;
//     });

//     // Load ad immediately on first mount if app is active
//     if (isLoaded && !hasShownAdThisSession && appState.current === "active") {
//       show();
//       setHasShownAdThisSession(true);
//     }

//     return () => {
//       subscription.remove();
//     };
//   }, [isLoaded, show, hasShownAdThisSession]);

//   // Log ad loading errors for debugging
//   useEffect(() => {
//     if (error) {
//       console.error("App Open Ad failed to load:", error);
//     }
//   }, [error]);

//   // Reload ad if it’s closed (e.g., user dismisses it)
//   useEffect(() => {
//     if (isClosed) {
//       load(); // Preload the next ad
//     }
//   }, [isClosed, load]);

  // Set greeting based on time
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour > 4 && currentHour < 12) {
      setGreeting("Good Morning");
    } else if (currentHour > 12 && currentHour < 16) {
      setGreeting("Good Afternoon");
    } else if(currentHour > 16 && currentHour < 23) {
      setGreeting("Good Evening");
    } else{
      setGreeting("Good Night");
    }
  }, []);

  return (
    <SafeAreaView className={`flex-1 ${isDarkMode ? "bg-primary" : "bg-white"}`}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center items-center px-4">
          {/* Greeting Text */}
          <Text
            className={`text-3xl font-pbital text-center ${
              isDarkMode ? "text-white" : "text-primary"
            }`}
          >
            {greeting}!
          </Text>

          {/* Welcome Text */}
          <Text
            className={`text-xl font-pbold text-center ${
              isDarkMode ? "text-white" : "text-primary"
            }`}
          >
            Welcome to
          </Text>

          {/* Logo */}
          <Image
            source={icons.logo}
            style={{ width: 300, height: 200 }}
            tintColor={isDarkMode ? "#fff" : "#353F54"}
            resizeMode="contain"
            accessibilityLabel="App Logo"
          />

          {/* App Title */}
          <View className="mt-5 mb-3">
            <Text className="text-3xl font-pbold text-center">
              <Text className="text-secondary">Scan & Generate </Text>
              {"\n"}
              <Text
                className={`text-sm font-pregular ${
                  isDarkMode ? "text-white" : "text-primary"
                }`}
              >
                Qrcode & Barcode instantly
              </Text>
            </Text>
          </View>

          {/* Continue Button */}

        <CustomButton
          title="Continue to Home"
          handlePress={() => router.push("/home")}
          containerStyles="bg-secondary w-full py-4 rounded-lg"
          textStyles="text-white text-lg font-psemibold"
        />
        </View>

        {/* Footer */}
        <Text
          className={`text-sm font-pregular mt-7 text-center pb-4 ${
            isDarkMode ? "text-white" : "text-primary"
          }`}
        >
          Powered by Buda Technologies
        </Text>
      </ScrollView>

      <StatusBar backgroundColor={isDarkMode ? "#161622" : "#FFFFFF"} style={isDarkMode ? "light" : "dark"} />
    </SafeAreaView>
  );
}
