import React from "react";
import { SafeAreaView, Text } from "react-native";

export interface IFavoritesProps {}

export const Favorites: React.FC<IFavoritesProps> = ({ navigation }) => {
	return (
		<SafeAreaView>
			<Text>Favorites</Text>
		</SafeAreaView>
	);
};
