import { RouteName } from '@/navigation/RouteName';
import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button, Card, Text, TextInput, useTheme } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
    const { colors } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        signInWithEmailAndPassword(getAuth(), email, password)
            .then(() => {
                console.log('Signed in!');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: colors.backdrop }]} behavior="padding">
            <Card style={styles.card} elevation={5}>
                <Card.Content>
                    <Image
                        source={require('../assets/Logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <Text variant="headlineMedium" style={styles.title}>
                        Welcome Back
                    </Text>
                    <TextInput
                        label="Email"
                        mode="outlined"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        label="Password"
                        mode="outlined"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        style={styles.input}
                    />
                    <Button
                        mode="contained"
                        onPress={login}
                        style={styles.button}
                        contentStyle={{ paddingVertical: 6 }}
                    >
                        Login
                    </Button>
                    <Button
                        mode='text'
                        onPress={() => navigation.replace(RouteName.Register)}
                        style={styles.button}
                        labelStyle={{ color: colors.outline }}
                    >
                        Don’t have an account? Sign Up
                    </Button>
                </Card.Content>
            </Card>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        borderRadius: 16,
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 16,
        borderRadius: 100,
    },
    title: {
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        marginVertical: 8,
    },
    button: {
        marginTop: 16,
        borderRadius: 8,
    },
});
