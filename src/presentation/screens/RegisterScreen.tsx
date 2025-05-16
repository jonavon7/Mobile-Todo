import { createUserWithEmailAndPassword, getAuth } from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const RegisterScreen = ({ navigation }) => {
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
        <></>
    )
}

export default RegisterScreen;