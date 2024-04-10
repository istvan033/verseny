/*
* File: App.js
* Author: Pásztor István
* Copyright: 2024, Pásztor István
* Group: Szoft II/2/N
* Date: 2024-04-10
* Github: https://github.com/danieltakacs1/
* Licenc: GNU GPL
*/

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Nevjegy from "./screens/Nevjegy";
import Versenyzok from "./screens/Versenyzok";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Nevjegy" >
        <Stack.Screen name="Nevjegy" component={Nevjegy} />
        <Stack.Screen name="Versenyzok" component={Versenyzok} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};