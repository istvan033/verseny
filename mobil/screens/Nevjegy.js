/*
* File: Nevjegy.js
* Author: Pásztor István
* Copyright: 2024, Pásztor István
* Group: Szoft II/2/N
* Date: 2024-04-10
* Github: https://github.com/istvan033/
* Licenc: GNU GPL
*/

import { StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Nevjegy() {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
          <Text style={styles.titleText}>Pásztor István, SZOFT II/2/N, 2024.04.10.</Text>
          <Button
              title='Versenyzok'
              onPress={() => navigation.navigate("Versenyzok")}
          />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 200,
  },
});