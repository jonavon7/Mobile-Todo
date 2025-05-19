import { FirebaseAuthTypes, getAuth, onAuthStateChanged } from "@react-native-firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

export interface LoginData {
    // Set an initializing state whilst Firebase connects
    initializing: boolean;
    // Handle user state changes
    user: FirebaseAuthTypes.User | null;
}

const LoginContext = createContext<LoginData>({
    initializing: true,
    user: null
});

export const useLoginData = (): LoginData => useContext(LoginContext);

export const LoginDataProvider = ({ children: children }) => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);

    function handleAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = onAuthStateChanged(getAuth(), handleAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    const value = {
        initializing,
        user
    };

    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
}
