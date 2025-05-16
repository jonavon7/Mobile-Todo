import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteName } from "./RouteName";
import LoginScreen from "@/presentation/screens/LoginScreen";

const AppStackNavigation = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={RouteName.Login}
            screenOptions={() => ({
                headerShown: false,
            })}
            >
            <Stack.Screen
                name={RouteName.Login}
                component={LoginScreen}
            />
        </Stack.Navigator>
    );
}

export default AppStackNavigation;

{/* <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Todo" component={TodoScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator> */}