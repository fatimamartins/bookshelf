import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

export interface IHomeScreenProps {}

export const HomeScreen: React.FC<IHomeScreenProps> = ({ navigation }) => {
	return (
		<SafeAreaView>
			<Text>Home</Text>
		</SafeAreaView>
	);
};
