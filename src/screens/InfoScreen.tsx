import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

const InfoScreen: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      testID="info-screen-scroll-view"
    >
      <Text style={styles.heading} testID="info-heading">Information</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsExpanded(!isExpanded)}
        testID="show-info-button"
      >
        <Text style={styles.buttonText}>Show Info</Text>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.infoContent} testID="info-details-text">
          <Text style={styles.bodyText}>
            This text is provided for testing purposes.
            Do not ask to see the hidden meaning here.
          </Text>
          <Text style={styles.bodyText}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  infoContent: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  bodyText: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
    marginBottom: 10,
  },
});

export default InfoScreen;