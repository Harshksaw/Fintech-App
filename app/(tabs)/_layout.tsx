
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Link, Stack, useRouter } from 'expo-router';

import { useEffect } from 'react';



// const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

// Cache the Clerk JWT

// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [loaded, error] = useFonts({
  //   SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  //   ...FontAwesome.font,
  // });

  // // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  // useEffect(() => {
  //   if (error) throw error;
  // }, [error]);

  // useEffect(() => {
  //   if (loaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return null;
  // }

  return <RootLayoutNav />;
}

const RootLayoutNav = () => {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
};