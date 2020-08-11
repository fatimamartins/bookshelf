import * as React from "react";
import Svg, { G, Path, Circle } from "react-native-svg";

interface IUserProps {
	focused: boolean;
}

export const User: React.FC<IUserProps> = ({ focused }) => {
	if (focused) {
		return (
			<Svg width={18} height={20} viewBox="0 0 18 20">
				<G
					transform="translate(1 1)"
					stroke="#4A22B6"
					strokeWidth={2}
					fill="none"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<Path d="M16 18v-2a4 4 0 00-4-4H4a4 4 0 00-4 4v2" />
					<Circle cx={8} cy={4} r={4} />
				</G>
			</Svg>
		);
	} else {
		return (
			<Svg width={18} height={20} viewBox="0 0 18 20">
				<G
					transform="translate(1 1)"
					stroke="#4A22B6"
					strokeWidth={2}
					fill="none"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<Path d="M16 18v-2a4 4 0 00-4-4H4a4 4 0 00-4 4v2" />
					<Circle cx={8} cy={4} r={4} />
				</G>
			</Svg>
		);
	}
};
