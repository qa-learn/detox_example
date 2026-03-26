import React, { useState } from 'react';
import { StatusBar, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import LoginScreen from './src/screens/LoginScreen';
import SecureAreaScreen from './src/screens/SecureAreaScreen';
import InfoScreen from './src/screens/InfoScreen';
import ProfileScreen from './src/screens/ProfileScreen';

type Screen = 'login' | 'secureArea' | 'info' | 'profile';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const [currentScreen, setCurrentScreen] = useState<Screen>('login');
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('Guest');

  const handleNavigateToSecureArea = () => {
    setShowLogoutMessage(false);
    // В реальном приложении мы бы брали это из инпута,
    // здесь захардкодим имя для ProfileScreen
    setLoggedInUser('tomsmith');
    setCurrentScreen('secureArea');
  };

  const handleLogout = () => {
    setShowLogoutMessage(true);
    setCurrentScreen('login');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'login':
        return (
          <LoginScreen
            onNavigateToSecureArea={handleNavigateToSecureArea}
            showLogoutMessage={showLogoutMessage}
          />
        );
      case 'secureArea':
        return <SecureAreaScreen onLogout={handleLogout} />;
      case 'info':
        return <InfoScreen />;
      case 'profile':
        return <ProfileScreen username={loggedInUser} />;
      default:
        return <LoginScreen onNavigateToSecureArea={handleNavigateToSecureArea} />;
    }
  };

  return (
    <View
      style={[styles.container, { paddingTop: safeAreaInsets.top }]}
      testID="appRoot">

      <View style={{ flex: 1 }}>
        {renderScreen()}
      </View>

      {/* Tab Navigation - показываем только если залогинены */}
      {currentScreen !== 'login' && (
        <View style={styles.tabBar} testID="tab-bar">
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => setCurrentScreen('secureArea')}
            testID="tab-secure"
          >
            <Text style={[styles.tabText, currentScreen === 'secureArea' && styles.activeTabText]}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => setCurrentScreen('info')}
            testID="tab-info"
          >
            <Text style={[styles.tabText, currentScreen === 'info' && styles.activeTabText]}>Info</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => setCurrentScreen('profile')}
            testID="tab-profile"
          >
            <Text style={[styles.tabText, currentScreen === 'profile' && styles.activeTabText]}>Profile</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#f9f9f9',
    paddingBottom: 5,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#999',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default App;