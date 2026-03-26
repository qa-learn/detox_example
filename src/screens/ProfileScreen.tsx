import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProfileScreenProps {
  username: string;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ username }) => {
  return (
    <View style={styles.container} testID="profile-screen">
      <Text style={styles.heading} testID="profile-heading">Profile</Text>

      <View style={styles.infoRow}>
        <Text style={styles.label} testID="username-label">Username:</Text>
        <Text style={styles.value} testID="username-value">{username}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 15,
    width: '100%',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#666',
  },
  value: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;