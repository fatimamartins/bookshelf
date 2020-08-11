import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import {
	HomeScreen,
	Books,
	LoginScreen,
	Favorites,
	AccountSettings,
} from "./screens";
import { Home, Book, Heart, User } from "./assets/svg";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
	const [userToken, setUserToken] = useState("123");

	return (
		<NavigationContainer>
			{userToken ? (
				<Tab.Navigator
					screenOptions={({ route }) => ({
						tabBarIcon: ({ focused }) => {
							if (route.name === "Home") {
								return <Home focused={focused} />;
							} else if (route.name === "Books") {
								return <Book focused={focused} />;
							} else if (route.name === "Favorites") {
								return <Heart focused={focused} />;
							} else {
								return <User focused={focused} />;
							}
						},
					})}
					tabBarOptions={{
						activeTintColor: "#4A22B6",
						inactiveTintColor: "gray",
					}}
				>
					<Tab.Screen
						name="Home"
						component={HomeScreen}
						options={{ title: "Home" }}
					/>
					<Tab.Screen
						name="Books"
						component={Books}
						options={{ title: "Books" }}
					/>
					<Tab.Screen
						name="Favorites"
						component={Favorites}
						options={{ title: "Favorites" }}
					/>
					<Tab.Screen
						name="Account Settings"
						component={AccountSettings}
						options={{ title: "Account Settings" }}
					/>
				</Tab.Navigator>
			) : (
				<Stack.Navigator headerMode="none">
					<Stack.Screen
						name="LoginScreen"
						component={LoginScreen}
						options={{ title: "Login" }}
					/>
				</Stack.Navigator>
			)}
		</NavigationContainer>
	);
};

export default App;
