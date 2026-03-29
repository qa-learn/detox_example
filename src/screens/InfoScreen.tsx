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
        <Text style={styles.buttonText} testID="button-text">
          {isExpanded ? 'Hide Info' : 'Show Info'}
        </Text>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.infoContent} testID="info-details-view">
          <Text style={styles.bodyText} testID="info-text">
            This text is provided for testing purposes. Do not ask to see the hidden meaning here.
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