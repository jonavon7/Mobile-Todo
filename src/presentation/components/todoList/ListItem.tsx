import { useTodosData } from "@/context/useTodosData";
import { Todo } from "@/model/Todo";
import { iconSizeSMedium } from "@/presentation/theme/CustomTheme";
import { StyleSheet } from "react-native";
import { Card, Checkbox, Text, IconButton, useTheme } from "react-native-paper";

interface ListItemProps {
    item: Todo;
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
    const { colors } = useTheme();
    const { todosInfo, setTodos } = useTodosData();

    const toggleTaskDone = (id: number) => {
        setTodos({
            ...todosInfo,
            todos: todosInfo.todos.map(t => t.id === id ? { ...t, done: !t.done } : t),
            pendingTodos: todosInfo.pendingTodos + (todosInfo.todos.find(t => t.id === id)?.done ? 1 : -1),
            completedTodos: todosInfo.completedTodos + (todosInfo.todos.find(t => t.id === id)?.done ? -1 : 1),
        });
    };

    const deleteTask = (id: number) => {
        setTodos({
            ...todosInfo,
            todos: todosInfo.todos.filter(t => t.id !== id),
            pendingTodos: todosInfo.pendingTodos - (item.done ? 0 : 1),
            completedTodos: todosInfo.completedTodos - (item.done ? 1 : 0),
            allTodos: todosInfo.allTodos - 1,
        });
    };

    return (
        <Card style={[styles.todoItem, { backgroundColor: colors.surfaceVariant }]} onPress={() => toggleTaskDone(item.id)}>
            <Card.Content style={styles.todoRow}>
                <Checkbox
                    status={item.done ? 'checked' : 'unchecked'}
                    onPress={() => toggleTaskDone(item.id)}
                    color={colors.primary}
                />
                <Text
                    style={[
                        styles.todoText,
                        {
                            textDecorationLine: item.done ? 'line-through' : 'none',
                            color: item.done ? colors.onSurfaceVariant : colors.onSurface,
                        },
                    ]}
                >
                    {item.title}
                </Text>
                <IconButton
                    icon="delete"
                    size={iconSizeSMedium}
                    onPress={() => deleteTask(item.id)}
                    style={styles.deleteButton}
                    iconColor={colors.error}
                />
            </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    todoItem: {
        marginBottom: 10,
        borderRadius: 8,
        elevation: 2,
    },
    todoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    todoText: {
        fontSize: 16,
        flex: 1,
        marginLeft: 8,
        flexShrink: 1,
    },
    deleteButton: {
        marginLeft: 8,
    },
});