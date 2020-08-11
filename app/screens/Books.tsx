import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

export interface IBooksProps {}

export const Books: React.FC<IBooksProps> = () => {
	return (
		<SafeAreaView>
			<TouchableOpacity onPress={() => {}}>
				<Text>Books</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
