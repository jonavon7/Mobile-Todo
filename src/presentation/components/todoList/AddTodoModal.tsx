import { useTodosData } from "@/context/useTodosData";
import { Todo } from "@/model/Todo";
import { height, iconSizeMedium, width } from "@/presentation/theme/CustomTheme";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, TextInput, useTheme, Portal, Modal, IconButton, Text } from "react-native-paper";

interface AddTodoModalProps {
    isModalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    onTaskAdded: () => void;
}

export const AddTodoModal: React.FC<AddTodoModalProps> = ({ isModalVisible, setModalVisible, onTaskAdded }) => {
    const { colors } = useTheme();
    const { todosInfo, setTodos } = useTodosData();
    const [task, setTask] = useState<string>('');

    const handleAddItem = () => {
        if (!task.trim()) return;

        const newTodo: Todo = {
            id: Date.now(),
            title: task.trim(),
            done: false,
        };

        setTodos({
            todos: [...todosInfo.todos, newTodo],
            pendingTodos: todosInfo.pendingTodos + 1,
            completedTodos: todosInfo.completedTodos,
            allTodos: todosInfo.allTodos + 1,
        });

        setTask('');
        setModalVisible(false);
        onTaskAdded();
    };

    return (
        <Portal>
            <Modal
                visible={isModalVisible}
                onDismiss={() => setModalVisible(false)}
                contentContainerStyle={[
                    styles.modalContainer,
                    { 
                        backgroundColor: colors.secondaryContainer, 
                        width: width * 0.9, 
                        maxHeight: height * 0.6 
                    },
                ]}
            >
                <View style={styles.container}>
                    <IconButton
                        icon="close"
                        size={iconSizeMedium}
                        onPress={() => setModalVisible(false)}
                        style={styles.closeIcon}
                        iconColor={colors.onSecondaryContainer}
                    />
                    <Text variant="headlineSmall" style={[styles.title, { color: colors.onSecondaryContainer }]}>
                        Add a New Task
                    </Text>
                    <TextInput
                        label="Task Name"
                        placeholder="Enter your task here"
                        value={task}
                        onChangeText={setTask}
                        mode="outlined"
                        style={styles.input}
                        theme={{
                            colors: {
                                text: colors.onSecondaryContainer,
                                placeholder: colors.onSecondaryContainer,
                                background: colors.secondaryContainer,
                            },
                        }}
                    />
                    <Button
                        mode="contained"
                        onPress={handleAddItem}
                        disabled={!task.trim()}
                        style={styles.addButton}
                        contentStyle={{ paddingVertical: 8 }}
                        buttonColor={colors.primary}
                        textColor={colors.onPrimary}
                    >
                        Add Task
                    </Button>
                </View>
            </Modal>
        </Portal>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderRadius: 12,
    },
    title: {
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        marginBottom: 20,
    },
    addButton: {
        marginTop: 16,
        borderRadius: 8,
    },
    modalContainer: {
        alignSelf: 'center',
        borderRadius: 12,
        elevation: 6,
        padding: 16,
    },
    closeIcon: {
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 1,
    },
});