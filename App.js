import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
