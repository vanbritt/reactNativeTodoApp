import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Platform, StyleSheet, Text, TextInput, ToastAndroid, View } from 'react-native';
import TodoList from './components/TodoList';

export default function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);
  const addTodo = ()=>{
    if(text){
    const list = [...todos,{id: Math.floor(Math.random()*1000), value: text}]
    setTodos(list);
    setText("")
    }else{
      if (Platform.OS === 'android') {
        ToastAndroid.show("Fill in Task", ToastAndroid.SHORT)
      } 
    }

  }
  return (
    <View style={styles.container}>
      <Text style={styles.mainHeader}>Todo Application</Text>
      <TextInput style={styles.input} value={text} onChangeText={setText}></TextInput>

      <Button color='#1565c0' onPress={addTodo} title="Add Todo">Add Todo</Button>
        <TodoList todos={todos} deleteTodo={(id)=>{
          const list= todos.filter(todo => ( todo.id != id))
          setTodos(list);
        }}></TodoList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  mainHeader: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 36
  }
});
