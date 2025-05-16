import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';
import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button, Card, Text, TextInput, useTheme } from 'react-native-paper';

export default function LoginScreen({ navigation }) {
    const { colors } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        console.log('click')
        signInWithEmailAndPassword(getAuth(), 'admin@test.com', 'admin1')
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                }

                console.error(error);
            });
    };

    return (
        <KeyboardAvoidingView style={[styles.container, {backgroundColor: colors.backdrop}]} behavior="padding">
            <Card style={styles.card} elevation={5}>
                <Card.Content>
                    {/* <Image
                        source={require('../../assets/logo.png')} // 👈 replace with your logo
                        style={styles.logo}
                        resizeMode="contain"
                    /> */}
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
                    <Text variant="bodySmall" style={[styles.footer, {color: colors.outline}]}>
                        Don’t have an account? Sign Up
                    </Text>
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
      width: 80,
      height: 80,
      alignSelf: 'center',
      marginBottom: 10,
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
    footer: {
      textAlign: 'center',
      marginTop: 16,
    },
  });
