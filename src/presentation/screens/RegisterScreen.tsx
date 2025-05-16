import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Alert } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    const register = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (e) {
            Alert.alert('Registration Error', e.message);
        }
    };

    return (
        <></>
    )
}

export default RegisterScreen;