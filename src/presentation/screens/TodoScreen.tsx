import { getAuth, signOut } from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';

export default function TodoScreen() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = () => {
        if (todo.trim()) {
            setTodos([...todos, todo]);
            setTodo('');
        }
    };

    const logOut = () => {
        signOut(getAuth()).then(() => console.log('User signed out!'));
    }

    return (
        <View>
            <Button title="Logout" onPress={logOut} />
            <TextInput placeholder="New task" value={todo} onChangeText={setTodo} />
            <Button title="Add" onPress={addTodo} />
            <FlatList data={todos} renderItem={({ item }) => <Text>• {item}</Text>} />
        </View>
    );
}
