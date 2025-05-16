import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { auth } from '../firebaseConfig';
import { signOut } from 'firebase/auth';

export default function TodoScreen() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState<string[]>([]);

    const addTodo = () => {
        if (todo.trim()) {
            setTodos([...todos, todo]);
            setTodo('');
        }
    };

    return (
        <View>
            <Button title="Logout" onPress={() => signOut(auth)} />
            <TextInput placeholder="New task" value={todo} onChangeText={setTodo} />
            <Button title="Add" onPress={addTodo} />
            <FlatList data={todos} renderItem={({ item }) => <Text>• {item}</Text>} />
        </View>
    );
}
