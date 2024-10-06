import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tela inicial do App</Text>
      <TextInput style={styles.input} keyboardType='numeric' title='Login' />
      <TextInput style={styles.input} keyboardType='numeric' title='Senha' />
      <Button title='Login' onPress={() => alert('Ok')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tela inicial do App</Text>
      <TextInput style={styles.input} keyboardType='numeric' title='Login' />
      <TextInput style={styles.input} keyboardType='numeric' title='Senha' />
      <Button title='Login' onPress={() => alert('Ok')} />
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});
