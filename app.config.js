import "dotenv/config";

export default {
  expo: {
    name: "Jo Mai Mai",
    slug: "JoMaiMai",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#b1c6f4",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#b1c6f4",
      },
      package: "com.ericriera.jomaimai",
      googleServicesFile: process.env.GOOGLE_SERVICES_FILE,
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    "plugins": [
      [
        "expo-font",
        {
          "fonts": ["./assets/fonts/horizon.otf"]
        }
      ]
    ],
    extra: {
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      eas: {
        projectId: process.env.EXPO_PROJECT_ID,
      },
    },
  },
};
