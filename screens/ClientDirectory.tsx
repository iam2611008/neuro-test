import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

function ClientDirectory() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Button title="New Client" />
        </View>
        <View style={styles.cardContent}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50
  },
  cardContainer: {
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    maxWidth: 600,
    padding: 20,
    backgroundColor: '#fff'
  },
  cardHeader: {
    alignSelf: 'flex-start',
    marginBottom: 20
  },
  cardContent: {
    flexDirection: 'row'
  }
});

export default ClientDirectory;
