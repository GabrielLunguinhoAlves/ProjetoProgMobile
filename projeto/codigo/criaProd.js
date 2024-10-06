import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Codigo"
        keyboardType={'numeric'}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType={'numeric'}
      />
      <Button title='Salvar' />
    </View>
  );
}

const styles = StyleSheet.create({

inputContainer: {
    flex: 1,
    marginTop: 30,
    marginLeft: '5%',
    width: '90%',
    padding: 20,
    alignItems: 'stretch',
    backgroundColor: '#fff',
  },
input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch',
  },
});