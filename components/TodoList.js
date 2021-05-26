import React from 'react'
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native'

const TodoList = ({todos, deleteTodo}) => {
    const rederList = todos && todos.map(todo => (
        <View key={todo.id} style={styles.item}>
            <Text style={{flex: 7, color: 'white', padding:5}}>{todo.value}  </Text>
            <Button color="red"  title="Delete" onPress={()=>{ deleteTodo(todo.id)}} />
        </View>
    ))
    return (
        <ScrollView>
            <Text style={styles.header}> Todo List</Text>
            <View>
                {rederList}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header : {
        fontSize: 25,
        marginTop: 15,
        fontWeight: "bold"
    },
    item: {
        backgroundColor: '#1565c0',
        color: 'white',
        padding: 5,
        marginVertical: 8,
        marginHorizontal: 16,
        flex:1,
        flexDirection: 'row'
      },
    
})
export default TodoList
