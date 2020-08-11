import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

interface IHomeProps {
	focused: boolean;
}

export const Home: React.FC<IHomeProps> = ({ focused }) => {
	if (focused) {
		return (
			<Svg width={20} height={22} viewBox="0 0 20 22">
				<G
					stroke="#4A22B6"
					strokeWidth={2}
					fill="none"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<Path
						d="M1 8l9-7 9 7v11a2 2 0 01-2 2H3a2 2 0 01-2-2V8z"
						fill="#4A22B6"
					/>
					<Path fill="#FFF" d="M7 21V11h6v10" />
				</G>
			</Svg>
		);
	} else {
		return (
			<Svg width={20} height={22} viewBox="0 0 20 22">
				<G
					stroke="#4A22B6"
					strokeWidth={2}
					fill="none"
					fillRule="evenodd"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<Path
						d="M1 8l9-7 9 7v11a2 2 0 01-2 2H3a2 2 0 01-2-2V8z"
						fill="#4A22B6"
					/>
					<Path fill="#FFF" d="M7 21V11h6v10" />
				</G>
			</Svg>
		);
	}
};
