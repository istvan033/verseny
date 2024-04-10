/*
* File: Versenyzok.js
* Author: Pásztor István
* Copyright: 2024, Pásztor István
* Group: Szoft II/2/N
* Date: 2024-04-10
* Github: https://github.com/istvan033/
* Licenc: GNU GPL
*/

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const YourComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/versenyzok');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      
      <Text style={styles.text}>{`Név: ${item.nev}`}</Text>
      <Text style={styles.text}>{`Születés: ${item.szuletes}`}</Text>
      <Text style={styles.text}>{`Nem: ${item.nem}`}</Text>
      <Text style={styles.text}>{`Súly: ${item.suly}`}</Text>
      <Text style={styles.text}>{`KlubId: ${item.klubId}`}</Text>

    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Versenyzők</Text>
      {data ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>Loading data...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    marginBottom: 16,
  },
  itemContainer: {
    borderWidth: 4,
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
});

export default YourComponent;