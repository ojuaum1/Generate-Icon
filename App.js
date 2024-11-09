import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Item Navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Telas de importação
import OptionsIcon from './Pages/OptionsIcon';
import ViewIcon from './Pages/ViewIcon';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OptionsIcon" component={OptionsIcon} />
        <Stack.Screen name="ViewIcon" component={ViewIcon} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',  // cor de fundo suave
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,  // margem interna para dar mais espaço
  },
  titleText: {
    fontSize: 24,  // tamanho maior para títulos
    fontWeight: 'bold',
    color: '#333',  // cor escura para o texto
  },
  subtitleText: {
    fontSize: 16,
    color: '#666',  // cor cinza para subtítulos
  },
  button: {
    backgroundColor: '#8758FF',  // cor roxa para o botão
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',  // texto branco para contraste com o botão
    fontSize: 18,
    fontWeight: '600',
  },
});
