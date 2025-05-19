import { FlatList, StyleSheet } from "react-native"
import { ListItem } from "./ListItem"
import { Text } from "react-native-paper";
import { useTodosData } from "@/context/useTodosData";

export const TodoList: React.FC = () => {
    const { todosInfo } = useTodosData();

    return (
        <FlatList
            data={todosInfo.todos}
            keyExtractor={item => item.id + item.title}
            renderItem={({ item }) => <ListItem item={item} />}
            contentContainerStyle={styles.list}
            ListEmptyComponent={<Text style={styles.empty}>No tasks yet</Text>}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        paddingBottom: 100,
    },
    empty: {
        textAlign: 'center',
        marginTop: 40,
        fontWeight: 'bold'
    },
});