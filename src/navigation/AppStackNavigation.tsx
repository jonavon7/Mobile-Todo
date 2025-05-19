import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RouteName } from "./RouteName";
import LoginScreen from "@/presentation/screens/LoginScreen";
import TodoScreen from "@/presentation/screens/TodoScreen";
import RegisterScreen from "@/presentation/screens/RegisterScreen";
import { useLoginData } from "@/context/useLoginData";

const AppStackNavigation: React.FC = () => {
  const Stack = createNativeStackNavigator();
  const {user} = useLoginData();  

  return (
    <Stack.Navigator
      initialRouteName={RouteName.Login}
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      {user ? (
        <Stack.Screen
          name={RouteName.TodoScreen}
          component={TodoScreen}
        />
      ) : (
        <>
          <Stack.Screen
            name={RouteName.Login}
            component={LoginScreen}
          />
          <Stack.Screen
            name={RouteName.Register}
            component={RegisterScreen}
          />
        </>
      )}

    </Stack.Navigator>
  );
}

export default AppStackNavigation;