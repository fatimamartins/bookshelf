import React from "react";
import { SafeAreaView, Text } from "react-native";

export interface ILoginScreenProps {}

export const LoginScreen: React.FC<ILoginScreenProps> = () => {
	return (
		<SafeAreaView style={{ backgroundColor: "red" }}>
			<Text>Olá</Text>
		</SafeAreaView>
	);
};
