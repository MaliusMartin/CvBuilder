import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useEffect } from "react";
// import mobileAds from "react-native-google-mobile-ads";
import { ThemeProvider } from "../components/ThemeContext";
import "../global.css";


SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "IBMPlexSerif-Bold": require("../assets/fonts/IBMPlexSerif-Bold.ttf"),
    "IBMPlexSerif-BoldItalic": require("../assets/fonts/IBMPlexSerif-BoldItalic.ttf"),
    "IBMPlexSerif-ExtraLight": require("../assets/fonts/IBMPlexSerif-ExtraLight.ttf"),
    "IBMPlexSerif-ExtraLightItalic": require("../assets/fonts/IBMPlexSerif-ExtraLightItalic.ttf"),
    "IBMPlexSerif-Italic": require("../assets/fonts/IBMPlexSerif-Italic.ttf"),
    "IBMPlexSerif-Light": require("../assets/fonts/IBMPlexSerif-Light.ttf"),
    "IBMPlexSerif-LightItalic": require("../assets/fonts/IBMPlexSerif-LightItalic.ttf"),
    "IBMPlexSerif-Medium": require("../assets/fonts/IBMPlexSerif-Medium.ttf"),
    "IBMPlexSerif-MediumItalic": require("../assets/fonts/IBMPlexSerif-MediumItalic.ttf"),
    "IBMPlexSerif-Regular": require("../assets/fonts/IBMPlexSerif-Regular.ttf"),
    "IBMPlexSerif-SemiBold": require("../assets/fonts/IBMPlexSerif-SemiBold.ttf"),
    "IBMPlexSerif-SemiBoldItalic": require("../assets/fonts/IBMPlexSerif-SemiBoldItalic.ttf"),
    "IBMPlexSerif-Thin": require("../assets/fonts/IBMPlexSerif-Thin.ttf"),
    "IBMPlexSerif-ThinItalic": require("../assets/fonts/IBMPlexSerif-ThinItalic.ttf"),
  });

  // useEffect(() => {
  //   if (error) throw error;
  //   if (fontsLoaded) SplashScreen.hideAsync();
  // }, [fontsLoaded, error]);

  // if (!fontsLoaded && !error) return null;

  useEffect(() => {
    // Initialize AdMob once
    // mobileAds()
    //   .initialize()
    //   .then((adapterStatuses) => {
    //     console.log("AdMob initialized:", adapterStatuses);
    //   });

    // Handle font loading & splash screen hiding
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  // If fonts are not loaded, return null to prevent rendering
  if (!fontsLoaded && !error) return null;


  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(settings)" options={{ headerShown: false }} />
      </Stack>
        <StatusBar style="auto" />
    </ThemeProvider>
  );
};

export default RootLayout;
