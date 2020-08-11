import React from "react";
import { SafeAreaView, Text } from "react-native";

export interface IAccountSettingsProps {}

export const AccountSettings: React.FC<IAccountSettingsProps> = ({
	navigation,
}) => {
	return (
		<SafeAreaView>
			<Text>Home</Text>
		</SafeAreaView>
	);
};
