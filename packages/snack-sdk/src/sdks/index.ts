import { SDKSpec } from './types';

const assets = {
  // @expo/snack-static/react-native-logo.png is an alias that is
  // implemented in the runtime, and uses by the react-native image docs
  '@expo/snack-static/react-native-logo.png': '*',
};

const unimodules: { [name: string]: '*' } = {
  '@unimodules/core': '*',
  '@unimodules/react-native-adapter': '*',
  'unimodules-barcode-scanner-interface': '*',
  'unimodules-camera-interface': '*',
  'unimodules-constants-interface': '*',
  'unimodules-face-detector-interface': '*',
  'unimodules-file-system-interface': '*',
  'unimodules-font-interface': '*',
  'unimodules-image-loader-interface': '*',
  'unimodules-permissions-interface': '*',
  'unimodules-sensors-interface': '*',
  'unimodules-task-manager-interface': '*',
};

const sdks: { [version: string]: SDKSpec } = {
  '38.0.0': {
    version: '^38.0.0',
    coreModules: {
      ...assets,
      ...unimodules,
      expo: '38.0.10',
      react: '16.11.0',
      'react-native': '0.62.2',
      'react-dom': '*',
      'react-native-web': '*',
    },
    bundledModules: {
      // Packages that require special initialisation (see Modules.tsx)
      'expo-asset': '*',
      'react-native-gesture-handler': '*',
      // 'react-native-vector-icons': '*',
      '@expo/vector-icons': '*',
      // Packages that are used internally by the runtime
      // 'expo-analytics-amplitude': '*',
      'expo-barcode-scanner': '*',
      'expo-constants': '*',
      'expo-file-system': '*',
      // 'expo-keep-awake': '*',
      'react-native-view-shot': '*',
      // Packages that are depended on by one of the packages above
      'expo-font': '*', // used by "expo"
      // 'expo-linking': '*', // used by "expo"
      // 'expo-permissions': '*', // used by "expo"
      // 'expo-splash-screen': '*', // used by "expo"
      'prop-types': '*', // *
      // Packages that are not really required
      // TODO: THESE SHOULD BE REMOVED ONCE THE SNACK-SDK HANDLES ADDING/REMOVING/UPDATING DEPENDENCIES BETTER
      'expo-camera': '*',
      'expo-gl': '*',
      'expo-image-picker': '*',
      'expo-linear-gradient': '*',
    },
  },
  '39.0.0': {
    version: '^39.0.0',
    coreModules: {
      ...assets,
      ...unimodules,
      expo: '39.0.5',
      react: '16.13.1',
      'react-native': '0.63.2',
      'react-dom': '*',
      'react-native-web': '*',
    },
    bundledModules: {
      // Packages that require special initialisation (see Modules.tsx)
      'expo-asset': '*',
      'react-native-gesture-handler': '*',
      // 'react-native-vector-icons': '*',
      '@expo/vector-icons': '*',

      // Packages that are used internally by the runtime
      'expo-analytics-amplitude': '*',
      'expo-barcode-scanner': '*',
      'expo-constants': '*',
      'expo-file-system': '*',
      'expo-keep-awake': '*',
      'expo-updates': '*',
      'react-native-view-shot': '*',
      '@react-native-community/async-storage': '*',

      // Packages that are depended on by the "expo" package
      'expo-font': '*',
      'expo-linking': '*',
      'expo-permissions': '*',
      'expo-splash-screen': '*',
      'prop-types': '*',
      'react-native-safe-area-context': '*',

      // Packages that are not really required
      // TODO: THESE SHOULD BE REMOVED ONCE THE SNACK-SDK HANDLES ADDING/REMOVING/UPDATING DEPENDENCIES BETTER
      'expo-camera': '*',
      'expo-gl': '*',
      'expo-image-picker': '*',
      'expo-linear-gradient': '*',
    },
  },
  '40.0.0': {
    version: '^40.0.0',
    coreModules: {
      ...assets,
      ...unimodules,
      expo: '40.0.1',
      react: '16.13.1',
      'react-native': '0.63.2',
      'react-dom': '*',
      'react-native-web': '*',
    },
    bundledModules: {
      // Packages that require special initialisation (see Modules.tsx)
      'expo-asset': '*',
      'expo-font': '*',
      'react-native-gesture-handler': '*',
      'react-native-safe-area-context': '*',
      // 'react-native-vector-icons': '*',
      '@expo/vector-icons': '*',

      // Packages that are used internally by the runtime
      'expo-constants': '*',
      'expo-file-system': '*',
      'expo-permissions': '*',
      'expo-updates': '*',
      '@react-native-community/async-storage': '*',

      // Common packages that are included for easy of use
      'prop-types': '*',
    },
  },
  '41.0.0': {
    version: '^41.0.0',
    coreModules: {
      ...assets,
      ...unimodules,
      expo: '41.0.0',
      react: '16.13.1',
      'react-native': '0.63.2',
      'react-dom': '*',
      'react-native-web': '*',
    },
    bundledModules: {
      // Packages that require special initialisation (see Modules.tsx)
      'expo-asset': '*',
      'expo-font': '*',
      'react-native-gesture-handler': '*',
      'react-native-safe-area-context': '*',
      // 'react-native-vector-icons': '*',
      '@expo/vector-icons': '*',

      // Packages that are used internally by the runtime
      'expo-constants': '*',
      'expo-file-system': '*',
      'expo-permissions': '*',
      'expo-updates': '*',
      '@react-native-async-storage/async-storage': '*',

      // Common packages that are included for easy of use
      'prop-types': '*',
    },
  },
};

export default sdks;
