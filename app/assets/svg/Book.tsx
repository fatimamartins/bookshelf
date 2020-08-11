import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

interface IBookProps {
	focused: boolean;
}

export const Book: React.FC<IBookProps> = ({ focused }) => {
	if (focused) {
		return (
			<Svg width={18} height={22} viewBox="0 0 18 22">
				<G
					stroke="#4A22B6"
					strokeWidth={2}
					fill="none"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<Path d="M1 18.5A2.5 2.5 0 013.5 16H17" />
					<Path d="M3.5 1H17v20H3.5A2.5 2.5 0 011 18.5v-15A2.5 2.5 0 013.5 1z" />
				</G>
			</Svg>
		);
	} else {
		return (
			<Svg width={18} height={22} viewBox="0 0 18 22">
				<G
					stroke="#4A22B6"
					strokeWidth={2}
					fill="none"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<Path d="M1 18.5A2.5 2.5 0 013.5 16H17" />
					<Path d="M3.5 1H17v20H3.5A2.5 2.5 0 011 18.5v-15A2.5 2.5 0 013.5 1z" />
				</G>
			</Svg>
		);
	}
};
