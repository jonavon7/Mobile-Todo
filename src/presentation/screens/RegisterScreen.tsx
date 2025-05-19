import { RouteName } from '@/navigation/RouteName';
import { createUserWithEmailAndPassword, getAuth } from '@react-native-firebase/auth';
import { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Button, Card, Text, TextInput, useTheme } from 'react-native-paper';

const RegisterScreen = ({ navigation }) => {
    const { colors } = useTheme();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        createUserWithEmailAndPassword(getAuth(), 'jane.doe@example.com', 'SuperSecretPassword!')
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
        <KeyboardAvoidingView style={[styles.container, { backgroundColor: colors.backdrop }]} behavior="padding">
            <Card style={styles.card} elevation={5}>
                <Card.Content>
                    {/* <Image
                        source={require('../../assets/logo.png')} // replace with your logo
                        style={styles.logo}
                        resizeMode="contain"
                    /> */}
                    <Text variant="headlineMedium" style={styles.title}>
                        Create Account
                    </Text>
                    <TextInput
                        label="Email"
                        mode="outlined"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={styles.input}
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
                        onPress={register}
                        style={styles.button}
                        contentStyle={{ paddingVertical: 6 }}
                    >
                        Register
                    </Button>
                    <Button
                        mode="text"
                        onPress={() => navigation.navigate(RouteName.Login)}
                        style={styles.footer}
                        labelStyle={{ color: colors.outline }}
                    >
                        Already have an account? Login
                    </Button>
                </Card.Content>
            </Card>
        </KeyboardAvoidingView>
    )
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

export default RegisterScreen;