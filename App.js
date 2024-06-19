import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RangeSelectionScreen from "./src/screens/RangeSelectionScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { DateRangeProvider } from "./src/DateRangerContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DateRangeProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Statistics"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Statistics" component={HomeScreen} />
          <Stack.Screen
            name="RangeSelection"
            component={RangeSelectionScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DateRangeProvider>
  );
}
