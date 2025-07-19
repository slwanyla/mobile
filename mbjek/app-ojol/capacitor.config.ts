import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mbjek.appojol',
  appName: 'app-ojol',
  webDir: 'www',
  plugins: {
    Geolocation: {
      enableHighAccuracy: true
    }
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
