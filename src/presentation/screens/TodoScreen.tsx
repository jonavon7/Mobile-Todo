import { getAuth, signOut } from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FAB, Text, useTheme, Snackbar, IconButton, Badge } from 'react-native-paper';
import { TodoList } from '../components/todoList/TodoList';
import { AddTodoModal } from '../components/todoList/AddTodoModal';
import { useTodosData } from '@/context/useTodosData';
import { iconSizeMedium } from '../theme/CustomTheme';

const TodoScreen: React.FC = () => {
    const { colors } = useTheme();
    const { todosInfo } = useTodosData();
    const [isModalVisible, setModalVisible] = useState(false);
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    const logOut = () => {
        signOut(getAuth()).then(() => console.log('User signed out!'));
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'short',
    }).format(new Date());

    return (
        <View style={[styles.container, { backgroundColor: colors.backdrop }]}>
            <View style={[styles.header, { backgroundColor: colors.primary }]}>
                <View>
                    <Text variant="headlineSmall" style={[styles.headerText, { color: colors.onPrimary }]}>
                        Today’s Task
                    </Text>
                    <Text style={[styles.dateText, { color: colors.onPrimary }]}>
                        {formattedDate}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <View style={styles.badgeContainer}>
                            <Text style={[styles.badgeText, { color: colors.onPrimary }]}>
                                All
                            </Text>
                            <Badge
                                style={[{ backgroundColor: colors.onPrimary, color: colors.primary }]}
                            >
                                {todosInfo.allTodos + 1}
                            </Badge>
                        </View>
                        <Text style={[styles.separator, { color: colors.onPrimary }]}>
                            |
                        </Text>
                        <View style={styles.badgeContainer}>
                            <Text style={[styles.badgeText, { color: colors.onPrimary }]}>
                                Open
                            </Text>
                            <Badge
                                style={[{ backgroundColor: colors.onPrimary, color: colors.primary }]}
                            >
                                {todosInfo.pendingTodos}
                            </Badge>
                        </View>
                        <View style={styles.badgeContainer}>
                            <Text style={[styles.badgeText, { color: colors.onPrimary }]}>
                                Closed
                            </Text>
                            <Badge
                                style={[{ backgroundColor: colors.onPrimary, color: colors.primary }]}
                            >
                                {todosInfo.completedTodos}
                            </Badge>
                        </View>
                    </View>
                </View>
                <IconButton
                    icon="logout"
                    size={iconSizeMedium}
                    onPress={logOut}
                    iconColor={colors.onPrimary}
                />
            </View>
            <TodoList />
            <FAB
                label="Add Task"
                icon="plus"
                onPress={() => setModalVisible(true)}
                style={styles.addButton}
            />
            <AddTodoModal
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}
                onTaskAdded={() => setSnackbarVisible(true)}
            />
            <Snackbar
                visible={snackbarVisible}
                onDismiss={() => setSnackbarVisible(false)}
                duration={2000}
                style={{ backgroundColor: colors.primary }}
                theme={{ colors: { surface: colors.onPrimary } }}
            >
                Task added successfully!
            </Snackbar>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 4,
    },
    headerText: {
        fontWeight: 'bold',
    },
    dateText: {
        fontSize: 14,
        marginBottom: 8,
        opacity: 0.8,
    },
    badgeContainer: {
        marginRight: 8,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: 0.8,
    },
    badgeText: {
        marginRight: 5,
        fontWeight: 'bold',
    },
    separator: {
        marginRight: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    addButton: {
        marginTop: 16,
        borderRadius: 8,
    },
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
});

export default TodoScreen;
